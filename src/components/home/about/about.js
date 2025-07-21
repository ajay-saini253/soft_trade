import React, { useState } from 'react';
import about1 from '../../../images/about/img-01.png';
import about2 from '../../../images/about/img-02.png';
import about3 from '../../../images/about/img-03.png';
import aIcon1 from '../../../images/about/black_icon_1.png';
import aIcon2 from '../../../images/about/black_icon_2.png';
import aIcon3 from '../../../images/about/black_icon_3.png';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const aboutItems = [
    {
      img: about1,
      icon: aIcon1,
      heading: 'About us',
      content:
        'At SoftTrade Infotech Pvt. Ltd, we specialize in smart software solutions for retail, wholesale, and distribution businesses. With a focus on automation, efficiency, and growth, we help businesses streamline operations and stay ahead of the competition.',
    },
    {
      img: about2,
      icon: aIcon2,
      heading: 'Our mission',
      content:
        'To deliver cutting-edge technology solutions that simplify, optimize, and scale retail, wholesale, and distribution operations — driving measurable success for every client.',
    },
    {
      img: about3,
      icon: aIcon3,
      heading: 'Our vision',
      content:
        'To be a globally trusted technology partner enabling digital transformation for commerce-based businesses — where growth is powered by innovation, automation, and data-driven decision-making.',
    },
  ];

  return (
    <section className="about pt-50 pb-50" >
      <div className="container">
        <div className="about-wrap mt-none-30 ul_li_between">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={`about-item mt-30 xb-mouseenter wow fadeInUp ${activeIndex === index ? 'active' : ''}`}
              data-wow-delay={`${index * 150}ms`}
              data-wow-duration="600ms"
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <div>
                <div className="xb-item--img">
                  <img src={item.img} alt="" />
                </div>
                <h3 className="xb-item--heading text-black">
                  <span>
                    <img src={item.icon} alt="" />
                  </span>
                  {item.heading}
                </h3>
                <div className="xb-item--holder">
                  <h3 className="xb-item--title text-black">
                    <span>
                      <img src={item.icon} alt="" />
                    </span>
                    {item.heading}
                  </h3>
                  <p className="xb-item--content text-black">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
