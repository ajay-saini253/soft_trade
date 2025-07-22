import React from 'react';
import { Fade } from "react-awesome-reveal";
import icon1 from '../../../images/icon/check-mark.png';
import hImg1 from '../../../images/pastWork/softTrade_img.png';
import logo from '../../../images/pastWork/png logo.png';
// import { Link } from 'react-router-dom';

// const ClickHandler = () => {
//     window.scrollTo(10, 0);
// };

const CustomERP = () => {
    return (
        <section className="hero hero-style-four pos-rel pt-70 pb-50" style={{ background: 'rgba(47, 94, 188, 0.05)' }}>
            <div className="container">
                <div className="hero_wrap">
                    <div className="row align-items-center mt-none-30">
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="cta-sec-title">
                                <Fade direction='up' triggerOnce={false} duration={1000} delay={9}>
                                    <div className="customERP_logo"><img src={logo} alt="logo_image" width={250} /></div>
                                </Fade>

                                <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                                    <div className='my-3'>
                                        <h2 className="title wow fadeInUp webbaseerp_heading fs-1 text-start" data-wow-duration="600ms">
                                            One-Stop Platform for Customer <span className="yllow_txt">Support</span>
                                        </h2>
                                    </div>
                                </Fade>

                                <Fade direction='up' triggerOnce={false} duration={1400} delay={9}>
                                    <div className='my-2'>
                                        <p className='text-justify text-secondary'>
                                            Soft Trade is a Cloud, Web, Desktop, and Mobile-based ERP solution accessible through a single web link. It is an ideal choice for small to large businesses—managing everything from billing and stock tracking to accounting and GST compliance—while also offering powerful tools for customer support.
                                            </p>
                                    </div>
                                </Fade>
                            <Fade direction='up' triggerOnce={false} duration={1800} delay={9}>
                                <ul className="list-unstyled mt-3">
                                    <li className="d-flex align-items-start mb-2">
                                        <img src={icon1} alt="check" className="me-2 mt-1" />
                                        24x7 Ticket-Based Support System
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <img src={icon1} alt="check" className="me-2 mt-1" />
                                        Real-Time Chat Assistance for Quick Queries
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <img src={icon1} alt="check" className="me-2 mt-1" />
                                        In-App Notifications & Alerts for Faster Resolutions
                                    </li>
                                    <li className="d-flex align-items-start mb-2">
                                        <img src={icon1} alt="check" className="me-2 mt-1" />
                                        Automatic Case Escalation and Tracking
                                    </li>
                                    <li className="d-flex align-items-start">
                                        <img src={icon1} alt="check" className="me-2 mt-1" />
                                        Dedicated Support Dashboard with Analytics
                                    </li>
                                </ul>
                                </Fade> 
                            </div>
                        </div>

                                               <div className=" col-lg-6 mt-30">
                            <div className="hero-right_img pos-rel">
                                <div className="hero-right-image">
                                       <Fade direction='up' triggerOnce={false} duration={200} delay={9}>
                                    <div>
                                         <img src={hImg1} alt="ERP dashboard preview" />
                                    </div>
                                    </Fade>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomERP;


