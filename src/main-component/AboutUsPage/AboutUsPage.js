import React, { Fragment } from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
// import CtaSection from '../../components/home/CtaSection/CtaSection';
// import icon from '../../images/icon/magic-icon.svg'
import icon1 from '../../images/icon/check-mark.png';
import Video from '../../images/video.mp4'
// import FeaturesSection from './Features';
// import WhyChoose from './WhyChoose';
import FunfactSection from './Funfact';
import Roadmap from './Roadmap';
import AwardSection from './AwardSection';
import GallerySection from '../CareerPage/Gallery';
import hImg1 from '../../images/about/AboutUs-01.png';
import Feature1 from './Features1';
import MissionVision from './MissionVission';

const AboutUsPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title pt-10 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row">
                                <div className="col-xl-7 col-lg-8 mt-30 px-5 order-2 order-lg-1">
                                    <div className="page-title-box">
                                        <Fade direction="up" triggerOnce={false} duration={1200}>
                                            <h2 className="mb-2 py-3 fw-bold">About Soft Trade</h2>
                                        </Fade>

                                        <Fade direction="up" triggerOnce={false} duration={1200} delay={100}>
                                            <h5 className="text-secondary mb-3">
                                                Empowering businesses with scalable, smart, and secure ERP solutions.
                                            </h5>
                                        </Fade>

                                        <Fade direction="up" triggerOnce={false} duration={1300} delay={200}>
                                            <p className="text-muted mb-4 text-justify">
                                                At <strong>Soft Trade</strong>, we’re redefining the way businesses operate in the digital era. As a full-spectrum ERP solutions provider, we specialize in crafting intelligent, cloud-based, and device-agnostic platforms that streamline operations, enhance productivity, and drive measurable growth.
                                            </p>
                                        </Fade>

                                        <Fade direction="up" triggerOnce={false} duration={1300} delay={300}>
                                            <p className="text-muted mb-4 text-justify">
                                                Whether you're a startup, SME, or an enterprise, our tailored solutions—spanning <strong>mobile, web, desktop, and cloud ERP</strong>—integrate seamlessly into your workflow. From inventory and billing to customer relationship management and GST compliance, we offer end-to-end control from a single web-based dashboard.
                                            </p>
                                        </Fade>

                                        <Fade direction="up" triggerOnce={false} duration={1300} delay={400}>
                                            <p className="text-muted mb-4 text-justify">
                                                What sets us apart? <strong>Real-time insights</strong>, <strong>automation-first processes</strong>, and a deep commitment to support and scalability. With Soft Trade, you’re not just upgrading your software—you’re transforming the way you do business.
                                            </p>
                                        </Fade>

                                        <Fade direction="up" triggerOnce={false} duration={1400} delay={500}>
                                            <ul className="list-unstyled mt-4">
                                                <li className="d-flex align-items-start mb-2">
                                                    <img src={icon1} alt="check" className="me-2 mt-1" />
                                                    <span><strong>Unified ERP Platform</strong> – Manage everything from inventory to invoicing in one place.</span>
                                                </li>
                                                <li className="d-flex align-items-start mb-2">
                                                    <img src={icon1} alt="check" className="me-2 mt-1" />
                                                    <span><strong>Cloud & Mobile Ready</strong> – Access your business from anywhere, on any device.</span>
                                                </li>
                                                <li className="d-flex align-items-start mb-2">
                                                    <img src={icon1} alt="check" className="me-2 mt-1" />
                                                    <span><strong>Scalable for Any Business Size</strong> – From startups to enterprises, we've got you covered.</span>
                                                </li>
                                                <li className="d-flex align-items-start">
                                                    <img src={icon1} alt="check" className="me-2 mt-1" />
                                                    <span><strong>Data-Driven Decisions</strong> – Gain real-time insights with smart reporting & dashboards.</span>
                                                </li>
                                            </ul>
                                        </Fade>

                                        <Fade direction="up" triggerOnce={false} duration={1300} delay={600}>
                                            <p className="text-muted mt-4">
                                                Partner with Soft Trade to future-proof your operations, improve decision-making, and stay ahead in a rapidly evolving market.
                                            </p>
                                        </Fade>
                                    </div>
                                </div>

                                <div className="col-xl-5 col-lg-4 mt-30 order-1 order-lg-2">
                                    <Fade direction='up' triggerOnce={false} duration={900} delay={9}>
                                        <div>
                                            <div className="cs-about_right wow fadeInRight" data-wow-duration="600ms">
                                                <div className="xb-img">
                                                    <img src={hImg1} alt="" />

                                                </div>

                                            </div>
                                        </div>
                                    </Fade>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>
                <MissionVision/>
                <div className="about-video pt-75">
                    <div className="container">
                        <div className="career_video">
                            <video
                                loop
                                muted
                                playsInline
                                autoPlay
                            >
                                <source src={Video} type="video/mp4" />
                                Your browser does not support the video.
                            </video>
                        </div>
                    </div>
                </div>
                {/* <FeaturesSection /> */}
                <Feature1/>
                <div style={{ backgroundColor: "#f6f6f8" }}>
                    {/* <WhyChoose /> */}
                    <FunfactSection />
                </div>
                <Roadmap />
                <AwardSection />
                <GallerySection pClass={'pt-50'} />
                {/* <CtaSection/> */}
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutUsPage;