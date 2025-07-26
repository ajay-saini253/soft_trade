import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from '../HomePage/HomePage'
import ContactPage from '../ContactPage/ContactPage';
 import AboutUsPage from '../AboutUsPage/AboutUsPage';
import AwardPage from '../AwardsPage/AwardPage';

 import CareerPage from '../CareerPage/CareerPage';
// import CareerSingle from '../CareerSingle/CareerSingle';
import TeamPage from '../TeamPage/TeamPage';
import TermsPage from '../TermsPage/TermsPage';
import PrivacyPage from '../PrivacyPage/PrivacyPage';
 import BlogPage from '../BlogPage/BlogPage';
import CustomerStories from '../CustomerStories/CustomerStories';
import BlogDetails from '../BlogDetails/BlogDetails';
import Download from '../Download/Download';
import DesktopSoftware from '../DesktopSoftware/DesktopSoftware';



// import ServicePage from '../ServicePage/ServicePage';
// import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
// import PricingPage from '../PricingPage/PricingPage';
// import CaseStudyPage from '../CaseStudyPage/CaseStudyPage';
// import CaseStudySingle from '../CaseStudySingle/CaseStudySingle';
// import PortfolioSingle from '../PortfolioSingle/PortfolioSingle';




const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="desktop-software" element={<DesktopSoftware/>}/>
           <Route path="customer-stories" element={<CustomerStories/>}/>
          <Route path="awards" element={<AwardPage/>}/>
          <Route path="contact" element={<ContactPage />} />
          <Route path="career" element={<CareerPage />} />
          {/*  <Route path="career-details" element={<CareerSingle />} /> */}
           <Route path="team" element={<TeamPage />} />
          <Route path="terms-conditions" element={<TermsPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path='download' element={<Download/>}/>

        
          <Route path="blog-single/:slug" element={<BlogDetails/>} />




          {/* <Route path="service" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="pricing" element={<PricingPage />} />
        
          <Route path="casestudy" element={<CaseStudyPage />} />
          <Route path="casestudy-details/:slug" element={<CaseStudySingle />} />
          <Route path="portfolio_details/:slug" element={<PortfolioSingle />} />

          
           */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
