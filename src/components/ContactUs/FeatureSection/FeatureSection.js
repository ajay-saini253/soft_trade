import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
// import icon from '../../../images/icon/magic-black.svg';
import icon1 from '../../../images/feature/img02.png';
import icon2 from '../../../images/feature/img01.png';

const FeatureSection = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

 const accordionData = [
  {
    title: "Improve time to value",
    content:
      "Soft Trade ERP accelerates deployment with ready-to-use modules for inventory, sales, finance, and HR. Businesses can go live faster and start seeing operational benefits in days—not months."
  },
  {
    title: "Reduce effort per ticket",
    content:
      "ERP automates repetitive tasks like invoicing, order processing, and reporting. Teams spend less time on manual data entry and more on strategic tasks, reducing workload across departments."
  },
  {
    title: "Keep costs low",
    content:
      "With a centralized platform, Soft Trade ERP reduces the need for multiple disconnected systems. Automation cuts operational overhead, minimizes errors, and helps avoid costly delays or rework."
  },
  {
    title: "Boost Customer Satisfaction",
    content:
      "By streamlining order management, inventory tracking, and after-sales support, Soft Trade ERP helps businesses respond faster to customer needs—resulting in higher trust and satisfaction."
  }
];


    return (
        <section className="feature pb-100 pt-100" style={{ background: "rgb(254, 250, 242)" }}>
            <div className="container">
                <div className="feature-wrap">
                    <div className="row align-items-center mt-none-30">
                        <div className="col-lg-6 mt-30">
                            <div className="feature-left-item pos-rel">
                                <div className="xb-img"><img src={icon1} alt="Feature Visual 1" /></div>
                                <div className="xb-img-two"><img className="updown-2" src={icon2} alt="Feature Visual 2" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-30">
                            <div className="feature-right-item mt-30">
                                <div className="sec-title--two sec-title--four mb-40">
                                    <Fade direction='down' triggerOnce={false} duration={1500} delay={9}>
                                        <div>
                                            <h2 className="title mb-15">How Can Soft Trade Help?</h2>
                                        </div>
                                    </Fade>
                                   <p>Save time, reduce operational costs, and boost productivity with Soft Trade ERP. Businesses have reported faster workflows, improved accuracy, and significant ROI within the first year of implementation.</p>
                                 </div>
                                <div className="xb-faq xb-faq-two">
                                    <ul className="accordion_box clearfix list-unstyled">
                                        {accordionData.map((item, index) => (
                                            <li
                                                className={`accordion block ${activeIndex === index ? "active-block" : ""}`}
                                                key={index}
                                            >
                                                <div
                                                    className={`acc-btn ${activeIndex === index ? "active" : ""}`}
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    {item.title}
                                                    <span className="arrow"></span>
                                                </div>
                                                <div
                                                    className={`acc_body ${activeIndex === index ? "current" : ""}`}
                                                    style={{
                                                        display: activeIndex === index ? "block" : "none",
                                                    }}
                                                >
                                                    <div className="content">
                                                        <p>{item.content}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;
