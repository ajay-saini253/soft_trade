import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
// import flower from '../../../images/icon/flower-icon.svg';
import brand1 from '../../../images/brand/brand-logo01.png';
import brand2 from '../../../images/brand/brand-logo02.png';
import brand3 from '../../../images/brand/brand-logo04.png';
import brand4 from '../../../images/brand/brand-logo03.png';
import brand5 from '../../../images/brand/brand-logo05.png';
import brand6 from '../../../images/brand/brand-logo08.png';
import brand7 from '../../../images/brand/brand-logo07.png';
import brand8 from '../../../images/brand/brand-logo06.png';

const BrandSection = () => {

  return (
    <section className="brand pt-50 pb-80" style={{ backgroundColor: "#f6f6f8" }}>
      <div className="container">
        
        <div className="page-title-box text-center mb-65">
          {/* <img src={flower} alt="" /> */}
          <Fade direction='up' triggerOnce={'false'} duration={1000} delay={9}>
              <h5 className="title pb-20 wow fadeInUp" data-wow-duration="600ms">Our Products</h5>
          </Fade>
          {/* <img src={flower} alt="" /> */}
        </div>
        <div className="xb-brand-wrap">
          <div className="xb-brand-item">
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home">
                <img src={brand1} alt="Shopify" />
              </Link>
              <Link to="/home" className="xb-overlay"></Link>
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home">
                <img src={brand2} alt="Shopify" />
              </Link>
              <Link to="/home" className="xb-overlay"></Link>
            </div>
          </div>
          <div className="xb-brand-item xb-brand-item--big xb-brand-hover">
            <Link to="/home">
              <img src={brand3} alt="Shopify" />
            </Link>
            <Link to="/home" className="xb-overlay"></Link>
          </div>
          <div className="xb-brand-item">
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home">
                <img src={brand4} alt="Shopify" />
              </Link>
              <Link to="/home" className="xb-overlay"></Link>
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home">
                <img src={brand5} alt="Shopify" />
              </Link>
              <Link to="/home" className="xb-overlay"></Link>
            </div>
          </div>
          <div className="xb-brand-item xb-brand-item--big xb-brand-hover">
            <Link to="/home">
              <img src={brand6} alt="Shopify" />
            </Link>
            <Link to="/home" className="xb-overlay"></Link>
          </div>
          <div className="xb-brand-item">
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home">
                <img src={brand7} alt="Shopify" />
              </Link>
              <Link to="/home" className="xb-overlay"></Link>
            </div>
            <div className="xb-brand-single xb-brand-hover">
              <Link to="/home">
                <img src={brand8} alt="Shopify" />
              </Link>
              <Link to="/home" className="xb-overlay"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
