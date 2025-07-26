import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import cta1 from '../../../images/pastWork/webbaseerp.png';
import cta2 from '../../../images/pastWork/key-benefits.webp';
import cta3 from '../../../images/pastWork/key-benefits-mobile.webp';

// import bg from '../../../images/pastWork/weberp_bg.webp';
import logo from '../../../images/pastWork/png logo.png';
import icon1 from '../../../images/icon/check-mark.png';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WebBaseERP = () => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

 const swiperRef = useRef(null);
  
   return (
    
    <section
      className="cta pos-rel z-1 pt-60 pb-60 o-hidden"
    //   style={{
    //     backgroundImage: `url(${bg})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //   }}
    >
      <div className="container">
        <div className="row justify-content-center align-items-center text-center">
          <div className="col-lg-12">
            <div className="cta-sec-title text-center">
              <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
                <div>
                  <img src={logo} alt="logo_image" width={250} />
                </div>
              </Fade>
              <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
                <div className="my-3">
                  <h2 className="title webbaseerp_heading">
                      SoftTrade ERP – <span className="yllow_txt">Web Based ERP system </span>for Every Business Size
                  </h2>
                </div>
              </Fade>
            </div>
          </div>
           <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
          <div className="col-lg-12 my-2">
            <p className="text-center text-secondary">
            SoftTrade ERP is a powerful, cloud-based ERP solution accessible through a single web link—no installations, no hassle. Designed to support small, mid-size, and large-scale businesses.From billing and inventory management to accounting and GST compliance, SwilERP takes care of it all—so you can focus on growing your business.
             </p>
          </div>
            </Fade>
        

  <div
  className="webbaseerp position-relative mt-20 desktop_device_weberp"
  onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
  onMouseLeave={() => swiperRef.current?.autoplay?.start()}
>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              loop={true}
               autoplay={{ delay: 2000 }}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
              }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <img src={cta1} alt="Slide 1" className="webbaseerp-slider-image" />
              </SwiperSlide>

              <SwiperSlide>
                <div className="row desktop-benifits justify-content-center">
                  <div className="col-lg-3">
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt">Improved efficiency</h5>
                      <ul>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Streamline processes</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Eliminate Redundancy</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Speedify Operations</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt">Real-time Visibility</h5>
                      <ul>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Better process tracking</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Real-time data</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> More Control</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt">Reduced Costs</h5>
                      <ul>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Reduced labor costs</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Quicker turnaround times</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Lower manufacturing costs</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start">
                      <h5 className=" text-capitalize py-2 yllow_txt">Enhanced Quality Control</h5>
                      <ul>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Product Quality metrics</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Timely issue identifying</li>
                       <li className="text-black"><img src={icon1} alt="check" className="me-2" /> Proactive corrective measures</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <img src={cta2} alt="Slide 2" className="webbaseerp-slider-image" />
                  </div>

                  <div className="col-lg-3">
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt">Better Compliance</h5>
                      <ul>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Automated compliance</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Regulatory adherence</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Better compliance monitoring</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt">Lean Manufacturing</h5>
                      <ul>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Waste reduction</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Lower manufacturing costs</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Improved bottom line</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start mb-4">
                      <h5 className=" text-capitalize py-2 yllow_txt">Revenue Growth</h5>
                      <ul>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Improved planning</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Increased sales</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Higher profit margins</li>
                      </ul>
                    </div>
                    <div className="erp-benefits-cards text-start">
                      <h5 className=" text-capitalize py-2 yllow_txt">Improved Supply Chain</h5>
                      <ul>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Superior supply-chains</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Efficient demand forecasting</li>
                       <li className="text-black"> <img src={icon1} alt="check" className="me-2" /> Effective supplier management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
             <div className="custom-swiper-button-prev"><i className="fa fa-chevron-left"></i></div>
            <div className="custom-swiper-button-next"><i className="fa fa-chevron-right"></i></div>

          </div>
          
        
{/* mobile web erp */}
<div className="webbaseerp position-relative mt-5 mobile_device_webbase_erp">

  <div className="swiper-wrapper-container position-relative">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation={{
        nextEl: ".custom-swiper-button-next1",
        prevEl: ".custom-swiper-button-prev1",
      }}
    //   pagination={{ clickable: true }}
  breakpoints={{
    0: { slidesPerView: 1 },        
    600: { slidesPerView: 2 },      
    768: { slidesPerView: 3 },    
  }}
      className="mb-4"
    >
    <SwiperSlide>
    <div className="erp-benefits-cards text-start p-3 shadow rounded  erp-benefits-cards-mobile">
      <h5 className="text-capitalize py-2 yllow_txt">Improved Efficiency</h5>
      <ul>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Streamline processes
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Eliminate Redundancy
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Speedify Operations
        </li>
      </ul>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
      <h5 className="text-capitalize py-2 yllow_txt">Real-time Visibility</h5>
      <ul>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Better process tracking
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Real-time data
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> More Control
        </li>
      </ul>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
      <h5 className="text-capitalize py-2 yllow_txt">Reduced Costs</h5>
      <ul>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Reduced labor costs
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Quicker turnaround times
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Lower manufacturing costs
        </li>
      </ul>
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
      <h5 className="text-capitalize py-2 yllow_txt">Enhanced Quality Control</h5>
      <ul>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Product Quality metrics
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Timely issue identifying
        </li>
        <li className="text-black">
          <img src={icon1} alt="check" className="me-2" /> Proactive corrective measures
        </li>
      </ul>
    </div>
  </SwiperSlide>

    </Swiper>

   
    <div className="custom-swiper-button-prev1 custom-swiper-btn mobile-device">
      <i className="fa fa-chevron-left"></i>
    </div>
    <div className="custom-swiper-button-next1 custom-swiper-btn mobile-device">
      <i className="fa fa-chevron-right"></i>
    </div>
  </div>

 
  <div className="text-center my-4">
    <img src={cta3} alt="ERP Banner" className="img-fluid" />
  </div>

 
  <div className="swiper-wrapper-container position-relative">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation={{
        nextEl: ".custom-swiper-button-next2",
        prevEl: ".custom-swiper-button-prev2",
      }}
    //   pagination={{ clickable: true }}
      breakpoints={{
    0: { slidesPerView: 1 },       
    600: { slidesPerView: 2 },     
    768: { slidesPerView: 3 },      
  }}
      className="mb-4"
    >
     <SwiperSlide>
  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
    <h5 className="text-capitalize py-2 yllow_txt">Better Compliance</h5>
    <ul>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Automated compliance
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Regulatory adherence
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Better compliance monitoring
      </li>
    </ul>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
    <h5 className="text-capitalize py-2 yllow_txt">Lean Manufacturing</h5>
    <ul>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Waste reduction
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Lower manufacturing costs
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Improved bottom line
      </li>
    </ul>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
    <h5 className="text-capitalize py-2 yllow_txt">Revenue Growth</h5>
    <ul>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Improved planning
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Increased sales
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Higher profit margins
      </li>
    </ul>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="erp-benefits-cards text-start p-3 shadow rounded erp-benefits-cards-mobile">
    <h5 className="text-capitalize py-2 yllow_txt">Improved Supply Chain</h5>
    <ul>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Superior supply-chains
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Efficient demand forecasting
      </li>
      <li className="text-black">
        <img src={icon1} alt="check" className="me-2" /> Effective supplier management
      </li>
    </ul>
  </div>
</SwiperSlide>

    </Swiper>

   
    <div className="custom-swiper-button-prev2 custom-swiper-btn mobile-device">
      <i className="fa fa-chevron-left"></i>
    </div>
    <div className="custom-swiper-button-next2 custom-swiper-btn mobile-device">
      <i className="fa fa-chevron-right"></i>
    </div>
  </div>
</div>


          
{/* mobile web erp end */}

          <div className="mt-4 col-lg-3 col-md-6 col-sm-12 text-center">
            <div className="xb-btn">
              <Link onClick={ClickHandler} to="/contact" className="thm-btn thm-btn--devops">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebBaseERP;
