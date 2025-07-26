import React from 'react';
import icon1 from '../../images/icon/check-mark.png';
import { Link } from 'react-router-dom';
import product1 from '../../images/desktop-software/plus.webp'
import pdf from '../../images/desktop-software/pdf.png'

const DesktopProducts = () => {
  return (
    <>
      <section className='py-50'>
        <div className="container py-5">
          <div className="row  products-section product1-details">

            <div className="col-md-3 text-center mb-4 mb-md-0 mt-3">
              <img
                src={product1}
                alt="Plus Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>
            <div className="col-md-9 product-details ">
              <h3>Plus - Accounting Software</h3>
              <p className='py-2'>
                <strong>Version:</strong> 2.01{" "}
                <strong>Release Date:</strong> 15-Jul 2025
              </p>
              <p className='text-black text-justify'>
                Plus Accounting Software is Easy & Advanced general purpose
                accounting software with Audit trail, secured data backup on your
                own Google Drive account and other many unique features like
                Whatsapp sharing, Telegram Sharing, Cloud Reporting Portal &
                Android App, Scheme Management, Auto Bill From Order, Packing /
                Crate Stock, etc.. We provide accounting software which is
                suitable for various business categories like Accountants,
                Traders, Dealers, Distributors, Industries, Mobile Shops and
                other SMEs.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3 mb-3">

                <Link to="" className='desktopproduct-button'>
                  <img src={icon1} alt="check" className="me-2" />
                  Broucher Download
                </Link>
                <Link to="" className='desktopproduct-button' >
                  <img src={icon1} alt="check" className="me-2" />
                  Download Software
                </Link>

              </div>

              <div className="row mt-3">
                <div className="col-md-6 mb-4">
                 <div className=' download-android-application'>
                   <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" class="downloadsvg me-2">
                      <g id="surface1">
                        <path d="M 16.375 -0.03125 C 16.332031 -0.0234375 16.289063 -0.0117188 16.25 0 C 15.921875 0.0742188 15.652344 0.304688 15.53125 0.621094 C 15.410156 0.9375 15.457031 1.289063 15.65625 1.5625 L 17.78125 4.75 C 14.183594 6.640625 11.601563 9.902344 11 13.78125 C 11 13.792969 11 13.800781 11 13.8125 C 11 13.824219 11 13.832031 11 13.84375 C 11 13.875 11 13.90625 11 13.9375 C 11 13.957031 11 13.980469 11 14 C 10.996094 14.050781 10.996094 14.105469 11 14.15625 L 11 15.5625 C 10.40625 15.214844 9.734375 15 9 15 C 6.800781 15 5 16.800781 5 19 L 5 31 C 5 33.199219 6.800781 35 9 35 C 9.734375 35 10.40625 34.785156 11 34.4375 L 11 37 C 11 38.644531 12.355469 40 14 40 L 15 40 L 15 46 C 15 48.199219 16.800781 50 19 50 C 21.199219 50 23 48.199219 23 46 L 23 40 L 27 40 L 27 46 C 27 48.199219 28.800781 50 31 50 C 33.199219 50 35 48.199219 35 46 L 35 40 L 36 40 C 37.644531 40 39 38.644531 39 37 L 39 34.4375 C 39.59375 34.785156 40.265625 35 41 35 C 43.199219 35 45 33.199219 45 31 L 45 19 C 45 16.800781 43.199219 15 41 15 C 40.265625 15 39.59375 15.214844 39 15.5625 L 39 14.1875 C 39.011719 14.09375 39.011719 14 39 13.90625 C 39 13.894531 39 13.886719 39 13.875 C 39 13.863281 39 13.855469 39 13.84375 C 38.417969 9.9375 35.835938 6.648438 32.21875 4.75 L 34.34375 1.5625 C 34.589844 1.226563 34.597656 0.773438 34.367188 0.425781 C 34.140625 0.078125 33.71875 -0.09375 33.3125 0 C 33.054688 0.0585938 32.828125 0.214844 32.6875 0.4375 L 30.34375 3.90625 C 28.695313 3.3125 26.882813 3 25 3 C 23.117188 3 21.304688 3.3125 19.65625 3.90625 L 17.3125 0.4375 C 17.113281 0.117188 16.75 -0.0625 16.375 -0.03125 Z M 25 5 C 26.878906 5 28.640625 5.367188 30.1875 6.03125 C 30.21875 6.042969 30.25 6.054688 30.28125 6.0625 C 33.410156 7.433594 35.6875 10 36.5625 13 L 13.4375 13 C 14.300781 10.042969 16.53125 7.507813 19.59375 6.125 C 19.660156 6.101563 19.722656 6.070313 19.78125 6.03125 C 21.335938 5.359375 23.109375 5 25 5 Z M 19.5 8 C 18.667969 8 18 8.671875 18 9.5 C 18 10.332031 18.667969 11 19.5 11 C 20.328125 11 21 10.332031 21 9.5 C 21 8.671875 20.328125 8 19.5 8 Z M 30.5 8 C 29.671875 8 29 8.671875 29 9.5 C 29 10.332031 29.671875 11 30.5 11 C 31.332031 11 32 10.332031 32 9.5 C 32 8.671875 31.332031 8 30.5 8 Z M 13 15 L 37 15 L 37 37 C 37 37.5625 36.5625 38 36 38 L 28.1875 38 C 28.054688 37.972656 27.914063 37.972656 27.78125 38 L 16.1875 38 C 16.054688 37.972656 15.914063 37.972656 15.78125 38 L 14 38 C 13.4375 38 13 37.5625 13 37 Z M 9 17 C 10.117188 17 11 17.882813 11 19 L 11 31 C 11 32.117188 10.117188 33 9 33 C 7.882813 33 7 32.117188 7 31 L 7 19 C 7 17.882813 7.882813 17 9 17 Z M 41 17 C 42.117188 17 43 17.882813 43 19 L 43 31 C 43 32.117188 42.117188 33 41 33 C 39.882813 33 39 32.117188 39 31 L 39 19 C 39 17.882813 39.882813 17 41 17 Z M 17 40 L 21 40 L 21 46 C 21 47.117188 20.117188 48 19 48 C 17.882813 48 17 47.117188 17 46 Z M 29 40 L 33 40 L 33 46 C 33 47.117188 32.117188 48 31 48 C 29.882813 48 29 47.117188 29 46 Z "></path>
                      </g></svg>
                    Android Application
                  </h5>

              
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                    {/* <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link"><img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li> */}

                  </ul>
                 </div>

                </div>

                <div className="col-md-6">
                 <div className=' download-manual-application'>
                   <h5>
                    <img src={pdf} alt="pdf" className='me-2' width={16} />
                    Manual
                  </h5>
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" />Manual In English</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" /> Manual In Hindi</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link">
                      <img src={icon1} alt="check" className="me-2" /> Manual In Gujarati</Link>
                    </li>

                  </ul>
                 </div>
                </div>
              </div>

            </div>
          </div>
           <div className="row  products-section product2-details">

            <div className="col-md-3 text-center mb-4 mb-md-0 mt-3">
              <img
                src={product1}
                alt="Plus Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>
            <div className="col-md-9 product-details">
              <h3>Plus - Accounting Software</h3>
              <p className='py-2'>
                <strong>Version:</strong> 2.01{" "}
                <strong>Release Date:</strong> 15-Jul 2025
              </p>
              <p className='text-black text-justify'>
                Plus Accounting Software is Easy & Advanced general purpose
                accounting software with Audit trail, secured data backup on your
                own Google Drive account and other many unique features like
                Whatsapp sharing, Telegram Sharing, Cloud Reporting Portal &
                Android App, Scheme Management, Auto Bill From Order, Packing /
                Crate Stock, etc.. We provide accounting software which is
                suitable for various business categories like Accountants,
                Traders, Dealers, Distributors, Industries, Mobile Shops and
                other SMEs.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3 mb-3">

                <Link to="" className='desktopproduct-button'>
                  <img src={icon1} alt="check" className="me-2" />
                  Broucher Download
                </Link>
                <Link to="" className='desktopproduct-button' >
                  <img src={icon1} alt="check" className="me-2" />
                  Download Software
                </Link>

              </div>

              <div className="row mt-3">
                <div className="col-md-6 mb-4">
                 <div className=' download-android-application'>
                   <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" class="downloadsvg me-2">
                      <g id="surface1">
                        <path d="M 16.375 -0.03125 C 16.332031 -0.0234375 16.289063 -0.0117188 16.25 0 C 15.921875 0.0742188 15.652344 0.304688 15.53125 0.621094 C 15.410156 0.9375 15.457031 1.289063 15.65625 1.5625 L 17.78125 4.75 C 14.183594 6.640625 11.601563 9.902344 11 13.78125 C 11 13.792969 11 13.800781 11 13.8125 C 11 13.824219 11 13.832031 11 13.84375 C 11 13.875 11 13.90625 11 13.9375 C 11 13.957031 11 13.980469 11 14 C 10.996094 14.050781 10.996094 14.105469 11 14.15625 L 11 15.5625 C 10.40625 15.214844 9.734375 15 9 15 C 6.800781 15 5 16.800781 5 19 L 5 31 C 5 33.199219 6.800781 35 9 35 C 9.734375 35 10.40625 34.785156 11 34.4375 L 11 37 C 11 38.644531 12.355469 40 14 40 L 15 40 L 15 46 C 15 48.199219 16.800781 50 19 50 C 21.199219 50 23 48.199219 23 46 L 23 40 L 27 40 L 27 46 C 27 48.199219 28.800781 50 31 50 C 33.199219 50 35 48.199219 35 46 L 35 40 L 36 40 C 37.644531 40 39 38.644531 39 37 L 39 34.4375 C 39.59375 34.785156 40.265625 35 41 35 C 43.199219 35 45 33.199219 45 31 L 45 19 C 45 16.800781 43.199219 15 41 15 C 40.265625 15 39.59375 15.214844 39 15.5625 L 39 14.1875 C 39.011719 14.09375 39.011719 14 39 13.90625 C 39 13.894531 39 13.886719 39 13.875 C 39 13.863281 39 13.855469 39 13.84375 C 38.417969 9.9375 35.835938 6.648438 32.21875 4.75 L 34.34375 1.5625 C 34.589844 1.226563 34.597656 0.773438 34.367188 0.425781 C 34.140625 0.078125 33.71875 -0.09375 33.3125 0 C 33.054688 0.0585938 32.828125 0.214844 32.6875 0.4375 L 30.34375 3.90625 C 28.695313 3.3125 26.882813 3 25 3 C 23.117188 3 21.304688 3.3125 19.65625 3.90625 L 17.3125 0.4375 C 17.113281 0.117188 16.75 -0.0625 16.375 -0.03125 Z M 25 5 C 26.878906 5 28.640625 5.367188 30.1875 6.03125 C 30.21875 6.042969 30.25 6.054688 30.28125 6.0625 C 33.410156 7.433594 35.6875 10 36.5625 13 L 13.4375 13 C 14.300781 10.042969 16.53125 7.507813 19.59375 6.125 C 19.660156 6.101563 19.722656 6.070313 19.78125 6.03125 C 21.335938 5.359375 23.109375 5 25 5 Z M 19.5 8 C 18.667969 8 18 8.671875 18 9.5 C 18 10.332031 18.667969 11 19.5 11 C 20.328125 11 21 10.332031 21 9.5 C 21 8.671875 20.328125 8 19.5 8 Z M 30.5 8 C 29.671875 8 29 8.671875 29 9.5 C 29 10.332031 29.671875 11 30.5 11 C 31.332031 11 32 10.332031 32 9.5 C 32 8.671875 31.332031 8 30.5 8 Z M 13 15 L 37 15 L 37 37 C 37 37.5625 36.5625 38 36 38 L 28.1875 38 C 28.054688 37.972656 27.914063 37.972656 27.78125 38 L 16.1875 38 C 16.054688 37.972656 15.914063 37.972656 15.78125 38 L 14 38 C 13.4375 38 13 37.5625 13 37 Z M 9 17 C 10.117188 17 11 17.882813 11 19 L 11 31 C 11 32.117188 10.117188 33 9 33 C 7.882813 33 7 32.117188 7 31 L 7 19 C 7 17.882813 7.882813 17 9 17 Z M 41 17 C 42.117188 17 43 17.882813 43 19 L 43 31 C 43 32.117188 42.117188 33 41 33 C 39.882813 33 39 32.117188 39 31 L 39 19 C 39 17.882813 39.882813 17 41 17 Z M 17 40 L 21 40 L 21 46 C 21 47.117188 20.117188 48 19 48 C 17.882813 48 17 47.117188 17 46 Z M 29 40 L 33 40 L 33 46 C 33 47.117188 32.117188 48 31 48 C 29.882813 48 29 47.117188 29 46 Z "></path>
                      </g></svg>
                    Android Application
                  </h5>

              
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                    {/* <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link"><img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li> */}

                  </ul>
                 </div>

                </div>

                <div className="col-md-6">
                 <div className=' download-manual-application'>
                   <h5>
                    <img src={pdf} alt="pdf" className='me-2' width={16} />
                    Manual
                  </h5>
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" />Manual In English</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" /> Manual In Hindi</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link">
                      <img src={icon1} alt="check" className="me-2" /> Manual In Gujarati</Link>
                    </li>

                  </ul>
                 </div>
                </div>
              </div>

            </div>
          </div>
           <div className="row  products-section product3-details">

            <div className="col-md-3 text-center mb-4 mb-md-0 mt-3">
              <img
                src={product1}
                alt="Plus Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>
            <div className="col-md-9 product-details">
              <h3>Plus - Accounting Software</h3>
              <p className='py-2'>
                <strong>Version:</strong> 2.01{" "}
                <strong>Release Date:</strong> 15-Jul 2025
              </p>
              <p className='text-black text-justify'>
                Plus Accounting Software is Easy & Advanced general purpose
                accounting software with Audit trail, secured data backup on your
                own Google Drive account and other many unique features like
                Whatsapp sharing, Telegram Sharing, Cloud Reporting Portal &
                Android App, Scheme Management, Auto Bill From Order, Packing /
                Crate Stock, etc.. We provide accounting software which is
                suitable for various business categories like Accountants,
                Traders, Dealers, Distributors, Industries, Mobile Shops and
                other SMEs.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3 mb-3">

                <Link to="" className='desktopproduct-button'>
                  <img src={icon1} alt="check" className="me-2" />
                  Broucher Download
                </Link>
                <Link to="" className='desktopproduct-button' >
                  <img src={icon1} alt="check" className="me-2" />
                  Download Software
                </Link>

              </div>

              <div className="row mt-3">
                <div className="col-md-6 mb-4">
                 <div className=' download-android-application'>
                   <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" class="downloadsvg me-2">
                      <g id="surface1">
                        <path d="M 16.375 -0.03125 C 16.332031 -0.0234375 16.289063 -0.0117188 16.25 0 C 15.921875 0.0742188 15.652344 0.304688 15.53125 0.621094 C 15.410156 0.9375 15.457031 1.289063 15.65625 1.5625 L 17.78125 4.75 C 14.183594 6.640625 11.601563 9.902344 11 13.78125 C 11 13.792969 11 13.800781 11 13.8125 C 11 13.824219 11 13.832031 11 13.84375 C 11 13.875 11 13.90625 11 13.9375 C 11 13.957031 11 13.980469 11 14 C 10.996094 14.050781 10.996094 14.105469 11 14.15625 L 11 15.5625 C 10.40625 15.214844 9.734375 15 9 15 C 6.800781 15 5 16.800781 5 19 L 5 31 C 5 33.199219 6.800781 35 9 35 C 9.734375 35 10.40625 34.785156 11 34.4375 L 11 37 C 11 38.644531 12.355469 40 14 40 L 15 40 L 15 46 C 15 48.199219 16.800781 50 19 50 C 21.199219 50 23 48.199219 23 46 L 23 40 L 27 40 L 27 46 C 27 48.199219 28.800781 50 31 50 C 33.199219 50 35 48.199219 35 46 L 35 40 L 36 40 C 37.644531 40 39 38.644531 39 37 L 39 34.4375 C 39.59375 34.785156 40.265625 35 41 35 C 43.199219 35 45 33.199219 45 31 L 45 19 C 45 16.800781 43.199219 15 41 15 C 40.265625 15 39.59375 15.214844 39 15.5625 L 39 14.1875 C 39.011719 14.09375 39.011719 14 39 13.90625 C 39 13.894531 39 13.886719 39 13.875 C 39 13.863281 39 13.855469 39 13.84375 C 38.417969 9.9375 35.835938 6.648438 32.21875 4.75 L 34.34375 1.5625 C 34.589844 1.226563 34.597656 0.773438 34.367188 0.425781 C 34.140625 0.078125 33.71875 -0.09375 33.3125 0 C 33.054688 0.0585938 32.828125 0.214844 32.6875 0.4375 L 30.34375 3.90625 C 28.695313 3.3125 26.882813 3 25 3 C 23.117188 3 21.304688 3.3125 19.65625 3.90625 L 17.3125 0.4375 C 17.113281 0.117188 16.75 -0.0625 16.375 -0.03125 Z M 25 5 C 26.878906 5 28.640625 5.367188 30.1875 6.03125 C 30.21875 6.042969 30.25 6.054688 30.28125 6.0625 C 33.410156 7.433594 35.6875 10 36.5625 13 L 13.4375 13 C 14.300781 10.042969 16.53125 7.507813 19.59375 6.125 C 19.660156 6.101563 19.722656 6.070313 19.78125 6.03125 C 21.335938 5.359375 23.109375 5 25 5 Z M 19.5 8 C 18.667969 8 18 8.671875 18 9.5 C 18 10.332031 18.667969 11 19.5 11 C 20.328125 11 21 10.332031 21 9.5 C 21 8.671875 20.328125 8 19.5 8 Z M 30.5 8 C 29.671875 8 29 8.671875 29 9.5 C 29 10.332031 29.671875 11 30.5 11 C 31.332031 11 32 10.332031 32 9.5 C 32 8.671875 31.332031 8 30.5 8 Z M 13 15 L 37 15 L 37 37 C 37 37.5625 36.5625 38 36 38 L 28.1875 38 C 28.054688 37.972656 27.914063 37.972656 27.78125 38 L 16.1875 38 C 16.054688 37.972656 15.914063 37.972656 15.78125 38 L 14 38 C 13.4375 38 13 37.5625 13 37 Z M 9 17 C 10.117188 17 11 17.882813 11 19 L 11 31 C 11 32.117188 10.117188 33 9 33 C 7.882813 33 7 32.117188 7 31 L 7 19 C 7 17.882813 7.882813 17 9 17 Z M 41 17 C 42.117188 17 43 17.882813 43 19 L 43 31 C 43 32.117188 42.117188 33 41 33 C 39.882813 33 39 32.117188 39 31 L 39 19 C 39 17.882813 39.882813 17 41 17 Z M 17 40 L 21 40 L 21 46 C 21 47.117188 20.117188 48 19 48 C 17.882813 48 17 47.117188 17 46 Z M 29 40 L 33 40 L 33 46 C 33 47.117188 32.117188 48 31 48 C 29.882813 48 29 47.117188 29 46 Z "></path>
                      </g></svg>
                    Android Application
                  </h5>

              
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                    {/* <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link"><img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li> */}

                  </ul>
                 </div>

                </div>

                <div className="col-md-6">
                 <div className=' download-manual-application'>
                   <h5>
                    <img src={pdf} alt="pdf" className='me-2' width={16} />
                    Manual
                  </h5>
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" />Manual In English</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" /> Manual In Hindi</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link">
                      <img src={icon1} alt="check" className="me-2" /> Manual In Gujarati</Link>
                    </li>

                  </ul>
                 </div>
                </div>
              </div>

            </div>
          </div>
           <div className="row  products-section product4-details">

            <div className="col-md-3 text-center mb-4 mb-md-0 mt-3">
              <img
                src={product1}
                alt="Plus Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>
            <div className="col-md-9 product-details">
              <h3>Plus - Accounting Software</h3>
              <p className='py-2'>
                <strong>Version:</strong> 2.01{" "}
                <strong>Release Date:</strong> 15-Jul 2025
              </p>
              <p className='text-black text-justify'>
                Plus Accounting Software is Easy & Advanced general purpose
                accounting software with Audit trail, secured data backup on your
                own Google Drive account and other many unique features like
                Whatsapp sharing, Telegram Sharing, Cloud Reporting Portal &
                Android App, Scheme Management, Auto Bill From Order, Packing /
                Crate Stock, etc.. We provide accounting software which is
                suitable for various business categories like Accountants,
                Traders, Dealers, Distributors, Industries, Mobile Shops and
                other SMEs.
              </p>

              <div className="d-flex flex-wrap gap-2 mt-3 mb-3">

                <Link to="" className='desktopproduct-button'>
                  <img src={icon1} alt="check" className="me-2" />
                  Broucher Download
                </Link>
                <Link to="" className='desktopproduct-button' >
                  <img src={icon1} alt="check" className="me-2" />
                  Download Software
                </Link>

              </div>

              {/* <div className="row mt-3">
                <div className="col-md-6 mb-4">
                 <div className=' download-android-application'>
                   <h5>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50" class="downloadsvg me-2">
                      <g id="surface1">
                        <path d="M 16.375 -0.03125 C 16.332031 -0.0234375 16.289063 -0.0117188 16.25 0 C 15.921875 0.0742188 15.652344 0.304688 15.53125 0.621094 C 15.410156 0.9375 15.457031 1.289063 15.65625 1.5625 L 17.78125 4.75 C 14.183594 6.640625 11.601563 9.902344 11 13.78125 C 11 13.792969 11 13.800781 11 13.8125 C 11 13.824219 11 13.832031 11 13.84375 C 11 13.875 11 13.90625 11 13.9375 C 11 13.957031 11 13.980469 11 14 C 10.996094 14.050781 10.996094 14.105469 11 14.15625 L 11 15.5625 C 10.40625 15.214844 9.734375 15 9 15 C 6.800781 15 5 16.800781 5 19 L 5 31 C 5 33.199219 6.800781 35 9 35 C 9.734375 35 10.40625 34.785156 11 34.4375 L 11 37 C 11 38.644531 12.355469 40 14 40 L 15 40 L 15 46 C 15 48.199219 16.800781 50 19 50 C 21.199219 50 23 48.199219 23 46 L 23 40 L 27 40 L 27 46 C 27 48.199219 28.800781 50 31 50 C 33.199219 50 35 48.199219 35 46 L 35 40 L 36 40 C 37.644531 40 39 38.644531 39 37 L 39 34.4375 C 39.59375 34.785156 40.265625 35 41 35 C 43.199219 35 45 33.199219 45 31 L 45 19 C 45 16.800781 43.199219 15 41 15 C 40.265625 15 39.59375 15.214844 39 15.5625 L 39 14.1875 C 39.011719 14.09375 39.011719 14 39 13.90625 C 39 13.894531 39 13.886719 39 13.875 C 39 13.863281 39 13.855469 39 13.84375 C 38.417969 9.9375 35.835938 6.648438 32.21875 4.75 L 34.34375 1.5625 C 34.589844 1.226563 34.597656 0.773438 34.367188 0.425781 C 34.140625 0.078125 33.71875 -0.09375 33.3125 0 C 33.054688 0.0585938 32.828125 0.214844 32.6875 0.4375 L 30.34375 3.90625 C 28.695313 3.3125 26.882813 3 25 3 C 23.117188 3 21.304688 3.3125 19.65625 3.90625 L 17.3125 0.4375 C 17.113281 0.117188 16.75 -0.0625 16.375 -0.03125 Z M 25 5 C 26.878906 5 28.640625 5.367188 30.1875 6.03125 C 30.21875 6.042969 30.25 6.054688 30.28125 6.0625 C 33.410156 7.433594 35.6875 10 36.5625 13 L 13.4375 13 C 14.300781 10.042969 16.53125 7.507813 19.59375 6.125 C 19.660156 6.101563 19.722656 6.070313 19.78125 6.03125 C 21.335938 5.359375 23.109375 5 25 5 Z M 19.5 8 C 18.667969 8 18 8.671875 18 9.5 C 18 10.332031 18.667969 11 19.5 11 C 20.328125 11 21 10.332031 21 9.5 C 21 8.671875 20.328125 8 19.5 8 Z M 30.5 8 C 29.671875 8 29 8.671875 29 9.5 C 29 10.332031 29.671875 11 30.5 11 C 31.332031 11 32 10.332031 32 9.5 C 32 8.671875 31.332031 8 30.5 8 Z M 13 15 L 37 15 L 37 37 C 37 37.5625 36.5625 38 36 38 L 28.1875 38 C 28.054688 37.972656 27.914063 37.972656 27.78125 38 L 16.1875 38 C 16.054688 37.972656 15.914063 37.972656 15.78125 38 L 14 38 C 13.4375 38 13 37.5625 13 37 Z M 9 17 C 10.117188 17 11 17.882813 11 19 L 11 31 C 11 32.117188 10.117188 33 9 33 C 7.882813 33 7 32.117188 7 31 L 7 19 C 7 17.882813 7.882813 17 9 17 Z M 41 17 C 42.117188 17 43 17.882813 43 19 L 43 31 C 43 32.117188 42.117188 33 41 33 C 39.882813 33 39 32.117188 39 31 L 39 19 C 39 17.882813 39.882813 17 41 17 Z M 17 40 L 21 40 L 21 46 C 21 47.117188 20.117188 48 19 48 C 17.882813 48 17 47.117188 17 46 Z M 29 40 L 33 40 L 33 46 C 33 47.117188 32.117188 48 31 48 C 29.882813 48 29 47.117188 29 46 Z "></path>
                      </g></svg>
                    Android Application
                  </h5>

              
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" > <img src={icon1} alt="check" className="me-2" /> Android Apps</Link>
                    </li>
                   

                  </ul>
                 </div>

                </div>

                <div className="col-md-6">
                 <div className=' download-manual-application'>
                   <h5>
                    <img src={pdf} alt="pdf" className='me-2' width={16} />
                    Manual
                  </h5>
                  <ul className="list-unstyled p-2 rounded align-items-center">
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" />Manual In English</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link" >
                       <img src={icon1} alt="check" className="me-2" /> Manual In Hindi</Link>
                    </li>
                    <li className="text-black desktopproducts-list1">
                      <Link to="#" className=" desktopproducts-link">
                      <img src={icon1} alt="check" className="me-2" /> Manual In Gujarati</Link>
                    </li>

                  </ul>
                 </div>
                </div>
              </div> */}




            </div>
          </div>
        </div>



      <div className="container pb-5">
      <div className="row products-section">
        <div className="col-md-3 col-sm-12 text-center mb-4">
          <img src={product1} alt="Plus Logo" className="img-fluid" />
        </div>

        <div className="col-md-9 col-sm-12 product-details">
          <p className='py-2'><strong>Version :</strong> <strong>Release Date :</strong></p>
          <h4 className="mb-4">E-Commerce Solution</h4>

          <p className='py-text-justify '>
            * Plus Retail E-Commerce application is a platform where sellers can offer their products to users of the
            Plus Retail application by registering with the Plus Retail Application.
          </p>

          <p className='py-2 text-justify'>
            * Vendors can showcase their products in the Plus Retail application and sell online using the Plus
            E-Commerce platform. Plus Retail provides an opportunity for local business owners to offer a facility
            where customers can view and order products online from the comfort of their home with doorstep delivery.
          </p>

          <p className='py-2 text-justify'>
            * Users can download the application for free, register with a vendor using their ID, and view products,
            offers, discounts, and place orders directly from their mobile.
          </p>

          <p className='py-2'>* Plus Retail e-commerce platform is ideal for any retail business like</p>
          <ul className="list-unstyled mb-4 ps-3">
            <li className='pt-1'>-Super Market</li>
            <li className='pt-1'>-Mobile Phones</li>
            <li className='pt-1'>-Mobile Accessories</li>
            <li className='pt-1'>-Laptops, Computer Accessories & Tablets</li>
            <li className='pt-1'>-Electronic Gadgets</li>
            <li className='pt-1'>-Home & Kitchen Appliances</li>
            <li className='pt-1'>-Readymade Clothing</li>
            <li className='pt-1'>-Luggage</li>
            <li className='pt-1'>-Personal Care</li>
            <li className='pt-1'>-Fashion & Jewelry</li>
            <li className='pt-1'>-Furniture etc..</li>
          </ul>

          <h4 className='py-2'>Install Plus Retail app for unique benefits</h4>
          <p className='py-3 text-justify'>
            Simply download the Plus Retail app on your device (phone or tablet) and create an account by entering the
            vendor ID. You'll be taken to the Home screen with links to all category products, along with amazing offers,
            deals, and discounts uploaded by the vendor.
          </p>

          <ol>
            <li>Type the product name in the ‘Search’ tab and find it instantly.</li>
            <li>Add products to cart. It will be saved until they checkout.</li>
            <li>Submit Order.</li>
            <li>Track orders inside the app, get notifications, and order status.</li>
          </ol>

          <div className="d-flex flex-wrap gap-2 mt-4 pb-20">

              <Link to="" className='desktopproduct-button'>
                  <img src={icon1} alt="check" className="me-2" />
                  Broucher Download
                </Link>
                <Link to="" className='desktopproduct-button' >
                  <img src={icon1} alt="check" className="me-2" />
                  Download Software
                </Link>
            {/* <Link to="#" className="btn btn-secondary">✓ More Details</Link>
            <Link to="#" className="btn btn-secondary">✓ Broucher Download</Link>
            <Link to="#" className="btn btn-secondary">✓ Download Software</Link>
            <Link to="#" className="btn btn-secondary">✓ FAQ</Link> */}
          </div>
        </div>
      </div>
    </div>

      </section>
    </>
  );
}

export default DesktopProducts;
