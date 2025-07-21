import React from 'react'
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
// import Bg from '../../../images/bg/cta_bg.jpg'
import cta1 from '../../../images/pastWork/soft-trade-iamge.png'
 import cta2 from '../../../images/pastWork/weberp_bg.webp'
import logo from '../../../images/pastWork/png logo.png';

const WebBaseERP = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className="cta  pos-rel z-1 pt-60 pb-60 o-hidden" style={{
    backgroundImage: `url(${cta2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }} >
            <div className="container">
                <div class="row justify-content-center align-items-center">
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className=" cta-sec-title text-center ">
                     <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                        <div><img src={logo} alt="logo_image" width={250}/></div>
                     </Fade>
                    <Fade direction='up' triggerOnce={'false'} duration={1200} delay={9}>
                        <div className='my-3' >
                            <h2 className="title wow fadeInUp webbaseerp_heading " data-wow-duration="600ms">Web-Based ERP <span class="yllow_txt">System</span></h2>
                        </div>
                    </Fade>
                </div>
                    </div>
                    <div className='col-lg-10 col-md-12 col-sm-12 my-2 '>
                        <p className='text-center text-justify text-secondary'>
                            Soft Trade is a Cloud Based ERP that runs by a single web link. It is an ideal choice for small, mid-size, and large-scale businesses.. It takes care of your business billing, from stock tracking to accounting, & keeping your business GST compliant and does more for you.
                        </p>
                    </div>
                
                
            
            <div className=" mt-5 pos-rel col-lg-12 col-md-12 col-sm-12">
                <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
                    <div>
                        <div className="xb-img wow fadeInUp " data-wow-delay="200ms" data-wow-duration="600ms">
                            <img src={cta1} alt="" className='webBase_image' />
                        </div>
                    </div>
                </Fade>
                </div>
                <div className=" mt-5 pos-rel col-lg-3 col-md-6 col-sm-12 ">
                <div className="xb-btn ">
                    <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops ">Know More </Link>
                </div>
            </div>
            </div>
            </div>
        </section>
    )
}

export default WebBaseERP;