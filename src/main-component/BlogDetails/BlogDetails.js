import React, { Fragment } from 'react';
import blogs from '../../api/blogs'
import { useParams } from 'react-router-dom';
import BlogSingle from '../../components/home/BlogDetails/BlogDetails';
import Bg from '../../images/bg/page_bg01.jpg'
// import icon from '../../images/icon/cap.svg'
// import Image1 from '../../images/hero/cd-img02.png'
// import Image2 from '../../images/shape/brd_shape.png'
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
// import CtaSection from '../../components/home/CtaSection/CtaSection';


const BlogDetails = (props) => {
    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return (
        <Fragment>
              <div className='body_wrap sco_agency'>
            <Header />
            <main className="page_content blog-page">
                <section className="page-title  pt-50 pb-50 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap sd-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-8 mt-30">
                                    <div className="page-title-box">
                                        {/* <span className="sub-title"><img src={icon} alt="" /> Blog details</span> */}
                                        <h2 className="title">{BlogDetails.title}</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-30">
                                    <div className="sd-right-img pos-rel">
                                        <img src={BlogDetails.screens} alt="" />
                                        <div className="sd-arrow-shape style-2">
                                            <img className="xbzoominzoomup" src={BlogDetails.screens} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <BlogSingle />
            </main>
            {/* <CtaSection cClass={'bg'}/> */}
            <Footer />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default BlogDetails;