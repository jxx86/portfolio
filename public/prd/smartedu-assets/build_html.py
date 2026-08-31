# -*- coding: utf-8 -*-
"""把 SmartEdu PRD 的 Markdown 转成带侧边导航的单页 HTML（离线可读）。

用法：
    python assets/build_html.py
依赖：
    pip install markdown
"""
import re
import os
import html

import markdown

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BASE, "SmartEdu智能教育平台_需求规格说明书.md")
CSS = os.path.join(BASE, "assets", "prd_style.css")
OUT = os.path.join(BASE, "SmartEdu智能教育平台_需求规格说明书.html")

with open(SRC, encoding="utf-8") as f:
    md_text = f.read()

# ---------- 1. 移除 Markdown 自带的目录块（HTML 版用侧边栏导航） ----------
m = re.search(r'^## 目录\s*$', md_text, flags=re.M)
if m:
    nxt = re.search(r'^## ', md_text[m.end():], flags=re.M)
    end = m.end() + nxt.start() if nxt else len(md_text)
    md_text = md_text[:m.start()] + md_text[end:]

# ---------- 2. 给 h1~h3 加锚点 id，并收集目录 ----------
lines = md_text.split("\n")
in_code = False
toc = []
counter = 0
strip_md = lambda s: re.sub(r'[*`_\[\]()]', '', s).strip()

for i, ln in enumerate(lines):
    if ln.lstrip().startswith("```"):
        in_code = not in_code
        continue
    if in_code:
        continue
    hm = re.match(r'^(#{1,3})\s+(.*?)\s*$', ln)
    if hm:
        counter += 1
        level = len(hm.group(1))
        title = strip_md(hm.group(2))
        anchor = "sec-%d" % counter
        lines[i] = "%s %s {: #%s }" % (hm.group(1), hm.group(2), anchor)
        if level >= 2:
            toc.append((level, title, anchor))

md_text = "\n".join(lines)

# ---------- 3. 转换 ----------
body = markdown.markdown(
    md_text,
    extensions=["tables", "fenced_code", "attr_list", "sane_lists"],
    extension_configs={},
)

# ---------- 4. 侧边栏 ----------
nav = []
for level, title, anchor in toc:
    cls = "lv1" if level == 2 else "lv2"
    nav.append('<a class="%s" href="#%s" data-target="%s">%s</a>'
               % (cls, anchor, anchor, html.escape(title)))
nav_html = "\n".join(nav)

with open(CSS, encoding="utf-8") as f:
    css = f.read()

page = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>SmartEdu 智能教育平台 · 产品需求规格说明书</title>
<style>
%s
</style>
</head>
<body>
<div class="layout">
  <aside class="sidebar">
    <div class="sb-brand">
      <div class="t">SmartEdu 智能教育平台</div>
      <div class="s">PRD / SRS · V1.0</div>
    </div>
    <nav class="sb-nav" id="nav">
%s
    </nav>
  </aside>

  <div class="main">
    <div class="topbar">
      <span class="tag">PRD</span>
      <span style="font-size:13px;color:var(--ink-3)">产品需求规格说明书 · V1.0 需求基线</span>
      <span class="meta">68 条需求 · V1.0 交付 45 条</span>
    </div>
    <article class="doc">
%s
    </article>
  </div>
</div>
<script>
(function(){
  var links = Array.prototype.slice.call(document.querySelectorAll('#nav a'));
  var targets = links.map(function(a){
    return document.getElementById(a.getAttribute('data-target'));
  }).filter(Boolean);

  /* ---- 滚动锁：程序化跳转期间暂停 onScroll 的自动高亮切换 ---- */
  var scrollLock = false;
  var lockTimer = null;

  function setActive(idx){
    links.forEach(function(a){ a.classList.remove('active'); });
    if (links[idx]) {
      links[idx].classList.add('active');
      var r = links[idx].getBoundingClientRect();
      if (r.top < 60 || r.bottom > window.innerHeight - 40){
        links[idx].scrollIntoView({block:'center', behavior:'instant'});
      }
    }
  }

  function onScroll(){
    if (scrollLock) return;
    var idx = 0, top = window.scrollY + 120;
    for (var i = 0; i < targets.length; i++){
      if (targets[i].offsetTop <= top) idx = i; else break;
    }
    setActive(idx);
  }

  /* ---- 点击导航：显式滚动到目标 + 锁定自动高亮 ---- */
  links.forEach(function(a, i){
    a.addEventListener('click', function(e){
      e.preventDefault();
      var target = targets[i];
      if (!target) return;

      setActive(i);

      scrollLock = true;
      clearTimeout(lockTimer);

      target.scrollIntoView({behavior:'smooth', block:'start'});

      lockTimer = setTimeout(function(){
        scrollLock = false;
        onScroll();
      }, 800);
    });
  });

  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();
</script>
</body>
</html>
""" % (css, nav_html, body)

with open(OUT, "w", encoding="utf-8") as f:
    f.write(page)

print("OK ->", OUT)
print("sections:", len(toc))
print("size: %.1f KB" % (os.path.getsize(OUT) / 1024))
