import React, { useState, useEffect, useCallback } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

// import icon2 from '../../../images/icon/m_01.svg';
// import icon3 from '../../../images/icon/m_02.svg';
// import icon4 from '../../../images/icon/m_03.svg';
// import icon5 from '../../../images/icon/m_04.svg';
import logo from '../../../images/logo/softtrade-infotech-pvt-ltd-ambab.webp';
import logo2 from '../../../images/logo/softtrade-infotech-pvt-ltd-ambab.webp';
// import clogo1 from '../../../images/logo/client-logo.svg';
// import clogo2 from '../../../images/logo/client-logo2.svg';
// import avatar from '../../../images/bg/avatar.png';
// import quote from '../../../images/icon/quote.png';
import MobileMenu from '../MobileMenu/MobileMenu';

// ✅ Replace these with your actual image paths
import aboutImg from '../../../images/header/About Us.png';
import customerImg from '../../../images/header/Customer Stories.png';
import awardsImg from '../../../images/header/Awards & Achievements.png';
import careerImg from '../../../images/header/Career & Job.png';

const Header = () => {
  const [mobileActive, setMobileActive] = useState(false);
  const [isSticky, setSticky] = useState(false);
  // const [selectedAbout, setSelectedAbout] = useState('about');
  // const [selectedResources, setSelectedResources] = useState('training');

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const clickHandler = () => window.scrollTo(10, 0);
  // const submitHandler = (e) => e.preventDefault();

  const aboutMenuContent = {
    about: {
      title: 'About Us',
      heading: 'About Soft Trade',
      image: aboutImg,
      link: '/about',
    },
    customer: {
      title: 'Customer Stories',
      heading: 'Trusted by Customers',
      image: customerImg,
      link: '/customer-stories',
    },
    awards: {
      title: 'Awards & Achievements',
      heading: 'Recognized Excellence',
      image: awardsImg,
      link: '/awards',
    },
    career: {
      title: 'Career & Job',
      heading: 'Join Our Team',
      image: careerImg,
      link: '/career',
    },
  };
   const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

  // const resourcesMenuContent = {
  //   training: {
  //     title: 'Soft Trade Training',
  //     heading: 'Soft Trade Training',
  //     image: aboutImg,
  //     link: '/soft-trade-training',
  //   },
  //   beta: {
  //     title: 'BETA Program',
  //     heading: 'Soft Trade BETA Program',
  //     image: customerImg,
  //     link: '/beta-program',
  //   },
  //   blog: {
  //     title: 'Blog',
  //     heading: 'Soft Trade Blog ',
  //     image: awardsImg,
  //     link: '/blog',
  //   },

  // };

  return (
    <div id="xb-header-area" className="header-area header-style-two">
      <div className={`xb-header stricky ${isSticky ? 'stricked-menu stricky-fixed' : ''}`}>
        <div className="container">
          <div className="header__wrap ul_li_between">
            <div className="header-logo">
              <Link onClick={clickHandler} to="/">
                <img src={logo} alt="Soft Trade Logo" width={150} style={{ borderRadius: '5px' }} />
              </Link>
            </div>

            <div className="main-menu__wrap ul_li navbar navbar-expand-xl" >
              <nav className="main-menu collapse navbar-collapse desktop_header_menu-top">
                <ul className='main-manu-top'>
                   <li><Link onClick={clickHandler} to="/">
                   
                   <svg width="25px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#000000" stroke-width="2" stroke-linecap="round"></rect> </g></svg>
                     softtrade@gmail.com
                   
                    </Link></li>
                    <li><Link onClick={clickHandler} to="/">
                    
                     <svg width="25px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.5 2C13.5 2 15.8335 2.21213 18.8033 5.18198C21.7731 8.15183 21.9853 10.4853 21.9853 10.4853" stroke="#000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M14.207 5.53564C14.207 5.53564 15.197 5.81849 16.6819 7.30341C18.1668 8.78834 18.4497 9.77829 18.4497 9.77829" stroke="#000" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z" fill="#000"></path> </g></svg>
                      +91-6350436408
                     </Link></li>
                     <li><Link onClick={clickHandler} to="/">
                     
                     <svg width="25px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.6 6.31999C16.8669 5.58141 15.9943 4.99596 15.033 4.59767C14.0716 4.19938 13.0406 3.99622 12 3.99999C10.6089 4.00135 9.24248 4.36819 8.03771 5.06377C6.83294 5.75935 5.83208 6.75926 5.13534 7.96335C4.4386 9.16745 4.07046 10.5335 4.06776 11.9246C4.06507 13.3158 4.42793 14.6832 5.12 15.89L4 20L8.2 18.9C9.35975 19.5452 10.6629 19.8891 11.99 19.9C14.0997 19.9001 16.124 19.0668 17.6222 17.5816C19.1205 16.0965 19.9715 14.0796 19.99 11.97C19.983 10.9173 19.7682 9.87634 19.3581 8.9068C18.948 7.93725 18.3505 7.05819 17.6 6.31999ZM12 18.53C10.8177 18.5308 9.65701 18.213 8.64 17.61L8.4 17.46L5.91 18.12L6.57 15.69L6.41 15.44C5.55925 14.0667 5.24174 12.429 5.51762 10.8372C5.7935 9.24545 6.64361 7.81015 7.9069 6.80322C9.1702 5.79628 10.7589 5.28765 12.3721 5.37368C13.9853 5.4597 15.511 6.13441 16.66 7.26999C17.916 8.49818 18.635 10.1735 18.66 11.93C18.6442 13.6859 17.9355 15.3645 16.6882 16.6006C15.441 17.8366 13.756 18.5301 12 18.53ZM15.61 13.59C15.41 13.49 14.44 13.01 14.26 12.95C14.08 12.89 13.94 12.85 13.81 13.05C13.6144 13.3181 13.404 13.5751 13.18 13.82C13.07 13.96 12.95 13.97 12.75 13.82C11.6097 13.3694 10.6597 12.5394 10.06 11.47C9.85 11.12 10.26 11.14 10.64 10.39C10.6681 10.3359 10.6827 10.2759 10.6827 10.215C10.6827 10.1541 10.6681 10.0941 10.64 10.04C10.64 9.93999 10.19 8.95999 10.03 8.56999C9.87 8.17999 9.71 8.23999 9.58 8.22999H9.19C9.08895 8.23154 8.9894 8.25465 8.898 8.29776C8.8066 8.34087 8.72546 8.403 8.66 8.47999C8.43562 8.69817 8.26061 8.96191 8.14676 9.25343C8.03291 9.54495 7.98287 9.85749 8 10.17C8.0627 10.9181 8.34443 11.6311 8.81 12.22C9.6622 13.4958 10.8301 14.5293 12.2 15.22C12.9185 15.6394 13.7535 15.8148 14.58 15.72C14.8552 15.6654 15.1159 15.5535 15.345 15.3915C15.5742 15.2296 15.7667 15.0212 15.91 14.78C16.0428 14.4856 16.0846 14.1583 16.03 13.84C15.94 13.74 15.81 13.69 15.61 13.59Z" fill="#000000"></path> </g></svg>
                        +91-9829957850
                     </Link>
                      </li>
                </ul>
                <ul className='header_menu_border-top'>
                 
                  <li><Link onClick={clickHandler} to="/" className=''>Home</Link></li>
                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/about">About Us</Link>
                    {/* <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper mega_menu_wrapper1">
                          <div className="mega_menu_wrapper_inner megamenu_widget_wrapper megamenu_widget_wrapper1">
                            <div className="row justify-content-lg-between">
                              <div className="col-lg-12">
                                <div className="px-3 py-3">
                                  <div className="row">

                                    <div className="col-lg-6">
                                      <div className="row">
                                        {Object.entries(aboutMenuContent).map(([key, item]) => (
                                          <div
                                            key={key}
                                            className={`col-xl-10 col-md-4 mb-3 ${selectedAbout === key ? 'active' : ''}`}
                                            onMouseEnter={() => setSelectedAbout(key)}
                                          >
                                            <Link onClick={clickHandler} className="iconbox_block_2" to={item.link}>
                                              <span className="icon_title_wrap">
                                                <small className="iconbox_icon">
                                                  <img
                                                    src={
                                                      key === 'about' ? icon2 :
                                                        key === 'customer' ? icon5 :
                                                          key === 'awards' ? icon3 :
                                                            key === 'career' ? icon4 :
                                                              ''
                                                    }
                                                    alt={item.title}
                                                  />
                                                </small>
                                                <small className="iconbox_title">{item.title}</small>
                                              </span>
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </div>


                                    <div className="col-lg-6">
                                      <div className="megamenu_case megamenu_case1">
                                        <h3 className="text-black">{aboutMenuContent[selectedAbout]?.title}</h3>
                                        <h4 className="text-black">{aboutMenuContent[selectedAbout]?.heading}</h4>
                                        <img
                                          src={aboutMenuContent[selectedAbout]?.image}
                                          alt={selectedAbout}
                                          width={300}
                                        />
                                        <Link
                                          onClick={clickHandler}
                                          className="megamenu_btn megamenu_btn_about text-center text-black rounded"
                                          to={aboutMenuContent[selectedAbout]?.link}
                                        >
                                          Read More
                                          <span className="btn_icon ms-1">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M13 1C13 0.447715 12.5523 0 12 0H3C2.44771 0 2 0.447715 2 1C2 1.55228 2.44771 2 3 2H11V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z" fill="#fff" />
                                            </svg>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                  </li>



                  {/* Product */}

                  <li className="">
                    <Link onClick={clickHandler} to="/desktop-software">Desktop software</Link>
                    {/* <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper">
                          <div className="container">
                            <div className="mega_menu_wrapper_inner">
                              <div className="row">
                                <div className="col-xl-9">
                                  <div className="megamenu_pages_wrapper mb-5">
                                    <div className="row g-10">
                                      <div className="col-xl-4 col-md-4">
                                        <Link onClick={clickHandler} className="iconbox_block_2" to="/about">
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon2} alt="About Us" />
                                            </small>
                                            <small className="iconbox_title">About Us</small>
                                          </span>
                                          <span className="description mb-0">Learn more about Soft Trade</span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link onClick={clickHandler} className="iconbox_block_2" to="/pricing">
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon3} alt="Pricing" />
                                            </small>
                                            <small className="iconbox_title">Our Pricing</small>
                                          </span>
                                          <span className="description mb-0">Streamlined Pricing</span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link onClick={clickHandler} className="iconbox_block_2" to="/team">
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon4} alt="Team" />
                                            </small>
                                            <small className="iconbox_title">Our Team</small>
                                          </span>
                                          <span className="description mb-0">We are friendly. Join our team.</span>
                                        </Link>
                                      </div>
                                      <div className="col-xl-4 col-md-4">
                                        <Link onClick={clickHandler} className="iconbox_block_2" to="/service">
                                          <span className="icon_title_wrap">
                                            <small className="iconbox_icon">
                                              <img src={icon5} alt="Services" />
                                            </small>
                                            <small className="iconbox_title">Services</small>
                                          </span>
                                          <span className="description mb-0">Happy to help you!</span>
                                        </Link>
                                      </div>







                                    </div>
                                  </div>
                                  <ul className="btns_group p-0 unordered_list justify-content-start">
                                    <li>
                                      <Link onClick={clickHandler} to="/contact" className="thm-btn thm-btn--aso megamenu-btn thm-btn--header-black">
                                        Get free consultation
                                      </Link>
                                    </li>
                                    <li>
                                      <div className="review_short_info_2">
                                        <div className="review_admin_logo">
                                          <img src={clogo1} alt="Client Logo 1" />
                                        </div>
                                        <div className="review_info_content">
                                          <ul className="rating_block unordered_list">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                          </ul>
                                          <div className="review_counter">From <b>200+</b> reviews</div>
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="review_short_info_2">
                                        <div className="review_admin_logo">
                                          <img src={clogo2} alt="Client Logo 2" />
                                        </div>
                                        <div className="review_info_content">
                                          <ul className="rating_block unordered_list">
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                            <li><i className="fas fa-star"></i></li>
                                          </ul>
                                          <div className="review_counter">From <b>200+</b> reviews</div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-xl-3">
                                  <div className="autpr_box">
                                    <div className="site_author">
                                      <div className="author_box">
                                        <div className="author_image bg-light">
                                          <img src={avatar} alt="Author Avatar" />
                                        </div>
                                        <div className="author_box_content">
                                          <h3 className="author_name text-white">Maverick Phoenix</h3>
                                          <span className="author_designation text-white">CEO At Soft Trade</span>
                                        </div>
                                      </div>
                                      <p className="mb-0 text-white">
                                        “As a CEO at Soft Trade I have been voice crying in the wilderness, trying to make requirements
                                        clear, use every minute to deliver the result, and not reinvent the wheel. Here at Soft Trade, I made that possible for the clients.”
                                      </p>
                                      <div className="author_box_quote">
                                        <img src={quote} alt="Quote Icon" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                  </li>

{/* ERP */}

<li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/erp">ERP</Link>
                    {/* <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper mega_menu_wrapper1">
                          <div className="mega_menu_wrapper_inner megamenu_widget_wrapper megamenu_widget_wrapper1">
                            <div className="row justify-content-lg-between">
                              <div className="col-lg-12">
                                <div className="px-3 py-3">
                                  <div className="row">

                                    <div className="col-lg-6">
                                      <div className="row">
                                        {Object.entries(aboutMenuContent).map(([key, item]) => (
                                          <div
                                            key={key}
                                            className={`col-xl-10 col-md-4 mb-3 ${selectedAbout === key ? 'active' : ''}`}
                                            onMouseEnter={() => setSelectedAbout(key)}
                                          >
                                            <Link onClick={clickHandler} className="iconbox_block_2" to={item.link}>
                                              <span className="icon_title_wrap">
                                                <small className="iconbox_icon">
                                                  <img
                                                    src={
                                                      key === 'about' ? icon2 :
                                                        key === 'customer' ? icon5 :
                                                          key === 'awards' ? icon3 :
                                                            key === 'career' ? icon4 :
                                                              ''
                                                    }
                                                    alt={item.title}
                                                  />
                                                </small>
                                                <small className="iconbox_title">{item.title}</small>
                                              </span>
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </div>


                                    <div className="col-lg-6">
                                      <div className="megamenu_case megamenu_case1">
                                        <h3 className="text-black">{aboutMenuContent[selectedAbout]?.title}</h3>
                                        <h4 className="text-black">{aboutMenuContent[selectedAbout]?.heading}</h4>
                                        <img
                                          src={aboutMenuContent[selectedAbout]?.image}
                                          alt={selectedAbout}
                                          width={300}
                                        />
                                        <Link
                                          onClick={clickHandler}
                                          className="megamenu_btn megamenu_btn_about text-center text-black rounded"
                                          to={aboutMenuContent[selectedAbout]?.link}
                                        >
                                          Read More
                                          <span className="btn_icon ms-1">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M13 1C13 0.447715 12.5523 0 12 0H3C2.44771 0 2 0.447715 2 1C2 1.55228 2.44771 2 3 2H11V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z" fill="#fff" />
                                            </svg>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul> */}
                  </li>
{/* Segments */}

                {/* <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/segments"><span>Segments</span></Link>
                   
                  </li> */}

                  {/* Download */}

                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/download">Download</Link>          
                  </li>
                  {/* Resources */}


                  {/* <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/blog"><span>Resources</span></Link>
                    <ul className="submenu">
                      <li>
                        <div className="mega_menu_wrapper mega_menu_wrapper1">
                          <div className="mega_menu_wrapper_inner megamenu_widget_wrapper megamenu_widget_wrapper1">
                            <div className="row justify-content-lg-between">
                              <div className="col-lg-12">
                                <div className="px-3 py-3">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="row">
                                        {Object.entries(resourcesMenuContent).map(([key, item]) => (
                                          <div
                                            key={key}
                                            className={`col-xl-10 col-md-4 mb-3 ${selectedResources === key ? 'active' : ''}`}
                                            onMouseEnter={() => setSelectedResources(key)}
                                            aria-current={selectedResources === key ? 'true' : undefined}
                                          >
                                            <Link onClick={clickHandler} className="iconbox_block_2" to={item.link}>
                                              <span className="icon_title_wrap">
                                                <small className="iconbox_icon">
                                                  <img src={
                                                    key === 'training' ? icon2 :
                                                      key === 'beta' ? icon5 :
                                                        key === 'blog' ? icon3 : ''
                                                  } alt={item.title} />
                                                </small>
                                                <small className="iconbox_title">{item.title}</small>
                                              </span>
                                            </Link>
                                          </div>
                                        ))}
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="megamenu_case megamenu_case1">
                                        <h3 className="text-black">{resourcesMenuContent[selectedResources]?.title || 'Soft Trade Training'}</h3>
                                        <h4 className="text-black">{resourcesMenuContent[selectedResources]?.heading || 'Soft Trade Training'}</h4>
                                        <img
                                          src={resourcesMenuContent[selectedResources]?.image || aboutImg}
                                          alt={selectedResources}
                                          width={300}
                                        />
                                        <Link
                                          onClick={clickHandler}
                                          className="megamenu_btn megamenu_btn_about text-center text-black rounded"
                                          to={resourcesMenuContent[selectedResources]?.link || '/soft-trade-training'}
                                        >
                                          Read More
                                          <span className="btn_icon ms-1">
                                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M13 1C13 0.447715 12.5523 0 12 0H3C2.44771 0 2 0.447715 2 1C2 1.55228 2.44771 2 3 2H11V10C11 10.5523 11.4477 11 12 11C12.5523 11 13 10.5523 13 10V1ZM1.70711 12.7071L12.7071 1.70711L11.2929 0.292893L0.292893 11.2929L1.70711 12.7071Z" fill="#fff" />
                                            </svg>
                                          </span>
                                        </Link>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li> */}




                  {/* partner */}

                  <li className="menu-item-has-children">
                    <Link onClick={clickHandler} to="/casestudy">Partners</Link>
                    <ul className="submenu">
                      <li><Link onClick={clickHandler} to="/"><span>Partner Overview</span></Link></li>
                      <li><Link onClick={clickHandler} to="/"><span>Partner Login</span></Link></li>
                    </ul>
                  </li>
                  {/* contact */}
                  <li><Link onClick={clickHandler} to="/contact">Contact</Link></li>
                </ul>
              </nav>



              {/* Mobile Menu */}
              <div className="xb-header-wrap">
                <div className={`xb-header-menu ${mobileActive ? "active" : ""}`}>
                  <div className="xb-header-menu-scroll lenis lenis-smooth">
                    <div className="xb-menu-close xb-hide-xl xb-close" onClick={() => setMobileActive(!mobileActive)}></div>
                    <div className="xb-logo-mobile xb-hide-xl">
                      <Link onClick={clickHandler} to="/" rel="home">
                        <img src={logo2} alt="Soft Trade Logo" />
                      </Link>
                    </div>
                    {/* <div className="xb-header-mobile-search xb-hide-xl">
                      <form role="search" onSubmit={submitHandler}>
                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div> */}
                  
                    <nav className="xb-header-nav">
                      <MobileMenu />
                    </nav>
                  </div>
                </div>
                <div className="xb-header-menu-backdrop"></div>
              </div>
            </div>
            <div className="header-bar-mobile side-menu d-xl-none">
              <button className="xb-nav-mobile" onClick={() => setMobileActive(!mobileActive)}>
                <i className="far fa-bars"></i>
              </button>
            </div>
            <div className="header-contact d-none d-md-block">


               <Link onClick={ClickHandler} to="/contact" className="header_btn date-picker-wrapper header_btn1">         
                  <FaCalendarAlt className="calendar-icon" />  Book Free Demo
               </Link>
              {/* <Link onClick={clickHandler} to="/contact" className="blc-btn blc-btn-custom">
                <span className="date-picker-wrapper pe-2">
                  <FaCalendarAlt className="calendar-icon text-black " />
                </span>
                <span className="text-black">Book Free Demo</span>
                <span className="btn-shape">
                  <svg width="216" height="44" viewBox="0 0 216 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect
                      x="1"
                      y="1"
                      width="200"
                      height="40"
                      rx="27"
                      fill="#fff"
                      stroke="#000"
                      // stroke="url(#paint0_linear)"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="216" y1="57.4519" x2="177.902" y2="2.40647" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#6780D2" />
                        <stop offset="1" stopColor="#2F3B8D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="btn-shape2">
                  <svg width="216" height="44" viewBox="0 0 216 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect
                      x="1"
                      y="1"
                      width="200"
                      height="40"
                      rx="27"
                      fill="#fff"
                      stroke="url(#paint0_linear)"
                      strokeWidth="1"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="216" y1="57.4519" x2="177.902" y2="2.40647" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#431DAB" />
                        <stop offset="1" stopColor="#AE6DFE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;