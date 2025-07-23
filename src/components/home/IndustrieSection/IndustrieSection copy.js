import React, { useState } from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

// Image imports
import sIcon1 from '../../../images/industrie/madical.png';
import sIcon2 from '../../../images/industrie/Footwear.png';
import sIcon3 from '../../../images/industrie/Grocery.png';
import sIcon4 from '../../../images/industrie/Garment.png';
import sIcon5 from '../../../images/industrie/Hardware.png';
import sIcon6 from '../../../images/industrie/Automobile.png';
import sIcon7 from '../../../images/industrie/bookstore.png';
import sIcon8 from '../../../images/industrie/Electronics.png';
import sIcon9 from '../../../images/industrie/Salon.png';
import sIcon10 from '../../../images/industrie/Mobile.png';

const industryData = {
    Retail: [
        { icon: sIcon1, title: 'Pharmacy' },
        { icon: sIcon2, title: 'Footwear' },
        { icon: sIcon3, title: 'Grocery' },
        { icon: sIcon4, title: 'Garment' },
        { icon: sIcon5, title: 'Hardware/Sanitary' },
        { icon: sIcon6, title: 'Automobile' },
        { icon: sIcon7, title: 'Bookstore' },
        { icon: sIcon8, title: 'Electronics' },
        { icon: sIcon9, title: 'Salon & Spa' },
        { icon: sIcon10, title: 'Mobile Store' },
    ],
    Wholesalers: [
        { icon: sIcon3, title: 'Grocery' },
        { icon: sIcon9, title: 'Salon & Spa' },
    ],
    Distribution: [
        { icon: sIcon5, title: 'Hardware/Sanitary' },
        { icon: sIcon6, title: 'Automobile' },
    ]
};
// Slug converter for link paths
const slugify = (text) =>
    text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const IndustrieSection = () => {
    const [activeTab, setActiveTab] = useState('Retail');

    return (
         <section className="industrie m-lr pt-60 pb-50">
            <div className="industrie-wrap sec-bg pos-rel pt-50 pb-100">
                <div className="container">
                    <div className="sec-title--two text-center mb-30">
                        <Fade direction='down' triggerOnce={false} duration={1000}>
                            <h2 className="fw-bold mb-3" style={{ color: "#2a176b" }}>
                                Industries we work
                            </h2>
                        </Fade>
                        <Fade direction='up' triggerOnce={false} duration={1200}>
                            <h3 className="fw-semibold fs-4">
                                Built for <span style={{ color: "#0194dd" }}>Small & Medium Business</span>
                            </h3>
                        </Fade>
                    </div>

                    {/* Tabs */}
                    <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
                        {Object.keys(industryData).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 rounded-pill fw-semibold border-0 text-uppercase ${activeTab === tab ? 'text-white' : 'text-dark'}`}
                                style={{
                                    background: activeTab === tab
                                        // ? 'linear-gradient(90deg, #34b1ff 0%, #9d4dff 100%)'
                                        ?'#2a2e45'
                                        : '#fff',
                                    boxShadow: activeTab === tab ? '0px 4px 12px rgba(0, 0, 0, 0.1)' : 'none',
                                    transition: 'all 0.3s ease-in-out'
                                }}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Industry Items */}
                     <Fade direction='up' triggerOnce={false} duration={1200}>
                    <div className="row gy-4">
                        {industryData[activeTab].map((item, index) => (
                            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 text-center">
                                <Link to={`/industry/${slugify(item.title)}`} className="industries-link">
                                
                                <div className="indus-item bg-white p-3 rounded shadow-sm h-100">
                                    <div className="mb-2">
                                        <img src={item.icon} alt={item.title} className="img-fluid" style={{ maxWidth: '60px' }} />
                                    </div>
                                    <h6 className="mt-2 mb-0">{item.title}</h6>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default IndustrieSection;
