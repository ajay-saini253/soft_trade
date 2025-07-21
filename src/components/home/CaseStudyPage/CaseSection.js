import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { motion, AnimatePresence } from "framer-motion";
import caseStudies from "../../../api/case";
import icon1 from '../../../images/video/polygon.png';
import ModalVideo from 'react-modal-video';

import heroImg1 from '../../../images/hero/imgs1.png';
import heroImg2 from '../../../images/hero/imgs2.png';
import heroImg3 from '../../../images/hero/imgs3.png';
import heroImg4 from '../../../images/hero/imgs4.png';

const CaseStudySection = () => {
  const [activeFilter, setActiveFilter] = useState("cat1");
  const [isOpen, setOpen] = useState(false);

  const handleFilter = (category) => {
    setActiveFilter(category);
  };


 const filters = [
  { key: "cat1", label: "Retail" },
  { key: "cat2", label: "Food" },
  { key: "cat3", label: "Distribution" },
];

  const headingContent = {
      cat1: {
    title: "Smart Retail Billing Solution",
    desc: "Track inventory, manage billing, and generate insightful reports for your retail business with our user-friendly, cloud-based POS system.",
  },
  cat2: {
    title: "Tailored Billing Software for Food Businesses",
    desc: "Streamline operations for restaurants, cafés, and food outlets using a cloud-based POS. Simplify billing, order tracking, and inventory — all in one place.",
  },
  cat3: {
    title: "Efficient Billing Software for Distributors",
    desc: "Simplify order processing, inventory management, and multi-location operations with a powerful billing system tailored for distribution networks.",
  },
};

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section
      className="casestudy pt-50 pb-50"
      style={{
        background: "linear-gradient(180deg, #D9E8FF -22.87%, #FFFFFF 86.17%)",
      }}
    >
      <div className="container">
        {/* Filter Buttons */}
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="team-menu casestudy-menu bg-white d-flex justify-content-center flex-wrap">
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`filter-btn ${activeFilter === filter.key ? "active" : ""}`}
                  onClick={() => handleFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Heading */}
        <div>
          <h2 className="text-center fw-bolder fs-4 mt-20 mb-20">
            {headingContent[activeFilter]?.title || "Tailored Billing Software"}
          </h2>
          <p className="text-center mt-20 mb-20">
            {headingContent[activeFilter]?.desc || "Explore our smart ERP solutions customized for your industry."}
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="casestudy-content mt-10">
          <div className="row grid  justify-content-center">
            {/* Left floating images */}
            <div className="col-lg-2">
              <div className="out-image">
                <div className="img img--one updown-2">
                  <Fade direction="down" triggerOnce={true} duration={1200}>
                    <img className="wow fadeInDown" src={heroImg1} alt="" />
                  </Fade>
                </div>
                <div className="img img--two updown-3">
                  <Fade direction="up" triggerOnce={true} duration={1200}>
                    <img className="wow fadeInUp" src={heroImg2} alt="" />
                  </Fade>
                </div>
              </div>
            </div>

            {/* Center Case Studies */}
            <AnimatePresence>
              {caseStudies
                .filter((item) => activeFilter === "*" || item.category === activeFilter)
                .map((study) => (
                  <motion.div
                    key={study.id}
                    className={`col-lg-8 col-md-10 grid-item mt-30`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="casestudy-card">
                      <div className="casestudy-img-wrap xb-video">
                        <Link onClick={ClickHandler} to={`/casestudy-details/${study.slug}`}>
                          <img src={study.img} alt={study.title} className="case-img rounded" />
                          <button onClick={() => setOpen(true)} className="popup-video btn-video">
                            <img src={icon1} alt="" />
                          </button>
                        </Link>
                      </div>
                      <Link onClick={ClickHandler} to={`/casestudy-details/${study.slug}`} className="overlay-link"></Link>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>

            {/* Right floating images */}
            <div className="col-lg-2">
              <div className="out-image">
                <div className="img img--one updown-2">
                  <Fade direction="down" triggerOnce={true} duration={1200}>
                    <img className="wow fadeInDown" src={heroImg3} alt="" />
                  </Fade>
                </div>
                <div className="img img--two updown-3">
                  <Fade direction="up" triggerOnce={true} duration={1200}>
                    <img className="wow fadeInUp" src={heroImg4} alt="" />
                  </Fade>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="cRXm1p-CNyk"
        onClose={() => setOpen(false)}
      />
    </section>
  );
};

export default CaseStudySection;
