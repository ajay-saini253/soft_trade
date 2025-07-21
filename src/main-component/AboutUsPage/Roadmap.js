import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";





import shape1 from '../../images/shape/line-shape03.png'
import shape2 from '../../images/shape/line-shape04.png'
import shape3 from '../../images/shape/pattern02.png'
import shape4 from '../../images/shape/monitor-shape.png'
import shape5 from '../../images/shape/blur-shape.png'

const RoadmapSlider = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const roadmapData = [
  {
    quarter: "Q-1",
    year: "2009",
    title: "Soft Trade was founded",
    content:
      "Soft Trade started its journey in Jaipur, India with a small but passionate team of 4 people. From a modest office, we began offering software solutions tailored to local businesses.",
  },
  {
    quarter: "Q-2",
    year: "2012",
    title: "First 100 Clients Served",
    content:
      "By 2012, Soft Trade had successfully delivered over 100 software solutions, including early versions of ERP and inventory systems for SMEs across Rajasthan.",
  },
  {
    quarter: "Q-3",
    year: "2015",
    title: "Team Expansion & New Domains",
    content:
      "With growing demand, Soft Trade expanded its team to 30+ members and ventured into web-based ERP, hostel management systems, and custom CRM platforms.",
  },
  {
    quarter: "Q-4",
    year: "2018",
    title: "Crossing 300+ Clients",
    content:
      "We crossed the milestone of 300+ active clients, launched cloud-based ERP systems, and began serving educational institutions and manufacturing sectors across India.",
  },
  {
    quarter: "Q-1",
    year: "2020",
    title: "Remote Services During Pandemic",
    content:
      "Soft Trade quickly adapted to remote support and development during COVID-19, helping businesses go digital with custom dashboards, attendance tracking, and mobile ERP apps.",
  },
  {
    quarter: "Q-2",
    year: "2023",
    title: "500+ Clients & Growing",
    content:
      "We hit the 500+ clients mark, introduced AI-assisted modules, and expanded services internationally to clients in the UAE, Nepal, and Africa.",
  },
  {
    quarter: "Q-3",
    year: "2024",
    title: "Present Day",
    content:
      "Today, Soft Trade is a team of over 70 professionals offering tailored ERP, CRM, and automation tools. With a client-first approach, we continue to deliver scalable, secure, and intuitive solutions globally.",
  },
];


    return (
        <section className="roadmap roadmap-pb pt-80 pb-200 pos-rel" style={{ backgroundColor: "#e5efff" }}>
            <div className="container">
                <div className="sa-tes_top roadmap-top pos-rel mb-85">
                    <div className="sec-title--two">
                        {/* <div className="sub-title sub-title--strock wow fadeInDown" data-wow-duration="600ms"><img src="assets/img/icon/process-icon.svg" alt="" />Our Journey</div> */}
                        <h2 className="title text-center wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">Our Journey 0 to 600 Clients</h2>
                    </div>
                    {/* <div className="sa-tes_button roadmap-button">
                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-angle-left"></i></div>
                        <div className="sa-swiper-btn active swiper-button-next" ref={nextRef}><i className="fal fa-angle-right"></i></div>
                    </div> */}
                </div>
            </div>
            <div className="roadmap-slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    loop={true}
                    spaceBetween={50}
                    speed={400}
                    slidesPerView={3}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: nextRef.current,
                        prevEl: prevRef.current,
                    }}
                    breakpoints={{
                        1600: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        576: {
                            slidesPerView: 1,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                    className="raodmap-slider"
                >
                    {roadmapData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="roadmap-item">
                                <div className="xb-item--top">
                                    <img src={shape1} alt="" />
                                    <span className="xb-item--ques">{item.quarter}</span>
                                    <img src={shape2} alt="" />
                                </div>
                                <div className="xb-item--holder">
                                    <span className="xb-item--year">{item.year}</span>
                                    <h3 className="xb-item--title">{item.title}</h3>
                                    <p className="xb-item--content">{item.content}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Pagination */}
                <div className="swiper-pagination"></div>
            </div>
            <div className="roadmap-shape">
                <div className="shape shape--one"><img src={shape3} alt=""/></div>
                <div className="shape shape--two"><img src={shape4} alt=""/></div>
                <div className="shape shape--three"><img src={shape5} alt=""/></div>
            </div>
        </section>
    );
};

export default RoadmapSlider;
