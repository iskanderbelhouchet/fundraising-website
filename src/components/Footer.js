import React from 'react'

function Footer () {
  return (
    <footer className='site-footer'>
      <div className='footer-content-area'>
        <div className='container'>
          <div className='footer-widgets'>
            <div className='row justify-content-between'>
              <div className='col-xl-3 col-lg-4 col-md-6'>
                <div className='widget about-widget'>
                  <div className='footer-logo'>
                    <img src='assets/img/logo-white.png' alt='Funden' />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. ac turpis egestas.
                  </p>
                  <div className='newsletter-form'>
                    <h5 className='form-title'>Join Newsletters</h5>
                    <form action='#'>
                      <input type='text' placeholder='Email Address' />
                      <button type='submit'><i className='far fa-arrow-right' /></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 col-md-5 col-sm-6'>
                <div className='widget nav-widget'>
                  <h4 className='widget-title'>Explore</h4>
                  <ul>
                    <li><a href='project-1.html'>Home</a></li>
                    <li><a href='project-2.html'>Participate</a></li>
                    <li><a href='project-1.html'>Story </a></li>
                    <li><a href='project-3.html'>Donation</a></li>
                    <li><a href='project-2.html'>Winners</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-sm-6'>
                <div className='widget nav-widget'>
                  <h4 className='widget-title'>Legal</h4>
                  <ul>
                    <li><a href='about.html'>Privacy Policy</a></li>
                    <li><a href='contact.html'>Terms and Conditions</a></li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-auto col-md-5 col-sm-8'>
                <div className='widget contact-widget'>
                  <h4 className='widget-title'>Contact Us</h4>
                  <ul className='info-list'>
                    <li>
                      <span className='icon'><i className='far fa-phone' /></span>
                      <span className='info'>
                        <span className='info-title'>Phone Number</span>
                        <a href='#'>+012(345) 78 93</a>
                      </span>
                    </li>
                    <li>
                      <span className='icon'><i className='far fa-envelope-open' /></span>
                      <span className='info'>
                        <span className='info-title'>Email Address</span>
                        <a href='#'>support@gmail.com</a>
                      </span>
                    </li>
                    <li>
                      <span className='icon'><i className='far fa-map-marker-alt' /></span>
                      <span className='info'>
                        <span className='info-title'>Locations</span>
                        <a href='#'>59 Main Street, USA</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright-area'>
            <div className='row flex-md-row-reverse'>
              <div className='col-md-6'>
                <ul className='social-icons'>
                  <li><a href='#'><i className='fab fa-facebook-f' /></a></li>
                  <li><a href='#'><i className='fab fa-twitter' /></a></li>
                  <li><a href='#'><i className='fab fa-youtube' /></a></li>
                  <li><a href='#'><i className='fab fa-behance' /></a></li>
                  <li><a href='#'><i className='fab fa-google-plus-g' /></a></li>
                </ul>
              </div>
              <div className='col-md-6'>
                <p className='copyright-text'>© 2022 <a href='#'>Marius</a>. All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer
