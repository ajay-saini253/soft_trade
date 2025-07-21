import React from 'react';
import { Fade } from 'react-awesome-reveal';
import doctor1 from '../../images/pastWork/softTrade_img.png';
import doctor2 from '../../images/pastWork/softTrade_img.png';

const MissionVision = () => {
    return (
        <section className="mission-section py-5">
            <div className="container">

                {/* Mission Section */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-7 order-2 order-lg-1">
                        <Fade direction="up" triggerOnce={false}>
                            <div className="mission-content pe-lg-4">
                                <h2 className="mb-2 py-3 fw-bold">Our Mission</h2>
                                <p className="mission-text py-3">
                                    At Soft Trade, our mission is to revolutionize how businesses manage their digital operations by providing user-friendly, reliable, and scalable software solutions.
                                </p>
                                <p className="mission-text py-3">
                                    We believe in building long-term relationships with our clients, driven by trust, transparency, and results. 
                                    Every tool we develop is tailored to ease your business workflow and enhance productivity.
                                </p>
                                <p className="mission-text py-3">
                                    Our commitment lies in continuously evolving with technology to offer services that are not just solutions—but a source of growth, convenience, and competitive advantage.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0 order-1 order-lg-2">
                        <Fade direction="right" triggerOnce={false}>
                            <img src={doctor2} alt="Mission" className="img-fluid rounded shadow" />
                        </Fade>
                    </div>
                </div>

                {/* Vision Section */}
                <div className="row align-items-center flex-lg-row-reverse">
                    <div className="col-lg-7 order-2 order-lg-1">
                        <Fade direction="up" triggerOnce={false}>
                            <div className="vision-content ps-lg-4">
                                <h2 className="mb-2 py-3 fw-bold">Our Vision</h2>
                                <p className="vision-text py-3">
                                    Our vision is to be recognized as a leading provider of innovative IT solutions that empower organizations of all sizes to reach their full potential.
                                </p>
                                <p className="vision-text py-3">
                                    We aspire to create a future where technology and human potential blend seamlessly, enabling businesses to operate smarter and customers to feel more connected.
                                </p>
                                <p className="vision-text py-3">
                                    Soft Trade envisions a world where software is not just a tool, but a trusted partner in achieving excellence, efficiency, and digital transformation.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="col-lg-5 mt-4 mt-lg-0 order-1 order-lg-2">
                        <Fade direction="left" triggerOnce={false}>
                            <img src={doctor1} alt="Vision" className="img-fluid rounded shadow" />
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
