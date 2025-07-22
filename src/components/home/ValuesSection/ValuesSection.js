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
import icon5 from '../../../images/icon/users.png';
// import icon6 from '../../../images/shape/line-shape.png';
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
  <div className="col-lg-4 d-flex  align-items-center justify-content-evenly mb-sm-3 ">
    <div className="hd-feature-item  d-flex align-items-center">
      <div className='col-4'>
        <img src={icon} alt={title} width={80} />
      </div>
      <div className='col-8 px-3 pb-2'>
        <h3 className="xb-item--title my-2">{title}</h3>
        <p className="xb-item--content text-justify">{content}</p>
      </div>
    </div>
  </div>
);


const featuresBottom = [
  {
    icon: icon11,
    title: "Quality Driven",
    content: "We ensure top-notch, reliable, and thoroughly tested solutions for every project."
  },
  {
    icon: icon12,
    title: "Agile & Adaptive",
    content: "We quickly adapt to changes and deliver flexible, future-ready solutions."
  },
  {
    icon: icon13,
    title: "Collaborative Teamwork",
    content: "We work closely as one team to drive shared success and innovation."
  }
];
const featuresCenter = [
  {
    icon: icon7,
    title: "Passionate & Innovative",
    content: "Passion & innovation are the keys to success. We have a team of experts that are passionate enough to generate."
  },
  {
    icon: icon4,
    title: "Be Accountable",
    content: "  We know the meaning of responsibility. We are result-oriented and promise our clients for the best business solutions and outcomes."
  },
  {
    icon: icon5,
    title: "Customer-Centric Approach",
    content: "Your success is our priority. We focus on providing personalized support and scalable systems tailored to your business."
  }
];


//const featuresBottom = [...featuresTop]; // Replace with different content if needed

const FeatureItemBottom = ({ icon, title, content }) => (
  <div className="col-lg-4 d-flex  align-items-center justify-content-evenly mb-sm-3 " id="valueSections">
    <div className="hd-feature-item  d-flex align-items-center">
     <div className='col-4'>
        <img src={icon} alt={title} width={80} />
      </div>
      <div className='col-8 px-3 pb-2'>
        <h3 className="xb-item--title my-2">{title}</h3>
        <p className="xb-item--content text-justify">{content}</p>
      </div>
      </div>
  </div>
);

const ValuesSection = () => {
  return (
  
    <section className=" ValuesSection feature pt-70 pb-70 o-hidden" >
      <div className="container">
        <div className="xb-feature-wrap pos-rel">
          <div className="sec-title--two sec-title--four text-center mb-65">
            <Fade direction="down" triggerOnce={false} duration={1700}>
              <h2 className="title">Why is the best Soft Trade?</h2>
            </Fade>
          </div>


          <div className="row d-flex  align-items-center justify-content-evenly flex-wrap  hd-feature--top">
            {featuresTop.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
          </div>
          <div className="row d-flex  align-items-center justify-content-evenly flex-wrap  hd-feature--center mb-3">
            {featuresCenter.map((item, index) => (
              <FeatureItem key={index} {...item} />
            ))}
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
