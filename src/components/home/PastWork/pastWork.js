import { useRef } from 'react';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';

import tImg1 from '../../../images/pastWork/Frame1.png';
import tImg2 from '../../../images/pastWork/Frame4.png';
import tImg3 from '../../../images/pastWork/Frame3.png';
import tImg4 from '../../../images/pastWork/Frame1.png';

import icon1 from '../../../images/pastWork/tes-logo02.png';
import icon2 from '../../../images/pastWork/tes-logo01.png';
import icon3 from '../../../images/pastWork/tes-logo03.png';
import icon4 from '../../../images/pastWork/tes-logo04.png';
import icon5 from '../../../images/pastWork/tes-logo05.png';

const PastWorks = [
    {
        id: '01',
        tImg: tImg1,
        logo: icon1,
        Des: "Working with Soft Trade was fantastic! Their strategies improved our rankings and increased leads.",
        Name: 'Better Inventory',
        sub: 'Management',
    },
    {
        id: '02',
        tImg: tImg2,
        logo: icon2,
        Des: "Soft Trade exceeded all our expectations! Their expertise in SEO helped us achieve a remarkable 150%",
        Name: 'Simple',
        sub: 'Invoicing',
    },
    {
        id: '03',
        tImg: tImg3,
        logo: icon3,
        Des: "Choosing Soft Trade was a great decision. Their focus on trends helped us rank for competitive keywords.",
        Name: 'Quick',
        sub: 'Payments',
    },
    {
        id: '04',
        tImg: tImg4,
        logo: icon4,
        Des: "Since partnering with Soft Trade, our website's performance has improved remarkably.",
        Name: 'Regular',
        sub: 'Updates',
    },
    {
        id: '05',
        tImg: tImg1,
        logo: icon5,
        Des: "Since partnering with Soft Trade, our website's performance has improved remarkably.",
        Name: 'Jessica Martine',
        sub: 'Project Manager at Kuda',
    },
    {
        id: '06',
        tImg: tImg4,
        logo: icon2,
        Des: "Soft Trade exceeded all our expectations! Their expertise in SEO helped us achieve a remarkable 150%",
        Name: 'Sarah Davis',
        sub: 'Branding at Spinlet',
    },
    {
        id: '07',
        tImg: tImg4,
        logo: icon4,
        Des: "Since partnering with Soft Trade, our website's performance has improved remarkably.",
        Name: 'Regular',
        sub: 'Updates',
    },
    {
        id: '08',
        tImg: tImg1,
        logo: icon5,
        Des: "Since partnering with Soft Trade, our website's performance has improved remarkably.",
        Name: 'Jessica Martine',
        sub: 'Project Manager at Kuda',
    },
    {
        id: '09',
        tImg: tImg4,
        logo: icon2,
        Des: "Soft Trade exceeded all our expectations! Their expertise in SEO helped us achieve a remarkable 150%",
        Name: 'Sarah Davis',
        sub: 'Branding at Spinlet',
    },
];

const PastWork = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    return (
        <section
            className={`pastwork testimonial o-hidden pt-80 pb-40 ${props.tClass}`}
            style={{
                background: 'linear-gradient(0.23deg, #FFFFFF 35.62%, #E2EEFF 74.81%)',
                color: '#000',
            }}
        >
            <div className="container">
                <div className="sa-tes_top pos-rel mb-60">
                    <div className="sec-title--two">
                        <Fade direction='up' triggerOnce={true} duration={1200}>
                            <div>
                                <h2 className="title">Simple &gt; Efficient &gt; Stress-Free</h2>
                                <p className="mt-4">
                                    At SoftTrade Infotech Pvt. Ltd., we believe powerful technology shouldn’t be complicated.
                                    <br />
                                    That’s why our ERP solutions are built with one goal in mind: to make your business operations Simple, Efficient, and Stress-Free.
                                </p>
                            </div>
                        </Fade>
                    </div>
                    <div className="sa-tes_button">
                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}>
                            <i className="fal fa-angle-left"></i>
                        </div>
                        <div className="sa-swiper-btn swiper-button-next" ref={nextRef}>
                            <i className="fal fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sa-testimonial-slider">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    loop={true}
                    speed={300}
                    centeredSlides={true}
                    slidesPerView={4}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                        if (prevRef.current && nextRef.current) {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }
                    }}
                    breakpoints={{
                        1600: { slidesPerView: 5 },
                        1200: { slidesPerView: 5 },
                        992: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        0: { slidesPerView: 1 },
                    }}
                >
                    {PastWorks.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="sa-testimonial-item">
                                <div className="xb-item--inner">
                                    <div className="xb-item--quta">
                                        <img src={item.tImg} alt={`Testimonial from ${item.Name}`} />
                                    </div>
                                    <div className="xb-item--holder ul_li">
                                        <div className="xb-item--author">
                                            <img src={item.logo} alt="Client logo" className="testimonial-logo mb-2" style={{ maxWidth: 60 }} />
                                            <Link to="#">
                                                <h3 className="xb-item--name fs-5">{item.Name}</h3>
                                                <h4 className="xb-item--sub fs-6">{item.sub}</h4>
                                            </Link>
                                            <p className="testimonial-description mt-2">{item.Des}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PastWork;
