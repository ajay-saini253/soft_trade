import { useRef, useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Fade } from "react-awesome-reveal";
import 'swiper/css';
import 'swiper/css/navigation';

import tImg1 from '../../images/testimonial/sa-tas05.png';
import tImg2 from '../../images/testimonial/sa-tas01.png';
import tImg3 from '../../images/testimonial/sa-tas02.png';
import tImg4 from '../../images/testimonial/sa-tas03.png';

import icon1 from '../../images/testimonial/tes-logo02.png';
import icon2 from '../../images/testimonial/tes-logo01.png';
import icon3 from '../../images/testimonial/tes-logo03.png';
import icon4 from '../../images/testimonial/tes-logo04.png';
import icon5 from '../../images/testimonial/tes-logo05.png';

import quote from '../../images/icon/quta.png';

const testimonial = [
    {
        id: '01',
        tImg: tImg1,
        logo: icon1,
        Des: "Soft Trade streamlined our operations with their Cloud ERP. We've reduced manual tasks by 60% and improved team collaboration.",
        Name: 'Ankur Sharma',
        sub: 'COO at FastCart Logistics',
    },
    {
        id: '02',
        tImg: tImg2,
        logo: icon2,
        Des: "Their mobile ERP solution empowered our on-ground team. Real-time tracking and reporting changed the way we work.",
        Name: 'Richa Mehta',
        sub: 'Field Operations, AgroMart',
    },
    {
        id: '03',
        tImg: tImg3,
        logo: icon3,
        Des: "Soft Trade helped us transition from outdated tools to a powerful, centralized Web ERP. Everything is now seamless.",
        Name: 'Tarun Kapoor',
        sub: 'IT Head at BizzCorp',
    },
    {
        id: '04',
        tImg: tImg4,
        logo: icon4,
        Des: "We trusted Soft Trade for our custom CRM integration. The support and adaptability were outstanding.",
        Name: 'Neha Joshi',
        sub: 'Sales Lead at GreenLeaf',
    },
    {
        id: '05',
        tImg: tImg3,
        logo: icon5,
        Des: "Their cloud-based ERP gave us access anywhere, anytime. It’s the backbone of our daily workflow now.",
        Name: 'Vikram Desai',
        sub: 'Founder at MarketGenix',
    },
    {
        id: '06',
        tImg: tImg2,
        logo: icon2,
        Des: "Soft Trade’s team truly understands business needs. Their scalable ERP helped us grow efficiently.",
        Name: 'Priya Anand',
        sub: 'Director at EduSmart',
    },
];

const Testimonial = (props) => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && prevRef.current && nextRef.current) {
            swiperRef.current.params.navigation.prevEl = prevRef.current;
            swiperRef.current.params.navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    return (
        <section className={`testimonial o-hidden pt-50 pb-50 ${props.tClass}`} style={{ background: "#2f5ebc0d" }}>
            <div className="container">
                <div className="sa-tes_top pos-rel mb-60">
                    <div className="sec-title--two">
                        <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                            <div>
                                <h2 className="title">What Our Clients Say</h2>
                            </div>
                        </Fade>
                        <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                            <div>
                                <p className="my-3">Discover how Soft Trade’s ERP and software solutions are transforming businesses across industries.</p>
                            </div>
                        </Fade>
                    </div>
                    <div className="sa-tes_button">
                        <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}><i className="fal fa-angle-left"></i></div>
                        <div className="sa-swiper-btn active swiper-button-next" ref={nextRef}><i className="fal fa-angle-right"></i></div>
                    </div>
                </div>
            </div>
            <div className="sa-testimonial-slider-inner">
                <div className="sa-testimonial-slider">
                    <div className="swiper-wrapper">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={50}
                            slidesPerView={5}
                            loop={true}
                            speed={1800}
                            parallax={true}
                            ref={swiperRef}
                            breakpoints={{
                                1600: { slidesPerView: 5 },
                                768: { slidesPerView: 3 },
                                576: { slidesPerView: 2 },
                                0: { slidesPerView: 1 },
                            }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {testimonial.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className="sa-testimonial-item">
                                        <div className="xb-item--inner">
                                            <div className="xb-item--quta">
                                                <img src={quote} alt="quote" />
                                            </div>
                                            <p className="xb-item--content">"{item.Des}"</p>
                                            <div className="xb-item--holder ul_li">
                                                <div className="xb-item--avatar">
                                                    <img src={item.tImg} alt={item.Name} />
                                                </div>
                                                <div className="xb-item--author">
                                                    <h3 className="xb-item--name">{item.Name}</h3>
                                                    <span className="xb-item--desig">{item.sub}</span>
                                                    <div className="xb-item--logo">
                                                        <img src={item.logo} alt="company logo" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
