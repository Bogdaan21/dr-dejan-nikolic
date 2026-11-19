import { contact, external, logos } from "@/data/site";
import { getContent, type Locale } from "@/data/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const { vertical } = logos;
  const t = getContent(locale).footer;

  return (
    <div className="aali_tm_section">
      <div className="aali_tm_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="top">
              <div className="logo">
                <a className="brand_lockup" href="#home">
                  <img className="brand_footer_logo" src={vertical.light} width={vertical.width} height={vertical.height} alt={logos.alt} />
                </a>
              </div>
              <div className="social">
                <span>{t.follow}</span>
                <ul>
                  <li>
                    <a href={contact.instagramHref} {...external} aria-label="Instagram">
                      <i className="icon-instagram-3"></i>
                    </a>
                  </li>
                  <li>
                    <a href={contact.whatsappHref} {...external} aria-label="WhatsApp">
                      <img className="svg" src="/img/svg/social/whatsapp.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={contact.viberHref} aria-label="Viber">
                      <img className="svg" src="/img/svg/social/viber.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href={contact.emailHref} aria-label="Email">
                      <img className="svg" src="/img/svg/mail.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottom">
              <div className="left">
                <p>
                  {`© ${new Date().getFullYear()} ${t.rights} `}
                  <a className="made_by" href="http://botech.me/" target="_blank" rel="noopener">
                    botech IT Solutions
                  </a>
                </p>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a className="line_anim" href={contact.phoneHref}>{t.call}</a>
                  </li>
                  <li>
                    <a className="line_anim" href={contact.whatsappHref} {...external}>WhatsApp</a>
                  </li>
                  <li>
                    <a className="line_anim" href={contact.viberHref}>Viber</a>
                  </li>
                  <li>
                    <a className="line_anim" href={contact.emailHref}>Email</a>
                  </li>
                </ul>
              </div>
            </div>
            <span className="border moving_effect" data-direction="y" data-reverse="yes"></span>
          </div>
        </div>
        <span className="square moving_effect" data-direction="x">
          <a className="totop" href="#">
            <img className="svg one" src="/img/svg/arrow-top.svg" alt={t.top} />
            <img className="svg two" src="/img/svg/arrow-top.svg" alt="" />
          </a>
        </span>
      </div>
    </div>
  );
}
