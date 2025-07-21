import React from 'react';
import CountUp from 'react-countup';


const FunfactSection = (props) => {

    return (
        <section className="fanfact pt-50 pb-50">
            <div className="container">
                <div className="row mt-none-30">
                    <div className="col-lg-3 col-md-3 col-sm-6 mt-30">
                        <div className="ap-fanfact-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                            <h2 className="xb-item--number"><CountUp end={120} enableScrollSpy />+</h2>
                            <span className="xb-item--text">success stories</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mt-30">
                        <div className="ap-fanfact-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
                            <h2 className="xb-item--number"><CountUp start={400}  end={500} enableScrollSpy />+</h2>
                            <span className="xb-item--text">Customer</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mt-30">
                        <div className="ap-fanfact-item ap-fanfact-item--middle wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
                            <h2 className="xb-item--number"><CountUp end={1.2} enableScrollSpy />k</h2>
                            <span className="xb-item--text">companies trust us</span>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 mt-30">
                        <div className="ap-fanfact-item ap-fanfact-item--last wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
                            <h2 className="xb-item--number"><CountUp end={100} enableScrollSpy />%</h2>
                            <span className="xb-item--text">results guaranteed</span>
                        </div>
                    </div>
                </div>
            </div>
            <span id="counter" className='d-none' />
        </section>
    );
}

export default FunfactSection;