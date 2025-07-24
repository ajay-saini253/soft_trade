import React, { Fragment } from 'react';
import Header from '../../components/home/header/Header';
import Hero from '../../components/home/hero/hero';
import PartnerSection from '../../components/home/PartnerSection';
// import About from '../../components/home/about/about';
// import ProjectSection from '../../components/home/ProjectSection/ProjectSection';
// import ProjectSection2 from '../../components/home/ProjectSection/ProjectSection2';

// import WorkProcess from '../../components/home/WorkProcess/WorkProcess';
import IndustrieSection from '../../components/home/IndustrieSection/IndustrieSection';
// import PastWork from '../../components/home/PastWork/pastWork';
import Footer from '../../components/home/footer/Footer';
import Scrollbar from '../../components/home/scrollbar/scrollbar';

// import ContactSection from '../../components/home/ContactSection';
import InvestmentSection from '../../components/home/InvestmentSection/InvestmentSection';
import BlogSection from '../../components/home/BlogSection/BlogSection';
// import CaseStudySection from '../../components/home/CaseStudyPage/CaseSection';
import ValuesSection from '../../components/home/ValuesSection/ValuesSection';
// import ProjectSection3 from '../../components/home/ProjectSection/ProjectSection3';
import WebBaseERP from '../../components/home/PastWork/WebBasedERP';
import CustomERP from '../../components/home/CustomERP/customERP';
import TopBar from '../../components/home/TopBar/TopBar';
import DesktopERP from '../../components/home/PastWork/DesktopERP';
// import BlurSlider from '../../components/home/PastWork/homes';


const HomePage = () => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'>
                 <TopBar/>
                <Header />
                <main className="page_content">
                    {/* <BlurSlider/> */}
                   
                    <Hero />
                  
                    {/* <About /> */}
                    <DesktopERP/>
                    <WebBaseERP/>
                    {/* <CaseStudySection/> */}
                    {/* <ProjectSection /> */}
                    {/* <ProjectSection2 /> */}
                    {/* <ProjectSection3/> */}
                    <ValuesSection/>
                    <IndustrieSection />
                    <PartnerSection />
                    {/* <WorkProcess />      */}
                    <CustomERP/>     
                    {/* <PastWork />      */}
                    
                    <BlogSection/>                
                    <InvestmentSection/>
                    {/* <ContactSection/> */}
                    
                </main>
                <Footer />
                <Scrollbar />
            </div>
        </Fragment>
    )
};
export default HomePage;