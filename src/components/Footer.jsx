import React from "react";
import './Footer.css';
import Twitter2 from '../assets/twitter-2.png'
import Linkdin2 from '../assets/linkedin-2.png'
import Face2 from '../assets/facebook-2.png'
import ID from '../assets/ID.png'
import Mail from '../assets/mail.png'

function Footer() {
  return (
    <div className="foot">
      <h1>GET IN TOUCH</h1>
      <div className="footer-row">
        <div className="mail">
          <div className="d-flex align-items-center gap-2 mb-2">
            <img src={Mail} width="20" alt="Mail" />
            <p className="mb-0">kr12@hotmail.com</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={ID} width="20" alt="Phone" />
            <p className="mb-0">717-555-1234</p>
          </div>
        </div>
        <div className="contact-me">
          <button>CONTACT ME</button>
        </div>
        <div className="footer-end">
          <div className="socials-foot">
            <img src={Twitter2} width="20" alt="LinkedIn" />
            <img src={Linkdin2} width="20" alt="Facebook" />
            <img src={Face2} width="20" alt="Twitter" />
          </div>
          <p className="copyright">Copyright © 2019 KR</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
