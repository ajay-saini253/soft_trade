import React from 'react'
import blogs from '../../../api/blogs'
import { Link } from 'react-router-dom'
// import Bg from '../../../images/bg/da-blog_bg.png'
 import cta2 from '../../../images/pastWork/weberp_bg.webp'
import { Fade } from "react-awesome-reveal";

const DataSolutioBlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="blog pos-rel pt-50 pb-50 bg_img" style={{
    backgroundImage: `url(${cta2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', }}>
            <div className="container">
                <div className="da-blog-wrapper">
                    <div className="da-sec-titlte text-center mb-60">
                         <Fade direction='up' triggerOnce={false} duration={1000} delay={9}>
                        <h2 className="title">Latest Insights & Blogs</h2>
                        </Fade>
                         <Fade direction='up' triggerOnce={false} duration={1000} delay={9}>
                        <p className="text-muted fs-6">Explore expert opinions, case studies, and updates on ERP trends and technology.</p>
                        </Fade>
                    </div>
                    <div className="row mt-none-40">
                        {blogs.slice(0, 6).map((blog, Bitem) => (
                            <div className="col-lg-4 col-md-6 mt-40" key={Bitem}>
                            <div className="da-blog-item">
                                <div className="xb-item--img">
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}><img src={blog.screens} alt=""/></Link>
                                </div>
                                <div className="xb-item--holder">
                                    <span className="xb-item--date">Published on {blog.create_at}</span>
                                    <h2 className="xb-item--title border-effect">
                                        <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link>
                                    </h2>
                                     <p className="pb-3">
                                      {blog.description}
                                    </p>
                                    <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="xb-item--arrow">
                                        <span><i className="fal fa-arrow-right"></i></span>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="xb-btn text-center mt-70">
                        <Link onClick={ClickHandler} to="/blog" className="thm-btn thm-btn--fill_icon thm-btn--data thm-btn--data-strock_white">
                            <div className="xb-item--hidden"><span className="xb-item--hidden-text">View More Insights</span></div>
                            <div className="xb-item--holder">
                                <span className="xb-item--text xb-item--text1">View More Insights</span>
                                <div className="xb-item--icon"><i className="fal fa-plus"></i></div>
                                <span className="xb-item--text xb-item--text2">View More Insights</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DataSolutioBlogSection;