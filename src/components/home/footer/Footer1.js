import React from 'react';
import { Link } from 'react-router-dom';
import { FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="main-footer gradient-footer">
    <div className="container ">
      <div className="row justify-content-between align-items-stretch flex-nowrap">
        {/* Left: Contact Info */}
        <div className="col-md-6 pt-5 col-lg-5 d-flex flex-column justify-content-center pe-lg-5 border-end footer-left">
          <div className="d-flex align-items-center mb-4">
            <div className="footer-icon-box me-3 call"><FiPhone /></div>
            <div>
              <div className="footer-label fw-bold ajay-footer">CALL US NOW</div>
              <div className="footer-value text-black fw-bold">+91-9888888888</div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="footer-icon-box me-3 address"><FiMapPin /></div>
            <div>
              <div className="footer-label fw-bold ajay-footer">CORPORATE OFFICE</div>
              <div className="footer-value-sm text-black fw-bold">E-154, Opposite Jain Temple, Mandi Marg, , Ambabari-302039</div>
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <div className="footer-icon-box mail-bg me-3 mail"><FiMail /></div>
            <div>
              <div className="footer-label fw-bold ajay-footer">EMAIL US</div>
              <div className="footer-value text-black fw-bold">sales@softtrade.in</div>
            </div>
          </div>
        </div>
        {/* Right: Quick Links and Social */}
        <div className="col-md-6 pt-5 col-lg-5 d-flex flex-column justify-content-center ps-lg-5 footer-right">
          <div className="mb-3 fw-bold text-uppercase text-secondary small ajay-footer">QUICK LINKS</div>
          <div className="mb-3">
            <Link to="/privacy-policy" className="footer-link-blue d-block mb-2 fw-bold">Privacy Policy</Link>
            <Link to="/about" className="footer-link-dark d-block mb-2 text-decoration-underline fw-bold">About Us</Link>
            <Link to="/contact" className="footer-link-dark d-block text-decoration-underline fw-bold">Contact</Link>
          </div>
          <div className="mb-2 fw-bold text-uppercase text-secondary small">CHANNELS</div>
          <div className="mb-4 d-flex align-items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social footer-facebook"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social footer-linkedin"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social footer-instagram"><FaInstagram /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social footer-youtube"><FaYoutube /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social footer-twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-copyright text-center py-3 text-secondary small border-top">
      © Copyright 2025 SoftTrade | All Rights Reserved
    </div>
  </footer>
);

export default Footer;