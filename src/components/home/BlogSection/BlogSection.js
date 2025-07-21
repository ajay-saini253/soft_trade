import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

import blogs from '../../../api/blogs';

// Optional image imports (uncomment if needed)
// import hicon from '../../../images/icon/blg-cap.svg';
// import bicon1 from '../../../images/icon/arrow-white.png';
import bicon2 from '../../../images/shape/blg-line.png';
// import bicon3 from '../../../images/icon/profile-circle.png';
// import bicon4 from '../../../images/icon/menu-board.png';

const BlogSection = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleClick = () => {
    window.scrollTo(10, 0);
  };

  return (
    <section className="team pt-50 pb-50">
      <div className="container">
        <div className="sec-title--two text-center mb-30">
          <Fade direction="up" triggerOnce={false} duration={1200} delay={9}>
            <div>
              <h2 className="title wow fadeInDown text-start" data-wow-delay="150ms" data-wow-duration="600ms">
                Recent Blogs
              </h2>
              <p className="mt-4 wow fadeInDown text-start">
                Our blog section is packed with informative, thought-provoking, and engaging content <br />
                that is sure to appeal to a wide range of readers.
              </p>
            </div>
          </Fade>
        </div>

        <div className="sa-team pos-rel">
          <div className="team-slider swiper-container">
            <Swiper
              modules={[Navigation]}
              spaceBetween={50}
              slidesPerView={3}
            //   centeredSlides={true}
              loop={true}
              speed={500}
              parallax={true}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                1600: { slidesPerView: 4 },
                768: { slidesPerView: 3},
                576: { slidesPerView: 2 },
                0: { slidesPerView: 1 },
              }}
            >
              {blogs.slice(3, 9).map((blog, index) => (
                <SwiperSlide key={index}>
                  <div className="xb-blog-item wow fadeInUp custom_blog" data-wow-delay="0ms" data-wow-duration="600ms">
                    <div className="xb-item--holder">
                      <Link onClick={handleClick} to={`/blog-single/${blog.slug}`} className="xb-item--img">
                        <img src={blog.screens} alt={`Blog ${index}`} id="ajay-img2" />
                        {/* Optional Arrow */}
                        {/* <div className="xb-item--circle-arrow"><img src={bicon1} alt="" /></div> */}
                        <div className="xb-item--line"><img src={bicon2} alt="" /></div>
                      </Link>
                    </div>

                    <h2 className="xb-item--title border-effect-2">
                      <Link onClick={handleClick} to={`/blog-single/${blog.slug}`} style={{ color: "#000" }}>
                        {blog.title || 'How to Prevent Ransomware Attacks, Tips for Businesses..'}
                      </Link>
                    </h2>

                    {/* Optional metadata */}
                    {/* <ul className="xb-item--meta list-unstyled ul_li">
                      <li><span><img src={bicon3} alt="" /></span>Posted By {blog.author || 'Johnson'}</li>
                      <li><span><img src={bicon4} alt="" /></span>{blog.create_at}</li>
                    </ul> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Navigation Buttons */}
          <div className="team-btn">
            <div className="sa-swiper-btn swiper-button-prev" ref={prevRef}>
              <i className="fal fa-angle-left"></i>
            </div>
            <div className="sa-swiper-btn swiper-button-next" ref={nextRef}>
              <i className="fal fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
