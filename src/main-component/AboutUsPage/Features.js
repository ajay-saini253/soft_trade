import React from 'react';
import sIcon1 from '../../images/icon/ab-page-icon01.svg'
import sIcon2 from '../../images/icon/ab-page-icon02.svg'
import sIcon3 from '../../images/icon/ab-page-icon03.svg'
import sIcon4 from '../../images/icon/ab-page-icon04.svg'


const FeaturesSection = (props) => {
    return (
     <section className="fanfact pt-125 pb-125">
  <div className="container">
    <div className="ap-feature_wrap">
      <div className="row about_feature g-4 mt-0">

        <div className="col-lg-3 col-md-6 mt-30  about_feature_section">
          <div className="ap-feature-item wow fadeInUp" data-wow-delay="0ms" data-wow-duration="600ms">
            <div className="xb-item--icon">
              <img src={sIcon1} alt="Centralized ERP Icon" />
            </div>
            <h4 className="xb-item--title">Centralized Control</h4>
            <p className="xb-item--content">
              Manage finance, inventory, sales, and HR from a unified, cloud-based ERP dashboard.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-30  about_feature_section">
          <div className="ap-feature-item wow fadeInUp" data-wow-delay="100ms" data-wow-duration="600ms">
            <div className="xb-item--icon">
              <img src={sIcon2} alt="Automation Icon" />
            </div>
            <h4 className="xb-item--title">Process Automation</h4>
            <p className="xb-item--content">
              Automate routine tasks like invoicing, reporting, and inventory updates to save time and reduce errors.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-30  about_feature_section">
          <div className="ap-feature-item wow fadeInUp" data-wow-delay="200ms" data-wow-duration="600ms">
            <div className="xb-item--icon">
              <img src={sIcon3} alt="Scalability Icon" />
            </div>
            <h4 className="xb-item--title">Scalable Architecture</h4>
            <p className="xb-item--content">
              From startups to large enterprises, our ERP adapts to your growing business needs—without rework.
            </p>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 mt-30  about_feature_section">
          <div className="ap-feature-item wow fadeInUp" data-wow-delay="300ms" data-wow-duration="600ms">
            <div className="xb-item--icon">
              <img src={sIcon4} alt="Data Insight Icon" />
            </div>
            <h4 className="xb-item--title">Real-Time Insights</h4>
            <p className="xb-item--content">
              Make smarter decisions with live dashboards, advanced analytics, and predictive reporting.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


    );
}

export default FeaturesSection;