import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup"; // Ensure CountUp is installed
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Bg from '../../images/bg/page_bg01.jpg'
import slide1 from "../../images/hero/business-than.png";
import slide2 from "../../images/hero/business-now.png";

const HeroDownload = () => {
  const swiperRef = useRef(null);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="hero-download-section pt-50 pb-50" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="hero-download-section-wrapper d-flex justify-content-center align-items-center">
        <div className="container row align-items-center text-black">
          <div className="col-lg-7">
            <div
              className="hero-download-section-slider position-relative  desktop_device_weberp"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 2000 }}
                navigation={{
                    
                  nextEl: ".hero-download-section-button-next",
                  prevEl: ".hero-download-section-button-prev",
                }}
                // pagination={{ clickable: true }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  768: { slidesPerView: 1 },
                  1024: { slidesPerView: 1 },
                }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
              >
                <SwiperSlide>
                  <img
                    src={slide1}
                    alt="Slide 1"
                    className="hero-download-section-image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={slide2}
                    alt="Slide 2"
                    className="hero-download-section-image"
                  />
                </SwiperSlide>
              </Swiper>

              <div className="hero-download-section-button-prev">
                <i className="fa fa-chevron-left"></i>
              </div>
              <div className="hero-download-section-button-next">
                <i className="fa fa-chevron-right"></i>
              </div>
            </div>
          </div>

          <Fade direction="up" triggerOnce className="col-lg-5 mt-md-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="hero-download-section-counts mb-4">
                  <p className="mb-2 text-black">
                    <strong>Clients</strong><br />
                    <span className="text-info fs-4">
                      <CountUp end={150} duration={3} /> +
                    </span>
                  </p>
                  <p className="mb-2 text-black">
                    <strong>Projects</strong><br />
                    <span className="text-info fs-4">
                      <CountUp end={425} duration={3} /> +
                    </span>
                  </p>
                  <p className="mb-4 text-black">
                    <strong>Countries</strong><br />
                    <span className="text-info fs-4">
                      <CountUp end={12} duration={3} /> +
                    </span>
                  </p>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="hero-download-section-text mb-4">
                  <h3 className="text-black fw-bold mb-2">
                    FREE <span className="text-info">TRIAL</span>
                  </h3>
                  <p className="mb-3 text-black">
                    We are experts in security audits. We<br />
                    have more than twenty years of<br />
                    experience. We encourage you to contact<br />
                    us and start a free trial.
                  </p>
                  <Link
                    to="#"
                    onClick={ClickHandler}
                    className="btn text-white bg-black fw-semibold px-4 py-2 mt-2"
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HeroDownload;
