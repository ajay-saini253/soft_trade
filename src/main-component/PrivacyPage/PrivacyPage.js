import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
import Bg from '../../images/bg/page_bg01.jpg'
// import CtaSection from '../../components/home/CtaSection/CtaSection';
// import icon from '../../images/icon/magic.svg'
// import gImg1 from '../../images/gallery/cp-img01.jpg'
// import gImg2 from '../../images/gallery/cp-img02.jpg'
// import gImg3 from '../../images/gallery/cp-img03.jpg'
// import gImg4 from '../../images/gallery/cp-img04.jpg'
// import gImg5 from '../../images/gallery/cp-img05.jpg'
// import gImg6 from '../../images/gallery/cp-img06.jpg'
// import { Fade } from "react-awesome-reveal";
import bImg1 from '../../images/hero/contact-img.png';
const PrivacyPage = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                <Header />
                {/* <section className="page-title cp-page-title pt-200 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
                    <div className="container">
                        <div className="page-title-wrap">
                            <div className="row mt-none-30 align-items-center">
                                <div className="col-lg-8 mt-30">
                                    <div className="page-title-box">
                                        <span className="sub-title"><img src={icon} alt="" />Privacy Policy</span>
                                        <h2 className="title">Soft Trade website privacy <br /> policy your access and <br /> usage rights</h2>
                                        <span className="page-update_time">Updated on : December 10th, 2024</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 mt-30">
                                    <div className="cp-img-slide">
                                        <div className="cp-img-inner ul_li">
                                            <div className="cp-item marquee-first">
                                                <div className="xb-img"><img src={gImg1} alt="" /></div>
                                                <div className="xb-img"><img src={gImg2} alt="" /></div>
                                                <div className="xb-img"><img src={gImg3} alt="" /></div>
                                                <div className="xb-img"><img src={gImg1} alt="" /></div>
                                                <div className="xb-img"><img src={gImg2} alt="" /></div>
                                                <div className="xb-img"><img src={gImg3} alt="" /></div>
                                            </div>
                                            <div className="cp-item marquee-2">
                                                <div className="xb-img"><img src={gImg4} alt="" /></div>
                                                <div className="xb-img"><img src={gImg5} alt="" /></div>
                                                <div className="xb-img"><img src={gImg6} alt="" /></div>
                                                <div className="xb-img"><img src={gImg4} alt="" /></div>
                                                <div className="xb-img"><img src={gImg5} alt="" /></div>
                                                <div className="xb-img"><img src={gImg6} alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
               <section className="page-title pt-50 pos-rel bg_img" style={{ backgroundImage: `url(${Bg})` }}>
  <div className="container">
    <div className="page-title-wrap sd-title-wrap">
      <div className="row mt-none-30 align-items-center">
        <div className="col-lg-7 order-2 order-lg-1 py-lg-3 py-3">
          <div className="page-title-box text-center">
            <Fade direction="up" triggerOnce={false} duration={1000} delay={9}>
              <h5 className="title pb-20 wow fadeInUp">
                Privacy, Security, and Trust.
              </h5>
            </Fade>
            <Fade direction="up" triggerOnce={false} duration={1400} delay={9}>
              <span className="wow fadeInUp text-justify">
                At Soft Trade, your privacy is our top priority. This policy explains how we collect, use, and protect your data across all our platforms — including mobile, desktop, cloud, and web ERP solutions.
              </span>
            </Fade>
          </div>
        </div>
        <div className="col-lg-5 py-lg-3 py-3 order-1 order-lg-2">
          <div className="sd-right-img pos-rel">
            <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
              <img className="wow fadeInRight rounded-5" src={bImg1} alt="Soft Trade Privacy Policy Hero" />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="terms&conditions-section cp-det-bg">
  <div className="container">
    <div className="terms-section_inner pt-120 pb-75">
      <div className="row">
        <div className="col-lg-11">

          <div className="item-details-widget">
            <h2 className="item_details_info_title">1. Data Collection</h2>
            <p>We collect personal and technical data to provide and enhance our ERP services. This includes names, emails, business details, device/browser data, and cookies. Information is collected through forms, interactions, and automated tools across mobile, desktop, and web platforms.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">2. Purpose of Data Use</h2>
            <p>We use data for delivering services, managing user accounts, analytics, marketing (with consent), support, and product improvements across our ERP systems.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">3. Legal Basis</h2>
            <p>We process data based on your consent, contractual necessity, legitimate business interest, and compliance with laws like GDPR and India’s IT Act.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">4. Data Sharing</h2>
            <p>Your data is never sold. It may be shared with trusted partners for hosting, analytics, CRM, or support, under strict agreements ensuring protection.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">5. Data Security</h2>
            <p>Soft Trade uses secure cloud storage, firewalls, access control, and encryption to prevent unauthorized access or loss of your data.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">6. Data Retention</h2>
            <p>We retain your data only as long as required for its purpose or by law. You can request deletion or deactivation at any time.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">7. Your Rights</h2>
            <ul className="privacy-details">
              <li>Access the personal data we hold on you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion when data is no longer needed</li>
              <li>Withdraw consent at any time</li>
              <li>Restrict or object to certain data processing</li>
              <li>Request data portability (transfer to another provider)</li>
              <li>File a complaint with a regulatory authority</li>
            </ul>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">8. Cookies & Tracking</h2>
            <p>We use cookies for functionality and analytics. You may opt out through browser settings or manage cookie preferences via our site.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">9. Children’s Data</h2>
            <p>Our services are not intended for individuals under 16. We do not knowingly collect their data. Please contact us if you believe we have done so.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">10. Policy Changes</h2>
            <p>This privacy policy may be updated periodically. Continued use of our services implies acceptance of the current version.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">11. Contact</h2>
            <p>
              Have questions? <Link onClick={ClickHandler} to="/contact" className="details-link">Click here</Link> to contact us.<br />
              Or email us at: <a href="mailto:contact@softtrade.com">contact@softtrade.com</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
                {/* <CtaSection cClassNamclassName={'bg'} /> */}
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default PrivacyPage;
