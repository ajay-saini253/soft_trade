import React, { Fragment } from 'react';
import Bg from '../../images/bg/page_bg01.jpg'
// import icon from '../../images/icon/cap.svg'
// import Image1 from '../../images/hero/cd-img02.png'
// import Image2 from '../../images/shape/brd_shape.png'
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
// import CtaSection from '../../components/home/CtaSection/CtaSection';
import BlogList from '../../components/home/BlogList';
import { Fade } from "react-awesome-reveal";
import bImg1 from '../../images/hero/contact-img.png';



const BlogPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                <main className="page_content blog-page">
                    <section className="page-title pt-50  pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                        <div className="container">
                            <div className="page-title-wrap sd-title-wrap">
                                <div className="row mt-none-30 align-items-center">
                                    <div className="col-lg-7 order-2 order-lg-1 py-lg-3 py-3">
                                        <div className="page-title-box text-center">
                                            <Fade direction='up' triggerOnce={false} duration={1000} delay={9}>
                                                <h5 className="title pb-20 wow fadeInUp" data-wow-duration="600ms">
                                                    Insights. Innovation. Impact.
                                                </h5>
                                            </Fade>

                                            <div>
                                                <Fade direction='up' triggerOnce={false} duration={1400} delay={9}>
                                                    <span className="wow fadeInUp text-justify" data-wow-duration="600ms">
                                                        Welcome to the Soft Trade Blog — your source for ERP insights, digital transformation strategies, and the latest in business technology. Explore expert tips, client stories, product updates, and industry trends that help you stay ahead in the world of enterprise solutions.
                                                    </span>
                                                </Fade>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5  py-lg-3 py-3 order-1 order-lg-2">
                                        <div className="sd-right-img pos-rel">
                                            <Fade direction='right' triggerOnce={'false'} duration={1200} delay={9}>
                                                <img className="wow fadeInRight rounded-5" data-wow-duration="600ms" src={bImg1} alt="Soft Trade Blog Hero" />
                                            </Fade>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <BlogList />

                </main>
                {/* <CtaSection /> */}
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogPage;
