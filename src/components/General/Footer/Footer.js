import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer container">
        <div className="footerMenuDiv grid">
          <div className="singleGrid">
            <span className="footerTitle">Company</span>
            <ul className="footerUl grid">
              <li className="footerLi">Wilczak 20B/40</li>
              <li className="footerLi">61-623 Poznan</li>
              <li className="footerLi">Tax No.: 499-06-50-123</li>
              <li className="footerLi">Poland</li>
            </ul>
          </div>

          <div className="singleGrid">
            <span className="footerTitle">Questions</span>
            <ul className="footerUl grid">
              <li className="footerLi link">Sale Documents</li>
              <li className="footerLi link">Privacy and Cookies</li>
              <li className="footerLi link">Terms</li>
              <li className="footerLi link">Blog</li>
              <li className="footerLi link">Calculator</li>
            </ul>
          </div>

          <div className="singleGrid">
            <span className="footerTitle">Partners</span>
            <ul className="footerUl grid">
              <li className="footerLi link">IAAI</li>
              <li className="footerLi link">Bidcar</li>
              <li className="footerLi link">Bidfax</li>
            </ul>
          </div>

          <div className="singleGrid">
            <span className="footerTitle">Connect</span>
            <ul className="footerUl grid">
              <li className="footerLi link">Facebook</li>
              <li className="footerLi link">Instagram</li>
              <li className="footerLi link">LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="lowerSection grid">
          <p>2024 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
