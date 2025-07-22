import React from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";

const ClickHandler = () => {
  window.scrollTo(10, 0);
}

const TopBar = () => {
  return (
    <div className="topbar  text-white">
      <Marquee speed={50} gradient={false} className="py-2">
        <Link 
          onClick={ClickHandler} 
          to="/contact" 
          className="text-black text-decoration-none fs-6"
        >
          Retailgraph has now been rebranded as Soft Trade. All features & videos are applicable on Soft Trade according to version - Basic, Standard Or Enterprise.
        </Link>
        <Link onClick={ClickHandler} to="/contact" className="fs-6 ms-3 topbar_btn1">Know More </Link>
         {/* <Link onClick={ClickHandler} to="/contact" className=" topbar_btn ms-3 me-3">Know More </Link> */}
        
         </Marquee>
    </div>
  );
}

export default TopBar;
