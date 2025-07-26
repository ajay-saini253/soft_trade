import React, { Fragment } from 'react';
import Header from '../../components/home/header/Header';
import Footer from '../../components/home/footer/Footer';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import TopBar from '../../components/home/TopBar/TopBar';
import HeroDownload from './HeroDownload';

const Download = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <TopBar />
                <Header />
                <main className="page_content">
                    <HeroDownload />
                    <section className="trusted-customer-section py-5">
                        <div className="container trustrd-customer-container p-5">
                            <h2 className="trusted-customer-heading text-center mb-5">
                                Backbone for <span className="yllow_txt">thousands of customers & partners</span> across the world.
                            </h2>

                            <div className="row trusted-customer-box text-center">
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item1">
                                    <h3 className="trusted-customer-number">80+</h3>
                                    <p className="trusted-customer-label">Industries Served</p>
                                </div>
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item2">
                                    <h3 className="trusted-customer-number">35,000+</h3>
                                    <p className="trusted-customer-label">Delighted clients worldwide</p>
                                </div>
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item3">
                                    <h3 className="trusted-customer-number">600+</h3>
                                    <p className="trusted-customer-label">Nationwide Partners</p>
                                </div>
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item4">
                                    <h3 className="trusted-customer-number">500+</h3>
                                    <p className="trusted-customer-label">Senior & Expert Team</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default Download;