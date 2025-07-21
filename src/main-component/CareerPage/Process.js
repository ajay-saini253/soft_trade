import React, { useState } from 'react';
// import hicon from '../../images/icon/magic.svg';
import rImg from '../../images/process/cp-img.png';
import { Fade } from "react-awesome-reveal";
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const Process = () => {

    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <section className="process  pt-50 pb-50" style={{background:"#f6f6f8"}}>
            <div className="container">
                <div className="row align-items-center mt-none-30">
                    <div className="col-lg-6 mt-30">
                        <div className="faq">
                            <div className="container">
                                <div className="sec-title--two mb-50">
                                    <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                                        <div>
                                            <h2 className="title wow fadeInDown" data-wow-delay="150ms" data-wow-duration="600ms">
                                                Soft Trade Hiring Process
                                            </h2>
                                        </div>
                                    </Fade>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="xb-faq cp-faq wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                                            <Accordion open={open} toggle={toggle} className='accordion_box clearfix list-unstyled'>
                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="1" className='acc-btn'>
                                                        <span className="number">01</span> _Apply to Soft Trade
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="1" className='acc_body'>
                                                        <div className="content">
                                                            <p>Submit your CV or LinkedIn profile to apply for your preferred position. We're excited to learn about your talents.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>

                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="2" className='acc-btn'>
                                                        <span className="number">02</span> _Application Review
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="2" className='acc_body'>
                                                        <div className="content">
                                                            <p>Our team will review your profile to match your skills with current opportunities at Soft Trade. If shortlisted, we’ll get in touch soon.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>

                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="3" className='acc-btn'>
                                                        <span className="number">03</span> _Technical & HR Interview
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="3" className='acc_body'>
                                                        <div className="content">
                                                            <p>Engage with our technical experts and HR team to discuss your expertise, values, and alignment with Soft Trade’s mission.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>

                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="4" className='acc-btn'>
                                                        <span className="number">04</span> _Task or Assignment
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="4" className='acc_body'>
                                                        <div className="content">
                                                            <p>If applicable, complete a short practical task to help us assess your problem-solving skills and approach to real-world challenges.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>

                                                <AccordionItem className='block'>
                                                    <AccordionHeader targetId="5" className='acc-btn'>
                                                        <span className="number">05</span> _Welcome to Soft Trade!
                                                        <span className="arrow"></span>
                                                    </AccordionHeader>
                                                    <AccordionBody accordionId="5" className='acc_body'>
                                                        <div className="content">
                                                            <p>Once selected, we’ll finalize your onboarding. Get ready to grow your career with a passionate team building top-tier ERP solutions.</p>
                                                        </div>
                                                    </AccordionBody>
                                                </AccordionItem>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 mt-30">
                        <div className="cp-process">
                            <div className="xb-img">
                                <img src={rImg} alt="Soft Trade hiring illustration" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
