import React, { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

import beforeImg from "../../../images/hero/business-than.png";
import afterImg from "../../../images/hero/business-now.png";
import icon3 from "../../../images/icon/Simplification1.png";

const Hero = () => {
  const sliderRef = useRef(null);
  const [dividerX, setDividerX] = useState(50);
  const [dragging, setDragging] = useState(false);

  const getOffsetPercent = (clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const offset = ((clientX - rect.left) / rect.width) * 100;
    return Math.max(0, Math.min(100, offset));
  };

  const startDrag = (e) => {
    setDragging(true);
    if (e.type === "touchstart") {
      setDividerX(getOffsetPercent(e.touches[0].clientX));
    } else {
      setDividerX(getOffsetPercent(e.clientX));
    }
  };

  const stopDrag = () => setDragging(false);

  const onDrag = (e) => {
    if (!dragging) return;
    if (e.type === "touchmove") {
      setDividerX(getOffsetPercent(e.touches[0].clientX));
    } else {
      setDividerX(getOffsetPercent(e.clientX));
    }
  };

  return (
    <section className="hero1-split py-5 bg-light text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="da-sec-titlte text-center mb-4">
              <Fade direction="up" triggerOnce={true} duration={1000}>
                <h2 className="hero1_Heading" style={{ }}>
                  Transform Your Retail, Wholesale & Distribution Business with SoftTrade Infotech Pvt. Ltd.
                </h2>
                <p className="content hero1_para fs-5">
                  Experience how we help businesses grow with smart, scalable ERP solutions built for modern enterprises.
                </p>

                <button className="text-white my-3 wow" type="button" id="hero1_button">
                  <span className="hero1_button_text">
                    <img src={icon3} alt="Start Now Icon" width={20} />
                  <span  className="ms-3">Start now - It's free</span>
                 </span>
                </button>

                <div className="mb-5">
                  <span className="hero1_span_text">
                    Free, forever, with unlimited users.{" "}
                  </span>
                    <span className="hero1_span_text2">See Why</span>

                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div
        className="hero1-slider-container"
        ref={sliderRef}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onMouseMove={onDrag}
        onTouchMove={onDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchEnd={stopDrag}
      >
        <img src={afterImg} alt="Business Now" className="hero1-slider-img" />

        <div className="hero1-slider-before" style={{ width: `${dividerX}%` }}>
          <img src={beforeImg} alt="Business Then" />
        </div>

        <div className="hero1-slider-divider" style={{ left: `${dividerX}%` }}>
          <button className="hero1-arrow-btn left" aria-label="Previous">
            <i className="fas fa-arrow-left"></i>
          </button>

          <div className="hero1-handle" />

          <button className="hero1-arrow-btn right" aria-label="Next">
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* <div className="hero1-label-left">
          Business <strong>Then</strong>
        </div>
        <div className="hero1-label-right">
          <span style={{ color: "#0036b1" }}>Business</span> <strong>Now</strong>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
