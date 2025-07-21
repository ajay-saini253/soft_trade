import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import pimg1 from "../../../images/brand/brand-logo01.png";
import pimg2 from "../../../images/brand/brand-logo02.png";
import pimg3 from "../../../images/brand/brand-logo03.png";
import pimg4 from "../../../images/brand/brand-logo04.png";
import pimg5 from "../../../images/brand/brand-logo05.png";
import pimg6 from "../../../images/brand/brand-logo06.png";
import pimg7 from "../../../images/brand/brand-logo05.png"; // Same as pimg5

const partners = [
  { pImg: pimg1 },
  { pImg: pimg2 },
  { pImg: pimg3 },
  { pImg: pimg4 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg2 },
  { pImg: pimg5 },
  { pImg: pimg6 },
  { pImg: pimg7 },
  { pImg: pimg2 },
];

const baseSliderSettings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  responsive: [
    { breakpoint: 1025, settings: { slidesToShow: 7, slidesToScroll: 1 } },
    { breakpoint: 991, settings: { slidesToShow: 5, slidesToScroll: 1 } },
    { breakpoint: 767, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 450, settings: { slidesToShow: 2, slidesToScroll: 1 } },
  ],
};

const rtlSliderSettings = {
  ...baseSliderSettings,
  rtl: true,
};

const PartnerSection = () => {
  return (
    <section className="brand pt-50 pb-50" style={{ background: "#f9f9f9" }}>
      <div className="container">
        <div className="o-hidden">
          <div className="text-center">
            <h2 className="py-3">Trusted by valuable brands</h2>
            <p className="text-black pb-5">
              More than <strong>250+ clients</strong> have entrusted us for their <strong>Digital Transformation</strong>
            </p>
          </div>

          {/* First Slider - Left to Right */}
          <div className="brand-wrap brand-marquee mx-3">
            <Slider {...baseSliderSettings}>
              {partners.map((partner, index) => (
                <div className="brand-logo text-center px-3" key={index}>
                  <img src={partner.pImg} alt={`Client ${index}`}  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Second Slider - Right to Left */}
          <div className="brand-wrap brand-marquee mt-3 mx-3">
            <Slider {...rtlSliderSettings}>
              {partners.map((partner, index) => (
                <div className="brand-logo text-center px-3" key={`rtl-${index}`}>
                  <img src={partner.pImg} alt={`Client ${index}`}  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
