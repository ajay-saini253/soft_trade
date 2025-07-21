import React, { Fragment } from 'react';
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
// import CtaSection from '../../components/home/CtaSection/CtaSection';
// import icon from '../../images/icon/magic.svg'
// import gImg1 from '../../images/gallery/cp-img01.jpg'
// import gImg2 from '../../images/gallery/cp-img02.jpg'
// import gImg3 from '../../images/gallery/cp-img03.jpg'
// import gImg4 from '../../images/gallery/cp-img04.jpg'
// import gImg5 from '../../images/gallery/cp-img05.jpg'
// import gImg6 from '../../images/gallery/cp-img06.jpg'
import Video from '../../images/video.mp4'
import Process from './Process';
import CareerTeam from './CareerTeam';
import WorkSection from '../TeamPage/work';
// import GallerySection from './Gallery';

import { Fade } from "react-awesome-reveal";
import bImg1 from '../../images/hero/contact-img.png';
import bImg2 from '../../images/shape/brd_shape.png';


const CareerPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <section className="page-title  pt-70 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-7 order-2 order-lg-1">
                                    <div className="page-title-box text-center">
                                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                            <h5 className="title py-3 pb-lg-3 wow fadeInUp " data-wow-duration="600ms">Find the career of your choice</h5>
                                        </Fade>
                                       
                                        <div>
                                            <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                                <span class="wow fadeInUp text-justify" data-wow-duration="600ms">
                                                   We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.
                                                </span>
                                            </Fade>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 mt-30 order-1 order-lg-2">
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
                {/* <section className="page-title cp-page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-7 mt-30">
                                    <div className="page-title-box">
                                        <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                                            <h5 className="title pb-20 wow fadeInUp " data-wow-duration="600ms">Find the career of your choice</h5>
                                        </Fade>
                                       
                                        <div>
                                            <Fade direction='up' triggerOnce={'false'} duration={1400} delay={9}>
                                                <span class="wow fadeInUp" data-wow-duration="600ms">
                                                   We know that finding a meaningful and rewarding job can be a long journey. Our goal is to make that process as easy as possible for you, and to create a work environment that's satisfying - one where you'll look forward to coming to every day. Start your journey with us by browsing available jobs.
                                                </span>
                                            </Fade>
                                        </div>
                                        </div>
                                </div>
                                <div className="col-lg-5 mt-30">
                                    <div className="cp-img-slide">
                                        <div className="cp-img-inner ul_li">
                                            <div className="cp-item marquee-first">
                                                <div className="xb-img"><img src={gImg1} alt="" /></div>
                                                <div className="xb-img"><img src={gImg2} alt="" /></div>
                                                <div className="xb-img"><img src={gImg3} alt="" /></div>
                                                <div className="xb-img"><img src={gImg1} alt="" /></div>
                                                <div className="xb-img"><img src={gImg2} alt="" /></div>
                                                <div className="xb-img"><img src={gImg3} alt="" /></div>
                                            </div>
                                            <div className="cp-item marquee-2">
                                                <div className="xb-img"><img src={gImg4} alt="" /></div>
                                                <div className="xb-img"><img src={gImg5} alt="" /></div>
                                                <div className="xb-img"><img src={gImg6} alt="" /></div>
                                                <div className="xb-img"><img src={gImg4} alt="" /></div>
                                                <div className="xb-img"><img src={gImg5} alt="" /></div>
                                                <div className="xb-img"><img src={gImg6} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <Process />
                <CareerTeam />
                <WorkSection bg={'sbg pt-50'} />
                <div className="cp-video process-bg  pt-80 pb-80">
                    <div className="container">
                        <div className="xb-img pos-rel d-block">
                            <div className="career_video ">
                                <video
                                    className="responsive-video"
                                    loop
                                    muted
                                    playsInline
                                    autoPlay
                                >
                                    <source src={Video} type="video/mp4" />
                                    Your browser does not support the video.
                                </video>
                            </div>
                            {/* <h2 className="title">Soft Trade</h2> */}
                        </div>
                    </div>
                </div>
                {/* <GallerySection /> */}
                {/* <CtaSection /> */}
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default CareerPage;
