import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
// import sIcon1 from '../../images/icon/ser-01.svg';

import brand1 from '../../images/award/ap-brand01.jpg';
import brand2 from '../../images/award/ap-brand02.jpg';
import brand3 from '../../images/award/ap-brand03.jpg';
import brand4 from '../../images/award/ap-brand04.jpg';
import brand5 from '../../images/award/ap-brand05.jpg';
import brand6 from '../../images/award/ap-brand06.jpg';
import brand7 from '../../images/award/ap-brand07.jpg';
import brand8 from '../../images/award/ap-brand08.jpg';
import brand9 from '../../images/award/ap-brand09.jpg';
import brand10 from '../../images/award/ap-brand10.jpg';

const AwardSection = () => {

    const handleScroll = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section className="award pt-50 pb-50" style={{ backgroundColor: "#f6f6f8" }}>
            <div className="container">
                <div className="row align-items-center">
                    {/* Text Content */}
                    <div className="col-xl-6 col-lg-5">
                        <div className="service-info ab-award-content ">
                            <div className="sec-title--two">
                                <Fade direction="up" triggerOnce duration={1200} delay={100}>
                                    <h2 className="title">We've Earned Prestigious Awards for Our Work</h2>
                                </Fade>
                                <Fade direction="up" triggerOnce duration={1200} delay={200}>
                                    <p className="content">
                                        Receiving prestigious awards is a testament to our unwavering dedication to excellence. These accolades reflect our team's tireless efforts, commitment, and passion to deliver impactful results.
                                    </p>
                                </Fade>
                            </div>
                            <Fade direction="up" triggerOnce duration={1200} delay={300}>
                                <div className="xb-btn mt-50">
                                    <Link to="/contact" onClick={handleScroll} className="thm-btn thm-btn--aso thm-btn--aso_yellow">
                                        Book a Free Consultation
                                    </Link>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    {/* Awards Image Slider Section */}
                    <div className="col-xl-6 col-lg-7 mt-30">
                        <div className="ap-award-wrap ul_li">
                            <div className="ap-award-inner marquee-first">
                                {[brand1, brand2, brand3, brand1, brand2, brand3].map((brand, index) => (
                                    <div className="ap-award-item" key={`marquee1-${index}`}>
                                        <div className="xb-img"><img src={brand} alt={`Award ${index + 1}`} /></div>
                                    </div>
                                ))}
                            </div>

                            <div className="ap-award-inner marquee-2">
                                {[brand4, brand5, brand6, brand7, brand4, brand5].map((brand, index) => (
                                    <div className="ap-award-item" key={`marquee2-${index}`}>
                                        <div className="xb-img"><img src={brand} alt={`Award ${index + 1}`} /></div>
                                    </div>
                                ))}
                            </div>

                            <div className="ap-award-inner marquee-first">
                                {[brand8, brand9, brand10, brand8, brand9, brand10].map((brand, index) => (
                                    <div className="ap-award-item" key={`marquee3-${index}`}>
                                        <div className="xb-img"><img src={brand} alt={`Award ${index + 1}`} /></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardSection;
