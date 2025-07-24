import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom'
// import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Fade } from "react-awesome-reveal";

import slide1 from "../../../images/hero/business-than.png";
import slide2 from "../../../images/hero/business-now.png";
// import slide3 from "../../../images/hero/banner_3.png";
// import slide4 from "../../../images/hero/slider_4.jpg";



const Hero = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
  return (
    <>
    <section className="hero1-split hero1 py-5 bg-light text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="da-sec-titlte text-center mb-4">
              <Fade direction="up" triggerOnce={false} duration={1000}>
                <h2 className="hero1_Heading">
                 All-in-one business solution for manufacturers, wholesalers, traders, and retailers.
                </h2>
              <h3 className="hero1_Heading1">Simple to start. Effortless to run</h3>
                  {/* Easy to start and run */}
               <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops "> 
               {/* <img src={icon3} alt="Start Now Icon" className=" me-3" width={20} /> */}
               {/* <svg className="me-3" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.4998 5.50067L18.3282 8.3291M13 21H21M3 21.0004L3.04745 20.6683C3.21536 19.4929 3.29932 18.9052 3.49029 18.3565C3.65975 17.8697 3.89124 17.4067 4.17906 16.979C4.50341 16.497 4.92319 16.0772 5.76274 15.2377L17.4107 3.58969C18.1918 2.80865 19.4581 2.80864 20.2392 3.58969C21.0202 4.37074 21.0202 5.63707 20.2392 6.41812L8.37744 18.2798C7.61579 19.0415 7.23497 19.4223 6.8012 19.7252C6.41618 19.994 6.00093 20.2167 5.56398 20.3887C5.07171 20.5824 4.54375 20.6889 3.48793 20.902L3 21.0004Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> */}
               Start now - It's free </Link>
                {/* <button className="text-white my-3 wow" type="button" id="hero1_button">
                  <span className="hero1_button_text">
                    <img src={icon3} alt="Start Now Icon" width={20} />
                  <span  className="ms-3">Start now - It's free</span>
                 </span>
                </button> */}
              </Fade>
            </div>
          </div>
        </div>
      
      <div className="hero1-slider-container">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
        >
          <SwiperSlide><img src={slide1} alt="Slide 1" className="hero1-slider-image" /></SwiperSlide>
          <SwiperSlide><img src={slide2} alt="Slide 2" className="hero1-slider-image" /></SwiperSlide>
          {/* <SwiperSlide><img src={slide3} alt="Slide 3" className="hero1-slider-image" /></SwiperSlide> */}
          {/* <SwiperSlide><img src={slide4} alt="Slide 3" className="hero1-slider-image" /></SwiperSlide> */}

        </Swiper>
      </div>
      </div>
    </section>
    </>
  );
};

export default Hero;
