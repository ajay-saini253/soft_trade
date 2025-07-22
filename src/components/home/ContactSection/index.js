import React from "react";
import ContactForm from "../ContactFrom/ContactForm";
import Bg from "../../../images/bg/contact_section.jpg";
// import Bg2 from "from "../../../images/cont-bg02.png";
// import icon1 from '../../../images/icon/edit.svg'
import icon2 from "../../../images/icon/Simplification.png";
import icon3 from "../../../images/icon/Simplification1.png";
// import icon4 from "../../../images/icon/loc-black.png";
// import icon5 from "../../../images/icon/bill.svg";
// import cImg from '../../../../images/contact/cont-shape.png'
// import cImg2 from "../../images/shape/con-shape.png";

const ContactSection = (props) => {
  return (
    <section
      className="contact contact-bg pos-rel bg_img"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="container pt-5 pb-5">
        {/* <div className="contact-two pos-rel bg_img" style={{ backgroundImage: `url(${Bg2})` }}> */}
        <div className="contact-two pos-rel bg_img">
          <div className="row align-items-center justify-content-between">

            <div className="col-lg-6 mt-30">
              <div className="cs-contact">
                <div className="xb-item--inner">
                  <div className="sec-title--two sec-title--three mb-25">
                    {/* <span className="sub-title"><img src={icon1} alt=""/><span>You are here</span></span> */}
                    <h2 className="title fs-bold">
                      Don’t Just Sell, Sell Smarter with SoftTrade!
                    </h2>
                  </div>
                  <p className="xb-item--content text-white mb-4">
                    <span className="" style={{ color: "#F2742D" }}>
                      A 100% Guaranteed Business
                    </span>{" "}
                    Growth Solution!
                  </p>
                  <ul className="xb-item--cont_info list-unstyled">
                    <li className="d-flex mb-3">
                      <span className="me-3">
                        <img src={icon2} alt="" width={20} />
                      </span>
                      <div>
                        <div className="fw-semibold text-white">Fill up your details</div>
                        <div className="text-white small">
                          Our team will get in touch with you shortly.
                        </div>
                      </div>
                    </li>

                    <li className="d-flex mb-3">
                      <span className="me-3">
                        <img src={icon3} alt="" width={20} />
                      </span>
                      <div>
                        <div className="fw-semibold text-white">
                          Explore SoftTrade Completely
                        </div>
                        <div className="text-white small">
                          Experience the easy way of doing business.
                        </div>
                      </div>
                    </li>

                    {/* <li><span className="clr-orange"><img src={icon4} alt="" /></span>Sunshine example road</li> */}
                  </ul>
                  {/* <div className="xb-item--img">
                                        <img src={cImg} alt=""/>
                                    </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="cs-contact-wrap bg-white pt-5 pb-0 cs-contact-form">
                <div className="sec-title--two sec-title--three text-center">
                     <h2 className="">Get Started</h2>
                  {/* <span className="sub-title bg-black">
                    <img src={icon5} alt="" />
                    <h2 className="text-white">Get Started</h2>
                  </span> */}
                  <p className="title text-muted fs-5 mt-2">
                    Explore SoftTrade at Zero-Cost 
                  </p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="xb-shape">
        <img src={cImg2} alt="" />
      </div> */}
    </section>
  );
};

export default ContactSection;
