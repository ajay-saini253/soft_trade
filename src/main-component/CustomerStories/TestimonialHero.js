import React from 'react';
import { Fade } from "react-awesome-reveal";
import icon1 from '../../images/icon/check-mark.png';
import hImg1 from '../../images/about/customer-success-stories.png';
import Bg from '../../images/bg/page_bg01.jpg';

const TestimonialHero = () => {
    return (
        <section
            className="hero hero-style-four pos-rel pt-10"
            style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container">
                <div className="hero_wrap">
                    <div className="row align-items-center">
                        {/* Left Text Content */}
                        <div className="col-xl-7 col-lg-6 py-3 py-lg-5 order-2 order-lg-1">
                            <div className="xb-hero">
                                <Fade direction='up' triggerOnce={false} duration={1000}>
                                    <h1 className="fw-bold mb-3">Customer Success Story</h1>
                                </Fade>

                                <Fade direction='up' triggerOnce={false} duration={1200}>
                                    <p className="text-muted fs-6 text-justify">
                                        One of our esteemed clients, a rapidly growing manufacturing business, faced major challenges managing distributed teams, real-time stock visibility, and seamless order processing across multiple locations.
                                    </p>
                                </Fade>

                                <Fade direction='up' triggerOnce={false} duration={1400}>
                                    <p className="text-muted fs-6 text-justify">
                                        By implementing <strong>Soft Trade Cloud-based ERP</strong> and <strong>Mobile ERP solutions</strong>, they achieved centralized control, real-time data synchronization, and full mobile accessibility — empowering their staff to manage operations on-the-go and make faster decisions.
                                    </p>
                                </Fade>

                                <Fade direction='up' triggerOnce={false} duration={1600}>
                                    <ul className="py-3 list-unstyled">
                                        <li className='py-1 d-flex align-items-start'>
                                            <img src={icon1} alt="check" className="me-2 mt-1" />
                                            <strong>Reduced order processing time</strong> by 40% with real-time mobile updates.
                                        </li>
                                        <li className='py-1 d-flex align-items-start'>
                                            <img src={icon1} alt="check" className="me-2 mt-1" />
                                            <strong>Improved inventory accuracy</strong> with cloud-based tracking & mobile barcode scanning.
                                        </li>
                                        <li className='py-1 d-flex align-items-start'>
                                            <img src={icon1} alt="check" className="me-2 mt-1" />
                                            <strong>24/7 access</strong> to critical business reports from any device or location.
                                        </li>
                                        <li className='py-1 d-flex align-items-start'>
                                            <img src={icon1} alt="check" className="me-2 mt-1" />
                                            <strong>Zero downtime</strong> and <strong>secure cloud backups</strong> ensured business continuity.
                                        </li>
                                    </ul>
                                </Fade>

                                {/* Optional Testimonial Quote */}
                                <Fade direction='up' triggerOnce={false} duration={1800}>
                                    <blockquote className="bg-white p-4 rounded shadow mt-3">
                                        <p className="mb-0 fst-italic text-muted">
                                            “With Soft Trade's ERP, we’ve eliminated manual tracking and gained full control across locations. The mobile access is a game changer for our field team.”
                                        </p>
                                        <footer className="pt-2 text-end text-muted">— Operations Head, CA Technologies</footer>
                                    </blockquote>
                                </Fade>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="col-xl-5 col-lg-6 py-3 py-lg-5  order-1 order-lg-2">
                            <div className="hero-right_img pos-rel">
                                <Fade direction='up' triggerOnce={false} duration={1500}>
                                    <img
                                        className="img-fluid wow fadeInLeft rounded"
                                        src={hImg1}
                                        alt="Customer Success Visual"
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialHero;
