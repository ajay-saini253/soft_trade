
import React, { Fragment } from 'react';
import Header from '../../components/home/header/Header';
import Scrollbar from '../../components/home/scrollbar/scrollbar'
import Footer from '../../components/home/footer/Footer';
import Achievements from './Achievements';
import Awards2 from './Awards2';
import Awards3 from './Awards3';



const AwardPage = (props) => {

    return (
        <Fragment>
            <div className='body_wrap sco_agency'> 
            <Header/>
            <Achievements/>
            <Awards2/>
            <Awards3/>
            <Footer />
            <Scrollbar />
            </div>
        </Fragment>
    )
};
export default AwardPage;