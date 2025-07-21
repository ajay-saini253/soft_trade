import React from 'react'
import ContactForm from '../ContactFrom/ContactForm'
// import Bg from '../../../images/bg/cont_bg-shape.png'
// import Bg2 from '../../../images/bg/cont-bg02.png'
// import icon1 from '../../../images/icon/edit.svg'
import icon2 from '../../../images/icon/call-balck.png'
import icon3 from '../../../images/icon/sms-black.png'
// import icon4 from '../../../images/icon/loc-black.png'
// import icon5 from '../../../images/icon/bill.svg'
// import cImg from '../../../images/contact/cont-shape.png'
// import cImg2 from '../../../images/shape/con-shape.png'
import { Link } from 'react-router-dom'


const ContactSection = (props) => {
      const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        // <section className="contact contact-bg pt-140 pb-100 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
        <section className="contact contact-bg pt-50 pb-50 pos-rel bg_img" >
            <div className="container rounded-4" style={{ background: "#e6f0ff" }}>
                {/* <div className="contact-two pos-rel bg_img" style={{ backgroundImage: `url(${Bg2})` }}> */}
                <div className="contact-two pos-rel bg_img">

                    <div className="row mt-none-30">
                          <div className="col-lg-4 mt-30">
                            <div className="item-contact_info">
                                <div className="xb-item--inner">
                                    <div className="xb-item--top">
                                        <h3 className="xb-item--title">Contact Information</h3>
                                        <span className="xb-item--hotline "><img src={icon2} alt="" /> +(91) 12304-52859</span>
                                        <span className="xb-item--email"><img src={icon3} alt="" /> softtrade@example.com</span>
                                        <ul className="social_icons_block list-unstyled ul_li justify-content-center">
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link></li>
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact" aria-label="Twitter"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13.3872 0H15.9952L10.299 7.20048L17 17H11.7545L7.64298 11.0582L2.94415 17H0.332464L6.42395 9.29688L0 0H5.37853L9.09105 5.43101L13.3872 0ZM12.4711 15.2755H13.9155L4.5917 1.63462H3.0402L12.4711 15.2755Z" fill="#0C111D" />
                                                </svg></Link>
                                            </li>
                                            <li><Link onClick={ClickHandler} to="/contact" aria-label="Linkedin"><i className="fab fa-linkedin-in"></i></Link></li>
                                            <li>
                                            <Link onClick={ClickHandler} to="/contact" aria-label="Instagram">
                                                <i className="fab fa-instagram"></i>
                                            </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">India office</h3>
                                        <span className="xb-location">E-154, Opposite Jain Temple, Mandi Marg,Ambabari, Jaipur -302039</span>
                                    </div>
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">United states office</h3>
                                        <span className="xb-location">12 Buckingham Rd, example <br /> Thwaite, HG3 4 TY, USA</span>
                                    </div>
                                    <hr className="breack-line" />
                                    <div className="contact-info_widget">
                                        <h3 className="xb-title">our office open time</h3>
                                        <span className="xb-location">Mon - Sat : 8.00-5.00 <br /> Sunday : Closed</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-30">
                            <div className="cs-contact-wrap cs-contact-form" id="cs-contact-form-contactpage">

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="xb-shape"><img src={cImg2} alt=""/></div> */}
        </section>
    )
}

export default ContactSection;




//  <span><img src={icon2} alt="" /></span>
// <a href="tel:+919412121230">+91 9412121230</a>

// <span className="clr-sky"><img src={icon3} alt="" /></span>
// <a href="mailto:softtrade@gmail.com">softtrade@gmail.com</a>

// <span className="clr-orange"><img src={icon4} alt="" /></span>
//  <a
//                                                     href="https://www.google.com/maps?q=E-154,+Opposite+Jain+Temple,+Mandi+Marg,+Ambabari,+Rajasthan,+India+(302039)"
//                                                     target="_blank"
//                                                     rel="noopener noreferrer"
//                                                 >