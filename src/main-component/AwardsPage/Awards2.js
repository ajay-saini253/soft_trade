import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import sIcon2 from '../../images/icon/arrow-black.png';
import Icon1 from '../../images/icon/int-icon01.png';
import Icon2 from '../../images/icon/int-icon02.png';
import Icon3 from '../../images/icon/int-icon03.png';
import Icon4 from '../../images/icon/int-icon04.png';
import Icon8 from '../../images/icon/int-icon08.png';
import Icon9 from '../../images/icon/int-icon09.png';
import Icon10 from '../../images/icon/int-icon10.png';
import Icon11 from '../../images/icon/int-icon11.png';
import Icon12 from '../../images/icon/int-icon12.png';
import Icon13 from '../../images/icon/int-icon13.png';
import Icon14 from '../../images/icon/int-icon14.png';

const Awards2 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    return (
        <section id="integration" className="integration pt-50 pb-50">
            <div className="container">
                <div className="award-top align-items-end mb-10">
                    <div className="sec-title--two sec-title--three mb-30">
                        <Fade direction='up' triggerOnce={false} duration={1200} delay={9}>
                            <div>
                                <h2 className="title wow skewIn py-4 text-black text-center">
                                    Soft Trade ERP Integrates With
                                </h2>
                            </div>
                        </Fade>
                    </div>
                </div>

                <div className="row">
                    {/* Left */}
                    <div className="col-lg-4 col-md-6">
                        <div className="integration-left ul_li_between flex-nowrap">
                            <div className="intgration-item--one pos-rel">
                                <div className="integration-inner marquee-first">
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon1} alt="" /></div><span className="xb-title">Inventory Management</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon2} alt="" /></div><span className="xb-title">CRM Integration</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon3} alt="" /></div><span className="xb-title">Accounting Software</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon4} alt="" /></div><span className="xb-title">HRM Systems</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon1} alt="" /></div><span className="xb-title">Inventory Management</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon2} alt="" /></div><span className="xb-title">CRM Integration</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon3} alt="" /></div><span className="xb-title">Accounting Software</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon4} alt="" /></div><span className="xb-title">HRM Systems</span></div>
                                </div>
                            </div>

                            <div className="intgration-item--two pos-rel">
                                <div className="integration-inner marquee-2">
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon1} alt="" /></div><span className="xb-title">Barcode Scanners</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon2} alt="" /></div><span className="xb-title">Customer Portal</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon3} alt="" /></div><span className="xb-title">Expense Tracking</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon1} alt="" /></div><span className="xb-title">Barcode Scanners</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon2} alt="" /></div><span className="xb-title">Customer Portal</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon3} alt="" /></div><span className="xb-title">Expense Tracking</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Middle */}
                    <div className="col-lg-4 col-md-6">
                        <div className="integration-middle">
                            <div className="xb-inner">
                                <div className="sec-title--two sec-title--four">
                                    <div className=""><h1 className="py-4">Integrations</h1></div>
                                    <h2 className="text-muted">Essential tools connected with Soft Trade ERP</h2>
                                </div>
                                <div className="xb-btn mt-40">
                                    <Link onClick={ClickHandler} to="/pricing" className="thm-btn thm-btn--three thm-btn--black">
                                        Start Free Trial
                                        <span>
                                            <img className="img--one" src={sIcon2} alt="" />
                                            <img className="img--two" src={sIcon2} alt="" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="col-lg-4 col-md-6">
                        <div className="integration-right ul_li_between flex-nowrap">
                            <div className="intgration-item--two pos-rel">
                                <div className="integration-inner marquee-first">
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon8} alt="" /></div><span className="xb-title">Slack / Teams</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon9} alt="" /></div><span className="xb-title">E-commerce Platforms</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon10} alt="" /></div><span className="xb-title">Zoom / Meet</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon8} alt="" /></div><span className="xb-title">Slack / Teams</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon9} alt="" /></div><span className="xb-title">E-commerce Platforms</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon10} alt="" /></div><span className="xb-title">Zoom / Meet</span></div>
                                </div>
                            </div>

                            <div className="intgration-item--one pos-rel">
                                <div className="integration-inner marquee-2">
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon11} alt="" /></div><span className="xb-title">Cloud Backup</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon12} alt="" /></div><span className="xb-title">GST Filing Tools</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon13} alt="" /></div><span className="xb-title">WhatsApp API</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon14} alt="" /></div><span className="xb-title">Excel / Sheets</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon11} alt="" /></div><span className="xb-title">Cloud Backup</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon12} alt="" /></div><span className="xb-title">GST Filing Tools</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon13} alt="" /></div><span className="xb-title">WhatsApp API</span></div>
                                    <div className="integration-item"><div className="xb-icon"><img src={Icon14} alt="" /></div><span className="xb-title">Excel / Sheets</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards2;
