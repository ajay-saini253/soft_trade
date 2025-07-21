import React from 'react';
// import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";

import icon1 from '../../images/icon/tp-work-icon01.svg';
import icon2 from '../../images/icon/tp-work-icon02.svg';
import icon3 from '../../images/icon/tp-work-icon03.svg';
import icon4 from '../../images/icon/tp-work-icon04.svg';
import icon5 from '../../images/icon/tp-work-icon05.svg';
import icon6 from '../../images/icon/tp-work-icon06.svg';
// import iIcon2 from '../../images/icon/sms-white-icon01.svg';

const workItems = [
    {
        id: 1,
        icon: icon1,
        title: 'Endless career growth',
        content: 'We provide lots of career growth opportunities to our employees, which is reflected both financially and reputably.',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Mentorship & learning',
        content: 'We support peer assistance and offer mentorship programs like IT Talks and in-house courses for different roles.',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Cozy & fun offices',
        content: 'Our four R&D offices offer a gym, yoga mats, snacks, foosball, a VR set, and more for a comfortable workspace.',
    },
    {
        id: 4,
        icon: icon4,
        title: 'Competitive salary',
        content: 'Our projects belong to a wide variety of industries, which will make your professional background more diverse.',
    },
    {
        id: 5,
        icon: icon5,
        title: 'Career change option',
        content: 'No need to job hunt to learn new tech or switch roles—we’ll support your transition within Soft Trade.',
    },
    {
        id: 6,
        icon: icon6,
        title: 'Friendly atmosphere',
        content: 'We value people as Soft Trade greatest asset and ensure hierarchy never works against our employees.',
    },
];

const WorkSection = (props) => {
    // const ClickHandler = () => {
    //     window.scrollTo(10, 0);
    // };

    // Group into rows of 2 items
    const groupedItems = [];
    for (let i = 0; i < workItems.length; i += 2) {
        groupedItems.push(workItems.slice(i, i + 2));
    }

    return (
        <section className={`work pb-50 ${props.bg}`}>
            <div className="container">
                <Fade direction="up" triggerOnce={false} duration={1200} delay={200}>
                    <div className="sec-title--two text-center mb-60">
                        <h2 className="title">Why people work with us</h2>
                    </div>
                </Fade>

                <div className="tp-work-wrapp">
                    {groupedItems.map((row, rowIndex) => (
                        <Fade
                            key={rowIndex}
                            direction="up"
                            triggerOnce={false}
                            duration={1000}
                            delay={rowIndex * 300 + 200}
                        >
                            <div className="row ">
                                {row.map((item) => (
                                    <div className="col-lg-6 mt-30" key={item.id}>
                                        <div className="tp-work-item">
                                            <div className="xb-item--inner ul_li">
                                                <div className="xb-item--icon">
                                                    <img src={item.icon} alt={item.title} />
                                                </div>
                                                <div className="xb-item--holder">
                                                    <h3 className="xb-item--title">{item.title}</h3>
                                                    <p className="xb-item--content">{item.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    ))}

                 
                </div>
            </div>
        </section>
    );
};

export default WorkSection;
