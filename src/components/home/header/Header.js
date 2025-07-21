import React, { useState, useEffect, useCallback } from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import icon2 from '../../../images/icon/m_01.svg';
import icon3 from '../../../images/icon/m_02.svg';
import icon4 from '../../../images/icon/m_03.svg';
import icon5 from '../../../images/icon/m_04.svg';
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
  const [selectedAbout, setSelectedAbout] = useState('about');
  const [selectedResources, setSelectedResources] = useState('training');

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const clickHandler = () => window.scrollTo(10, 0);
  const submitHandler = (e) => e.preventDefault();

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

  const resourcesMenuContent = {
    training: {
      title: 'Soft Trade Training',
      heading: 'Soft Trade Training',
      image: aboutImg,
      link: '/soft-trade-training',
    },
    beta: {
      title: 'BETA Program',
      heading: 'Soft Trade BETA Program',
      image: customerImg,
      link: '/beta-program',
    },
    blog: {
      title: 'Blog',
      heading: 'Soft Trade Blog ',
      image: awardsImg,
      link: '/blog',
    },

  };

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

            <div className="main-menu__wrap ul_li navbar navbar-expand-xl">
              <nav className="main-menu collapse navbar-collapse">
                <ul>
                  <li><Link onClick={clickHandler} to="/"><span>Home</span></Link></li>


                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/about"><span>About Us</span></Link>
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
                    </ul>
                  </li>



                  {/* Product */}

                  <li className="menu-item-has-children megamenu">
                    <Link onClick={clickHandler} to="/"><span>Products</span></Link>
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



                  {/* Resources */}


                  <li className="menu-item-has-children megamenu">
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
                  </li>




                  {/* partner */}

                  <li className="menu-item-has-children">
                    <Link onClick={clickHandler} to="/casestudy"><span>Partners</span></Link>
                    <ul className="submenu">
                      <li><Link onClick={clickHandler} to="/casestudy"><span>Partner Overview</span></Link></li>
                      <li><Link onClick={clickHandler} to="/casestudy-details/Marketing"><span>Partner Login</span></Link></li>
                    </ul>
                  </li>
                  {/* contact */}
                  <li><Link onClick={clickHandler} to="/contact"><span>Contact</span></Link></li>
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
                    <div className="xb-header-mobile-search xb-hide-xl">
                      <form role="search" onSubmit={submitHandler}>
                        <input type="text" placeholder="Search..." name="s" className="search-field" />
                        <button className="search-submit" type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </form>
                    </div>
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

              <Link onClick={clickHandler} to="/contact" className="blc-btn blc-btn-custom">
                <span className="date-picker-wrapper pe-2">
                  <FaCalendarAlt className="calendar-icon text-black " />
                </span>
                <span className="text-black">Book Free Demo</span>
                <span className="btn-shape">
                  <svg width="216" height="44" viewBox="0 0 216 44" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <rect
                      x="1"
                      y="1"
                      width="214"
                      height="44"
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
                      width="214"
                      height="44"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;