
import React, { Fragment } from 'react';
import { Fade } from "react-awesome-reveal";
import Header from '../../components/home/header/Header';
import Footer from '../../components/home/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
import bImg1 from '../../images/hero/contact-img.png'
import bImg2 from '../../images/shape/brd_shape.png'
import Scrollbar from '../../components/home/scrollbar/scrollbar';
import TopBar from '../../components/home/TopBar/TopBar';
import DesktopProducts from './DesktopProducts';

const DesktopSoftware = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                 <TopBar/>
                <Header />
                 <section className="page-title  pt-70 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-7">
                                    <div className="page-title-box text-center">
                                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                            <h5 className="title pb-20 wow fadeInUp" data-wow-duration="600ms">Desktop Software</h5>
                                        </Fade>
                                        <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                                            <span className="sub-title wow fadeInUp" data-wow-duration="600ms">We would love to assist you in every way.</span>
                                        </Fade>
                                        <div>
                                            <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                                <span class="wow fadeInUp" data-wow-duration="600ms">
                                                    Let's resolve business inquiries together. We are always here to listen to you for
                                                    our software solutions, features, pricing, demos, or other business discussions.
                                                </span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-30">
                                    <div className="sd-right-img pos-rel">
                                        <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                            <img className="wow fadeInRight rounded-5" data-wow-duration="600ms" src={bImg1} alt="" />
                                        </Fade>

                                        {/* <img src={bImg1} alt="" class="rounded-5" /> */}
                                        <div className="sd-arrow-shape style-3">
                                            <Fade direction='right' triggerOnce={'false'} duration={1500} delay={9}>
                                                <img className=" wow fadeInRight rounded-5 xbzoominzoomup" data-wow-duration="600ms" src={bImg2} alt="" />
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                 <DesktopProducts/>   
                    
              
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default DesktopSoftware;