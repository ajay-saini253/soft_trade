import React from "react";
import { Fade } from "react-awesome-reveal";
// import icon1 from "../../images/icon/check-mark.png";
// import icon2 from "../../../images/icon/arrow-black.png";
// import icon3 from '../../../images/hero/mobile-sms.png';
import hImg1 from "../../../images/hero/ONDC.png";
// import hImg2 from '../../../images/hero/hero-img05.png';

import { Link } from "react-router-dom";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const InvestmentSection = () => {
  return (
   <section
  className=" InvestmentSection hero hero-style-four pos-rel pt-10 pb-25"
  style={{ background: "#f9f9f9" }}  
>
      <div className="container pt-5 pb-5">
        <div className="">
          <h2 className="text-center  py-2 my-2">
            Start your online business with the least investment <br />
            and reach the largest possible consumer base
          </h2>
          {/* <p className="text-center  my-4 py-2">
            Join ONDC network, India's revolutionary ecommerce initiative
          </p> */}
        </div>
        <div className="hero_wrap  ">
          <div className="row align-items-center  mt-30">
            <div className="col-xl-7 col-lg-7 mt-30">
              <div className="hero-right_img pos-rel">
                <div className="hero-right-image ">
                  <div>
                    <img
                      className="wow fadeInLeft rounded-4"
                      data-duration=".7s"
                      src={hImg1}
                      alt=""
                    
                    />
                  </div>
                </div>
                {/* <div className="xb-img">
                                    <div>
                                        <div className="img img--one wow fadeInRight" data-duration=".7s" data-delay="1s"><img className="updown-3" src={hImg2} alt="" /></div>
                                    </div>
                                    <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                        <div>
                                            <div className="img img--two wow fadeInUp" data-duration=".7s" data-delay="2s"><img src={icon3} alt="" /></div>
                                        </div>
                                    </Fade>
                                </div> */}
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 d-flex justify-content-center pt-40	">
              <div className="xb-hero ">
                <Fade
                  direction="up"
                  triggerOnce={"false"}
                  duration={1000}
                  delay={9}
                >
                  <div className=" px-5 mb-20 ">
                    <h1 className="xb-item--title wow fadeInUp pb-20" data-wow-duration="600ms">Join the Soft Trade Network and Expand Your Business Online</h1>
                    <p
                      className=" lh-base pb-20"
                      style={{ textAlign: "justify" }}
                    >  
                    With Soft Trade ERP, your product catalog gets directly integrated into the ONDC network, allowing it to appear on top buyer apps like Paytm, PhonePe, and WhatsApp. Customers can easily browse, order, and pay — all within their favorite apps.
                    </p>
                     <p
                      className=" lh-base"
                      style={{ textAlign: "justify" }}
                    >
                   You stay in full control of your pricing, offers, delivery methods, and business policies, while reaching a broader audience without dependency on a single platform.
                    </p>
                  </div>
                </Fade>
                {/* <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                    <div>
                                        <p className="xb-item--content wow fadeInUp" data-wow-delay="150ms" data-wow-duration="600ms">90K+ Businesses with AI-powered Soft Trade for Fast Support</p>
                                    </div>
                                </Fade>
                                <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                    <div>
                                        <ul className="xb-item--item list-unstyled wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                                            <li><span><img src={icon1} alt="" /></span> Human-like conversations via voice, chat & email</li>
                                            <li><span><img src={icon1} alt="" /></span> Speed and accuracy through in-house LLMs</li>
                                        </ul>
                                    </div>
                                </Fade> */}
                <Fade
                  direction="up"
                  triggerOnce={false}
                  duration={1400}
                  delay={9}
                >






                  <div className="d-flex ps-lg-3 justify-content-evenly gradient-buttons-wrapper">
                    <div
                      className="xb-btn wow fadeInUp"
                      data-wow-delay="450ms"
                      data-wow-duration="600ms"
                    >
                       <div className="  pos-rel ">
                <div className="xb-btn ">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops "> Join Us </Link>
                </div>
            </div>
                    </div>
                    <div
                      className="xb-btn wow fadeInUp"
                      data-wow-delay="450ms"
                      data-wow-duration="600ms"
                    >
                     <div className="  pos-rel ">
                <div className="xb-btn ">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops ">Learn More</Link>
                </div>
            </div>
                        {/* <span>
          <img className="img--one" src={icon2} alt="" />
          <img className="img--two" src={icon2} alt="" />
        </span> */}
                   
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;
