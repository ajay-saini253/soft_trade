import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import icon1 from '../../../images/icon/prev-icon.png'
// import icon2 from '../../../images/icon/next-icon.png'
import erpImg1 from "../../../images/service/Mobile_erp.png";
import erpImg2 from "../../../images/service/Desktop_erp.png";
import erpImg3 from "../../../images/service/cloud_erp.png";
import erpImg4 from "../../../images/service/web_erps.png";

// import tImg1 from "../../../images/testimonial/da-tes-img.png"; 


const erpSolutions = [
  {
    img: erpImg1,
    title: "Mobile ERP",
    content: "Our Mobile ERP solution enables real-time business operations on the go. Access reports, manage workflows, and stay updated from anywhere, anytime.",
    features: [
      "Real-time mobile access",
      "Push notifications",
      "Offline sync capabilities",
      "Quick Inventory Scanning",
      "On-the-go Order Alerts"
    ],
    features1: [
      { heading: "Inventory Scan", desc: "Scan barcodes and manage stock directly from your mobile device." },
      { heading: "CRM Access", desc: "Engage with leads and customers via your mobile dashboard." },
      { heading: "Order Alerts", desc: "Instant order and stock notifications for fast decisions." }
    ]
  },
  {
    img: erpImg2,
    title: "Desktop ERP",
    content: "A robust on-premise ERP system designed for speed and performance. Ideal for organizations with strict internal IT policies and offline access requirements.",
    features: [
      "Admin Panel",
      "User Roles",
      "Reports",
      "Invoice Generation",
      "High-speed processing",
      "Data stored locally",
      "No internet dependency"
    ],
    features1: [
      { heading: "Advanced Reporting", desc: "Generate and export detailed reports quickly for informed decisions." },
      { heading: "Custom Dashboards", desc: "Tailor your ERP interface to department-specific workflows." }
    ]
  },
  {
    img: erpImg3,
    title: "Cloud ERP",
    content: "Our cloud-based ERP offers scalability, flexibility, and remote access. Stay secure and connected with automatic updates and real-time insights.",
    features: [
      "System Integration",
      "Remote Access",
      "Data Storage",
      "Security",
      "Accessible from anywhere",

      "Cost-effective and scalable"
    ],
    features1: [
      { heading: "Cloud Backup", desc: "Daily secure backups of your data to prevent any data loss." },
      { heading: "API Integration", desc: "Easily connect with third-party apps like CRM, Accounting, etc." },
      { heading: "Real-time Sync", desc: "Your data syncs instantly across platforms and devices." }
    ]
  },
  {
    img: erpImg4,
    title: "Web-Based ERP",
    content: "Access your ERP system from any web browser with our intuitive and responsive web ERP solution. Simplified interfaces built for productivity.",
    features: [
      "Admin Panel",
      "User Management",
      "Analytics",
      "Billing Generation",
      "Browser-based access",
      "No installation required",
      "User-friendly interface"
    ],
    features1: [
      { heading: "Responsive UI", desc: "Modern, clean and mobile-friendly interface for ease of use." },
      { heading: "Analytics Dashboard", desc: "Track KPIs and business performance visually in real-time." }
    ]
  }
];




const ProjectSecton3 = () => {
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




  return (
    // <section className="testimonial pt-50 pb-50" style={{ background: "#fefaf2" }}>
    <section className="testimonial pt-50 pb-50">
      <div className="container">
        <div className="da-sec-titlte text-center mb-60">
          <h2 className="title text-black fw-normal">Our ERP Solutions</h2>
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
                {erpSolutions.map((item, index) => (
                  <SwiperSlide className=" p-0" key={index}>
                    <div className="row erp-slide_background m-1">
                      <div className="col-lg-8 p-0 m-0  ">

                          <div className="">
                            <img src={item.img} alt={item.title}
                              className="img-fluid erp_image"
                              loading="lazy" />
                          

                        </div>
                      </div>

                      <div className="col-lg-4 mt-30 ps-5">
                        <div className="da-tes-left">
                          <h2 className="xb-item--title">{item.title}</h2>
                          <p className="xb-item--content text-justify content--one pb-4">{item.content}</p>
                          <ul className="list-unstyled">
                            {item.features.map((feature, fIndex) => (
                              <li key={fIndex} className="mb-2 d-flex align-items-start">
                                <span className="me-2">
                                  <i className="fas fa-check-circle text-success" aria-hidden="true"></i>
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          {item.features1?.length > 0 && (
                            <div className="pt-4">
                              {item.features1.map((point, i) => (
                                <div key={i} className="mb-4">
                                  <h5 className="fw-bold mb-1">{point.heading}:</h5>
                                  <p className="text-muted mb-0">{point.desc}</p>
                                </div>
                              ))}
                            </div>
                          )}

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

export default ProjectSecton3;
