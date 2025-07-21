import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Fade } from "react-awesome-reveal";

// import hicon from '../../images/icon/medal-star-black.svg'
import sIcon1 from '../../images/award/hd-img01.png'
import sIcon2 from '../../images/award/hd-img02.png'
import sIcon3 from '../../images/award/hd-img03.png'
import sIcon4 from '../../images/award/hd-img04.png'
import sIcon5 from '../../images/award/hd-img05.png'
import sIcon6 from '../../images/award/hd-img06.png'

const Industrie = [
    {
        icon: sIcon1,
    },
    {
        icon: sIcon2,
    },
    {
        icon: sIcon3,
    },
    {
        icon: sIcon4,
    },
    {
        icon: sIcon5,
    },
    {
        icon: sIcon6,
    },
    {
        icon: sIcon1,
    },
    {
        icon: sIcon2,
    },
    {
        icon: sIcon3,
    },
    {
        icon: sIcon4,
    },
    {
        icon: sIcon5,
    },
    {
        icon: sIcon6,
    },
    {
        icon: sIcon1,
    },
    {
        icon: sIcon2,
    },
    {
        icon: sIcon3,
    },
    {
        icon: sIcon4,
    },
    {
        icon: sIcon5,
    },
    {
        icon: sIcon6,
    }


]

const Awards3 = (props) => {

    return (
        <section className="award pt-50 pb-80" style={{background:"#e2eeff"}}>
             <div className="award-top  align-items-end mb-10">
                             <div className="sec-title--two sec-title--three mb-30">                     
                            <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                                <div>
                                    <h2 className="title wow skewIn text-black py-4 text-center" data-wow-delay="000ms" data-wow-duration="600ms">Soft Trade Software Awarded By</h2>
                                </div>
                            </Fade>
                        </div>
                            </div>
            <div className="hd-award-slider">
                <Swiper
                    className="hd-award-slider"
                    loop={true}
                    spaceBetween={40}
                    speed={400}
                    slidesPerView={9}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    breakpoints={{
                        1600: {
                            slidesPerView: 8,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        576: {
                            slidesPerView: 4,
                        },
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            centeredSlides: false,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                >
                    {Industrie.map((insdustry, i) => (
                        <SwiperSlide key={i}>
                            <div className="hd-award-item" key={i}>
                                <div className="xb-img">
                                    <img src={insdustry.icon} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default Awards3;