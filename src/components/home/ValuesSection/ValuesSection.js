import React from 'react';
import { Fade } from "react-awesome-reveal";
// import icon from '../../../images/icon/data-layer.svg';
import icon8 from '../../../images/icon/success.jpg';
import icon9 from '../../../images/icon/coding.jpg';
import icon10 from '../../../images/icon/wenibar.jpg';
import icon11 from '../../../images/icon/united.jpg';
import icon12 from '../../../images/icon/transparency.jpg';
import icon13 from '../../../images/icon/jigsaw.jpg';

import icon4 from '../../../images/icon/Accountable.png';
import icon5 from '../../../images/icon/black-arrow.png';
import icon6 from '../../../images/shape/line-shape.png';
import icon7 from '../../../images/icon/PassionateInnovative.jpg';

const featuresTop = [
  {
    icon: icon8,
    title: "Be Real",
    content: "We treat our customers and employees with integrity. Thus, we run transparency to produce the best results."
  },
  {
    icon: icon9,
    title: "Customer First",
    content: "Our clients are our priority. We focus on understanding your needs to deliver solutions that truly create value."
  },
  {
    icon: icon10,
    title: "Integrity Always",
    content: "We believe in transparency and honesty in all our dealings—internally and with our clients."
  }
];

const FeatureItem = ({ icon, title, content }) => (
  <div className="col-lg-4 d-flex  align-items-center justify-content-evenly mb-sm-5 mb-3">
    <div className="hd-feature-item text-center">
      <img src={icon} alt={title} width={100}/>
      <h3 className="xb-item--title my-2">{title}</h3>
      <p className="xb-item--content">{content}</p>
    </div>
  </div>
);

const featuresBottom = [
  {
    icon: icon11,
    title: "Quality Driven",
    content: "We never compromise on quality. Every product we deliver is tested, refined, and built to last."
  },
  {
    icon: icon12,
    title: "Agile & Adaptive",
    content: "We stay flexible in our approach to adapt quickly to your evolving business needs and technology trends."
  },
  {
    icon: icon13,
    title: "Collaborative Teamwork",
    content: "We work as one team—with you and within Soft Trade—to achieve shared success and sustainable growth."
  }
];

//const featuresBottom = [...featuresTop]; // Replace with different content if needed

const FeatureItemBottom = ({ icon, title, content }) => (
  <div className="col-lg-4 d-flex  align-items-center justify-content-evenly mb-sm-5 mb-3 " id="valueSections">
    <div className="hd-feature-item text-center">
      <img src={icon} alt={title} width={100}/>
      <h3 className="xb-item--title my-2">{title}</h3>
      <p className="xb-item--content">{content}</p>
    </div>
  </div>
);

const ValuesSection = () => {
  return (
    <section className=" ValuesSection feature pt-50 pb-50 o-hidden" id="features"  style={{ backgroundColor: '#f6f0e6' }}>
      <div className="container">
        <div className="xb-feature-wrap pos-rel">
          <div className="sec-title--two sec-title--four text-center mb-65">
            <Fade direction="down" triggerOnce={false} duration={1500}>
              <h2 className="title">Why is the best Soft Trade?</h2>
            </Fade>
          </div>

       
          <div className="row d-flex  align-items-center justify-content-evenly flex-wrap  hd-feature--top">
            {featuresTop.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>

        
          <div className="hd-feature--middle d-flex align-items-center justify-content-between flex-wrap sm-mt-5 mb-5">
            <div className="hd-feature-item text-center">
              <img src={icon4} alt="Be Accountable" width={100} />
              <h3 className="xb-item--title">Be Accountable</h3>
              <p className="xb-item--content">
                We know the meaning of responsibility. We are result-oriented and promise our clients for the best business solutions and outcomes.
              </p>
            </div>

            <div className="hd-button-box pos-rel text-center ">
              <a href="#!" className="hd-feature-button">
                <span>SOFT TRADE VALUES</span>
              </a>
              <div className="xb-arrow">
                <div className="arrow arrow--one"><img src={icon5} alt="arrow" /></div>
                <div className="arrow arrow--two"><img src={icon5} alt="arrow" /></div>
                <div className="arrow arrow--three"><img src={icon5} alt="arrow" /></div>
                <div className="arrow arrow--four"><img src={icon5} alt="arrow" /></div>
                 <div className="arrow arrow--top-left"><img src={icon5} alt="arrow" /></div>
                <div className="arrow arrow--top-right"><img src={icon5} alt="arrow" /></div>
                <div className="arrow arrow--bottom-left"><img src={icon5} alt="arrow" /></div>
                 <div className="arrow arrow--bottom-right"><img src={icon5} alt="arrow" /></div>
                <div className="arrow arrow--five"><img src={icon6} alt="shape" /></div>
              </div>
            </div>

            <div className="hd-feature-item text-center">
              <img src={icon7} alt="Passionate & Innovative" width={100} />
              <h3 className="xb-item--title">Passionate & Innovative</h3>
              <p className="xb-item--content">
                Passion & innovation are the keys to success. We have a team of experts that are passionate enough to generate result-oriented solutions.
              </p>
            </div>
          </div>

        
          <div className="row hd-feature--bottom">
            {featuresBottom.map((item, index) => (
              <FeatureItemBottom key={index} {...item} />
            ))}
          </div>

          <div className="xb-shape">
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
