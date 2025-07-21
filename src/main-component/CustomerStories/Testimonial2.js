import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import tImg1 from "../../images/testimonial/da-tes-img.png";  // Replace with real customer photos
import tImg2 from "../../images/testimonial/ixico-logo.png";  // Replace with real logos

const Testimonial2 = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);


    const testimonials = [
        {
            title: "Empowering Field Teams with MobileERP",
            content1: "Our sales force needed real-time access to inventory and orders while on the move. Soft Trade's MobileERP enabled seamless mobile workflows and boosted our team’s productivity by 60%.",
            highlights: [
                { number: "60% Increase", text: "In mobile workforce productivity" },
                { number: "24/7 Access", text: "Real-time inventory updates from any location" }
            ],
             content2: "With MobileERP, our team now operates entirely on-the-go, processing customer orders, accessing sales history, and updating delivery status directly from their phones or tablets—no need for laptops or office visits. The speed of operations has significantly increased.",
        content3: "The intuitive user interface, offline access features, and real-time data sync make it ideal for dynamic field environments. It’s truly a game changer for any sales-driven company looking to scale rapidly without sacrificing mobility or visibility."
            },
        {
            title: "WebSuite ERP Streamlined Our Operations",
            content1: "We migrated from legacy software to Soft Trade's WebSuite ERP. The switch streamlined finance, HR, and logistics into one platform accessible via any browser.",
            highlights: [
                { number: "3x Faster", text: "Order processing time reduced drastically" },
                { number: "Unified Dashboard", text: "All departments collaborate in real-time" }
            ],
             content2: "WebSuite ERP has helped us eliminate information silos between departments and create a cohesive operational framework. Now, our teams work collaboratively, sharing real-time data and updates that fuel better decision-making and forecasting.",
        content3: "Since adopting the platform, our operations team has achieved higher alignment and transparency. Redundant tasks have been reduced by 40%, and managers now have instant access to all critical KPIs on a unified dashboard, making performance tracking more efficient."
    },
        {
            title: "CloudCore ERP Scaled with Our Growth",
            content1: "As we scaled globally, we needed a solution that scaled too. CloudCore ERP from Soft Trade gave us security, performance, and flexibility—all in the cloud.",
            highlights: [
                { number: "$1M Saved", text: "In server maintenance and downtime costs" },
                { number: "99.9% Uptime", text: "Across global office operations" }
            ],
             content2: "Thanks to Soft Trade’s cloud-first approach, we migrated our entire ecosystem with zero operational disruption. The platform’s automatic updates and data redundancy have given us the confidence to run mission-critical operations with peace of mind.",
        content3: "Data is fully encrypted and access-controlled, ensuring compliance across various regions. Teams in five countries now collaborate effortlessly, sharing reports, schedules, and tasks in real time—all without needing additional hardware or IT personnel."
    },
        {
            title: "DeskMaster ERP Modernized Our Factory Floor",
            content1: "DeskMaster ERP integrated with our machines and legacy software, giving live reports and scheduling in real-time.",
            highlights: [
                { number: "80% Reduction", text: "In production downtime" },
                { number: "Full Integration", text: "With legacy desktop systems" }
            ],
          content2: "By connecting our machinery to the DeskMaster ERP system, we’ve achieved unprecedented efficiency on the shop floor. Machine status, shift schedules, and resource allocation are now visible in one interface, enabling proactive decision-making and faster maintenance cycles.",
        content3: "DeskMaster bridges the gap between old and new technologies seamlessly. We didn’t have to reinvest in our IT infrastructure, yet we unlocked modern ERP features like real-time analytics, preventive maintenance alerts, and centralized scheduling. It's revolutionized our operations."
    },
    ];

    return (
        <section className="testimonial pt-50 pb-50">
            <div className="container">
                <div className="da-sec-titlte text-center mb-60">
                    <h2 className="title text-black fw-normal fs-2">Client Experiences with Soft Trade ERP Solutions</h2>
                </div>
                <div className="da-testimonial-wrap pos-rel">
                    <div className="da-testimonial-slider swiper-container">
                        <div className="swiper-wrapper">
                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={50}
                                slidesPerView={1}
                                loop={true}
                                speed={1800}
                                parallax={true}
                                ref={swiperRef}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                            >
                                {testimonials.map((item, index) => (
                                    <SwiperSlide className="da-testimonial" key={index}>
                                        <div className="row align-items-center mt-none-30">
                                            <div className="col-lg-6 mt-30 order-2 order-lg-1">
                                                <div className="da-tes-left">
                                                    <h2 className="xb-item--title">{item.title}</h2>
                                                    <p className="xb-item--content text-justify content--one">{item.content1}</p>
                                                    <div className="xb-item--holder ul_li align-items-start">
                                                        {item.highlights.map((hl, i) => (
                                                            <div className="xb-item--meta" key={i}>
                                                                <h3 className="xb-item--number">{hl.number}</h3>
                                                                <span className="xb-item--text">{hl.text}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <p className="xb-item--content text-justify content--two">{item.content2}</p>
                                                    <p className="xb-item--content text-justify content--three">{item.content3}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 mt-30 order-1 order-lg-2">
                                                <div className="da-tes-right">
                                                    <div className="xb-item--author">
                                                        <img src={tImg1} alt="Client" />
                                                    </div>
                                                    <div className="xb-item--avatar">
                                                        <img src={tImg2} alt="Company logo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                    <div className="da-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-long-arrow-left"></i></div>
                    <div className="da-swiper-btn swiper-button-next" ref={nextRef}><i className="fal fa-long-arrow-right"></i></div>
                </div>
                
            </div>
        </section>
    );
};

export default Testimonial2;
