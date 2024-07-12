//rafce
import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-outer-wrapper">
      <div className="footer-container">
        <div className="footer-column1">
          <div className="footer-icons">
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Legal notice</li>
              <li>Service code </li>
              <li>&copy; 1997-2024 NetFlix,Inc.</li>
            </ul>
          </div>
        </div>
        <div className="footer-column2">
          <ul>
            <li>Help center</li>
            <li>Jobs</li>
            <li>Cookie preference</li>
          </ul>
        </div>
        <div className="footer-column3">
          <ul>
            <li>Gift cards</li>
            <li>Termes of use</li>
            <li>Corporate information</li>
          </ul>
        </div>
        <div className="footer-column4">
          <ul>
            <li>Media center</li>
            <li>Rrivacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
