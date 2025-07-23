import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../../images/icon/phone-call.png'
import icon2 from '../../../images/icon/mail.png'
import icon3 from '../../../images/footer/google-play.png'
import icon4 from '../../../images/footer/app-store.png'
import icon5 from '../../../images/icon/location.svg'

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

// const SubmitHandler = (e) => {
//   e.preventDefault()
// }

const Footer = (props) => {

  return (
    <footer className="footer footer-style-two footer-style-four bg_img pos-rel" style={{ backgroundColor: "#2f5ebc0d" }}>
        <div className="container">
            <div className="xb-footer">
                <div className="row">
                     <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <span className="xb-item--sub-title">Office Information</span>
                            <ul className="xb-item--holder list-unstyled">
                                <li className="xb-item--number">
                         <div className=" ul_li mb-4">
                            <div className=" information_icon">
                                <img src={icon1} alt="" />
                            </div>
                            <div className="xb-item--holder ms-3">
                                <p className="xb-item--content">Write to us</p>
                                <h4 className="xb-item--list lh-1">softtrade@gmail.com</h4>
                            </div>
                        </div>
                        <div className=" ul_li my-4">
                            <div className=" information_icon">
                                <span><img src={icon2} alt="" /></span>
                            </div>
                            <div className="xb-item--holder ms-3">
                                <p className="xb-item--content">Call Us</p>
                                <h4 className="xb-item--list lh-1">+91 4567554534</h4>
                            </div>
                        </div>
                        <div className=" ul_li my-4">
                            <div className=" information_icon">
                                <span><img src={icon5} alt="" /></span>
                            </div>
                            <div className="xb-item--holder ms-3">
                                <p className="xb-item--content">Office</p>
                                <h4 className="xb-item--list lh-1">Jaipur , India</h4>
                            </div>
                        </div>
                        </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <span className="xb-item--sub-title">Quick links</span>
                            <ul className="xb-item--holder list-unstyled">
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/">About Us</Link></li>
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Contact</Link></li>
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                {/* <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Price</Link></li>
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/contact">Real Feedback</Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <span className="xb-item--sub-title"> Products</span>
                            <ul className="xb-item--holder list-unstyled">
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Mobile ERP Apps</Link></li>
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Desktop ERP</Link></li>
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/blog">Web-Based ERP</Link></li>
                                <li className="xb-item--list"><Link onClick={ClickHandler} to="/">Cloud Base ERP</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                   
                    <div className="col-lg-3 col-md-6">
                        <div className=" footer-widget">
                             <span className="xb-item--sub-title">Follow Us</span>
                            <ul className="xb-item--social-link list-unstyled ul_li mt-2">
                                <li className="xb-item--social-icon"><Link onClick={ClickHandler} to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                <li className="xb-item--social-icon"><Link onClick={ClickHandler} to="/"><svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.82904 7.15568L14.3506 0.737305H13.0422L8.2478 6.31029L4.41855 0.737305H0.00195312L5.79254 9.16465L0.00195312 15.8953H1.31046L6.37345 10.01L10.4174 15.8953H14.834L8.82872 7.15568H8.82904ZM7.03686 9.23889L6.45015 8.39972L1.78194 1.72233H3.79173L7.55904 7.1112L8.14574 7.95037L13.0428 14.9551H11.033L7.03686 9.23921V9.23889Z" fill="white" />
                                  </svg></Link></li>
                                <li className="xb-item--social-icon"><Link onClick={ClickHandler} to="/"><i className="fab fa-linkedin-in"></i></Link></li>
                                <li className="xb-item--social-icon"><Link onClick={ClickHandler} to="/"><i className="fab fa-youtube"></i></Link></li>
                            </ul>
                            <span className="xb-item--sub-title mt-45"> download app</span>
                            <div className="xb-item--apps  d-flex">
                                <div className="xb-item--app">
                                    <Link onClick={ClickHandler} to="/"><img src={icon3} alt=""/></Link>
                                </div>
                                <div className="xb-item--app">
                                    <Link onClick={ClickHandler} to="/"><img src={icon4} alt=""/></Link>
                                    
                                </div>
                            </div>
                            {/* <div className="xb-item--input-box">
                                <label htmlFor="text6">📩 Email</label>
                                <form className="xb-item--input_field pos-rel" onSubmit={SubmitHandler}>
                                    <input type="email" name="gmail" id="text6"/>
                                    <button type="submit" className="xb-item--btn"><i className="fas fa-paper-plane"></i></button>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="footer-copyright ul_li_between">
                    <p className="copyright mt-20">Copyright © 2025 <Link onClick={ClickHandler} to="/">SOFTTRADE</Link>. All rights reserved.</p>
                    <ul className="hds-footer-links ul_li mt-20">
                        <li><Link onClick={ClickHandler} to="/terms-conditions">Terms & Conditions</Link></li>
                        <li><Link onClick={ClickHandler} to="/privacy-policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;