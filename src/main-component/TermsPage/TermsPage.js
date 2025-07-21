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
import bImg1 from '../../images/hero/contact-img.png';

const TermsPage = (props) => {

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
                                        <span className="sub-title"><img src={icon} alt="" />Terms & Conditions</span>
                                        <h2 className="title">Soft Trade website terms & <br /> conditions your access and <br /> usage rights</h2>
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
              <h5 className="title pb-20 wow fadeInUp">Terms of Use & Legal Notice</h5>
            </Fade>
            <Fade direction="up" triggerOnce={false} duration={1400} delay={9}>
              <span className="wow fadeInUp text-justify">
                These Terms and Conditions govern the use of all services, content, and software provided by Soft Trade across mobile, desktop, and web platforms. Please read them carefully before using our site.
              </span>
            </Fade>
          </div>
        </div>
        <div className="col-lg-5 py-lg-3 py-3 order-1 order-lg-2">
          <div className="sd-right-img pos-rel">
            <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
              <img className="wow fadeInRight rounded-5" src={bImg1} alt="Soft Trade Terms & Conditions Hero" />
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
            <h2 className="item_details_info_title">1. Copyright and Intellectual Property</h2>
            <p>All content on this website—including text, graphics, logos, and trademarks—is the property of Soft Trade or its licensors, protected by intellectual property laws. Unauthorized use or duplication may lead to legal action. Third-party logos and content are owned by their respective entities.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">2. Website Usage Terms</h2>
            <p>By using our site, you agree not to reproduce, distribute, or alter any content without written permission. You must not use our content for unlawful, abusive, or defamatory purposes. Unsolicited marketing through contact details listed on this site is strictly prohibited.</p>
            <p>We may link to third-party websites for convenience. However, Soft Trade is not responsible for their content or privacy practices. Use them at your own risk.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">3. Software and Services</h2>
            <p>Our ERP solutions are delivered on an "as-is" and "as-available" basis. Specific agreements, including pricing and licensing, are governed by separate contracts. Use of our services implies your agreement to the applicable terms and conditions.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">4. Personal Information</h2>
            <p>Soft Trade values your privacy and processes personal information according to our <Link onClick={ClickHandler} to="/privacy-policy" className="details-link">Privacy Policy</Link>. We encourage you to review it for more details about how we collect, use, and protect your data.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">5. Disclaimer</h2>
            <p>The information provided on this website is for general informational purposes only. While we strive for accuracy, Soft Trade makes no guarantees of completeness, accuracy, or usefulness. We disclaim all liability for errors or omissions in the content.</p>
            <p>Use of this website is at your own risk. We are not liable for damages resulting from use, inability to use, or reliance on any content or services.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">6. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Soft Trade is not liable for any indirect, incidental, or consequential damages—whether in contract or tort—including loss of data, revenue, or profits. This limitation may not apply in jurisdictions that prohibit certain exclusions.</p>
          </div>

          <div className="item-details-widget">
            <h2 className="item_details_info_title">7. Contact Information</h2>
            <p>
              <Link onClick={ClickHandler} to="/contact" className="details-link">Click here</Link> to contact us regarding these Terms or for legal concerns. <br />
              You can also email us at: <a href="mailto:contact@softtrade.com">contact@softtrade.com</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

                {/* <CtaSection cClass={'bg'}/> */}
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermsPage;
