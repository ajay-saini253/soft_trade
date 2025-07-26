import React from 'react';
const Trusted = () => {
  return (
     <section className="trusted-customer-section py-5">
                        <div className="container trustrd-customer-container p-5">
                            <h2 className="trusted-customer-heading text-center">
                               
                                 Pillar for <span className="yllow_txt">thousands of users</span> across the globe.
                            </h2>

                            <div className="row trusted-customer-box text-center">
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item1">
                                    <h3 className="trusted-customer-number">3000+</h3>
                                    <p className="trusted-customer-label">Customer</p>
                                </div>
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item2">
                                    <h3 className="trusted-customer-number">250+</h3>
                                    <p className="trusted-customer-label">Cities Covered</p>
                                </div>
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item3">
                                    <h3 className="trusted-customer-number">10 lac + </h3>
                                    <p className="trusted-customer-label">Eway / E Invoice made  per year</p>
                                </div>
                                <div className="col-6 col-md-3 trusted-customer-item trusted-customer-item4">
                                    <h3 className="trusted-customer-number">50+</h3>
                                    <p className="trusted-customer-label">customized application</p>
                                </div>
                            </div>
                        </div>
                    </section>
  );
}

export default Trusted;
