import { useState } from 'react';
import profile from '../data/profile.js';
import SectionTitle from './SectionTitle.jsx';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      /* 忽略剪贴板不可用 */
    }
  };

  return (
    <section id="contact" className="section section--contact">
      <div className="container">
        <div className="reveal">
          <SectionTitle index="05" title="联系我" />
          <p className="contact__lead">如果我的经历与你的机会匹配，欢迎随时联系我。</p>
          <div className="contact__grid">
            <div className="contact__list">
              <p>
                <span>邮箱</span>
                <button className="contact__copy" onClick={copy}>
                  {copied ? '已复制 ✓' : profile.email}
                </button>
              </p>
              {profile.phone && (
                <p><span>电话</span><a href={`tel:${profile.phone}`}>{profile.phone}</a></p>
              )}
              {profile.wechat && (
                <p><span>微信</span><span>{profile.wechat}</span></p>
              )}
              {profile.github && (
                <p><span>GitHub</span><a href={profile.github} target="_blank" rel="noreferrer">{profile.github.replace('https://', '')}</a></p>
              )}
            </div>
            <div className="contact__cv">
              <a className="btn btn--solid" href={profile.resumeUrl} download>下载 PDF 简历</a>
              <p className="contact__hint">也可扫码查看本站（占位二维码）</p>
              <div className="contact__qr">QR</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
