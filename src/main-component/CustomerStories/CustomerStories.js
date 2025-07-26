import React, { Fragment } from 'react';
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
import Testimonial from './Testimonial';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Testimonial2';
// import Testimonial3 from './Testimonial3';
import TestimonialHero from './TestimonialHero';
import TopBar from '../../components/home/TopBar/TopBar';

export default function CustomerStories() {
   
    return (
         <Fragment>
            <div className='body_wrap sco_agency'>
                <TopBar/>
                <Header />
                <TestimonialHero/>
                <Testimonial/>
                <Testimonial2/>
                <Testimonial1/>
                {/* <Testimonial3/> */}
    
                

            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
}
