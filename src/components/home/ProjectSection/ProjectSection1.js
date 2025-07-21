// import React, { useRef } from "react";
// import Project from '../../../api/project'
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/pagination';
// import { Fade } from "react-awesome-reveal";

// import icon from '../../../images/icon/eye-icon.svg'
import mobileImg from "from "../../../images/Mobile Screens.png";      // Replace with actual paths
import webImg from "from "../../../images/Group 5357.png";
import desktopImg from "from "../../../images/Group 457.png";

const ProjectSection1 = () => {

// const ProjectSection = (props) => {
    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // }

    // const sliderRef = useRef(null);
    // const navSliderRef = useRef(null);

    // const mainSliderSettings = {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: false,
    //     adaptiveHeight: true,
    //     centerMode: true,
    //     useTransform: true,
    //     centerPadding: "300px",
    //     cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
    //     responsive: [
    //         {
    //             breakpoint: 1025,
    //             settings: {
    //                 centerPadding: "150px",
    //             },
    //         },
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 centerPadding: "100px",
    //             },
    //         },
    //         {
    //             breakpoint: 420,
    //             settings: {
    //                 centerPadding: "20px",
    //             },
    //         },
    //     ],
    //     afterChange: (currentSlide) => {
    //         navSliderRef.current.slickGoTo(currentSlide);
    //     },
    // };

    // const navSliderSettings = {
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     dots: false,
    //     arrows: false,
    //     focusOnSelect: true,
    //     infinite: true,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //             },
    //         },
    //         {
    //             breakpoint: 640,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //             },
    //         },
    //         {
    //             breakpoint: 420,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //             },
    //         },
    //     ],
    //     beforeChange: (_, next) => {
    //         const slides = document.querySelectorAll(".seo-project-slider-nav .slick-slide");
    //         slides.forEach((slide) => slide.classList.remove("is-active"));
    //         slides[next]?.classList.add("is-active");
    //     },
    // };

    // const handleNavClick = (index) => {
    //     sliderRef.current.slickGoTo(index);
    // };

    return (
        <>
 <section className="py-5 text-center bg-black">
      <div className="container">
        <h2 className="fw-bold text-white mb-5">
          Cloud ERP for Seamless Business Operations
        </h2>
        <div className="row">
          {/* Mobile ERP */}
          <div className="col-lg-4 p-0">
            <div className="p-4 h-100  shadow-sm bg-white">
              <h5 className="fw-bold text-black mb-3">Mobile ERP Apps</h5>
              <p className="text-black">
                Our mobile apps empower delivery teams and field staff with features.
              </p>
              <img src={mobileImg} alt="Mobile ERP" className="img-fluid mt-3" />
            </div>
          </div>

          {/* Web ERP */}
          <div className="col-lg-4 p-0">
            <div className="p-4 h-100  shadow-sm text-white" style={{ backgroundColor: "#2962FF" }}>
              <h5 className="fw-bold mb-3 text-white">Web-Based ERP</h5>
              <p>
                Access your ERP anywhere with just a browser. From billing, inventory, to GST-compliant accounting.
              </p>
              <img src={webImg} alt="Web ERP" id="ajay-img"  className="img-fluid mt-3" />
            </div>
          </div>

          {/* Desktop ERP */}
          <div className="col-lg-4 p-0">
            <div className="p-4 h-100  shadow-sm text-white" style={{ backgroundColor: "#000" }}>
              <h5 className="fw-bold text-white mb-3">Desktop ERP</h5>
              <p>
                SoftTrade offers powerful desktop ERP solutions for smoother operations.
              </p>
              <img src={desktopImg} alt="Desktop ERP" className="img-fluid mt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>


       
        </>
    );
}

export default ProjectSection1;