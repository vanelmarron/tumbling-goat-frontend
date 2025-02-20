import { Link } from "react-router-dom";
import "./Footer.scss";

import tumblingGoat from "../../assets/logos/TumblingGoat_logo_orange.png";
import instagramIcon from "../../assets/images/instagram.svg";
import mailIcon from "../../assets/images/mail_24.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-wrapper">
        <img
          src={tumblingGoat}
          alt="Tumbling Goat Logo"
          className="footer__logo footer__logo"
        />
      </div>
      <div className="footer__content-wrapper">
        <div className="footer__pages">
          <ul className="footer-list">
            <li className="footer-list__item">Shop</li>
            <li className="footer-list__item">Our Story</li>
            <li className="footer-list__item">Find Us</li>
          </ul>
        </div>
        <div className="terms">
          <ul className="terms__list">
            <li className="footer-list__item">Terms & Conditions</li>
            <li className="footer-list__item">Returns</li>
          </ul>
        </div>
        <div className="contact">
          <p className="contact__text">Contact Us:</p>
          <div className="contact__links">
            <Link to="mailto:tumblinggoatpottery@gmail.com">
            <img src={mailIcon} alt="Email us" className="contact__email" />
            </Link>
            <Link to="https://www.instagram.com/tumblinggoatpottery/" target="_blank">
            <img
              src={instagramIcon}
              alt="Find us on Instagram"
              className="contact__instagram"
            />
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__logo-wrapper--tablet"></div>
    </footer>
  );
}

export default Footer;
