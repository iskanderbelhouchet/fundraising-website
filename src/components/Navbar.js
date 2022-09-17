import React from 'react'

function Navbar () {
  return (
    <div>
      <header className='site-header sticky-header'>
        <div className='navbar-wrapper'>
          <div className='container'>
            <div className='navbar-inner'>
              <div className='site-logo'>
                <a href='index.html'><img src='dist/img/logo.png' alt='Funden' /></a>
              </div>
              <div className='nav-menu'>
                <ul>
                  <li className='current'>
                    <a href='/'>Home</a>
                  </li>
                  <li>
                    <a href='project-1.html'>Participate</a>
                    <ul className='submenu'>
                      <li><a href='project-1.html'>House</a></li>
                      <li><a href='project-2.html'>Fuel</a></li>
                      <li><a href='project-3.html'>Food</a></li>
                      <li><a href='project-details.html'>Bills</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href='/Story'>Story</a>
                    <ul className='submenu'>
                      <li><a href='/Story'>Tell Your Story</a></li>
                      <li><a href='/Story'>Tell Someone Else</a></li>
                      <li><a href='/Story'>Homeless Story</a></li>
                      <li><a href='/Story'>Charity</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href='/Storydetails'>Donation</a>
                    <ul className='submenu'>
                      <li><a href='/Storydetails'>Sign Up Your Charity</a></li>
                      <li><a href='/Storydetails'>Sign Up Your Hospital </a></li>
                      <li><a href='/Storydetails'>Sign Up Your Homecare </a></li>
                      <li><a href='/Storydetails'>Sign Up Your School </a></li>
                      <li><a href='/Storydetails'>Sign Up Your University </a></li>
                      <li><a href='/Storydetails'>Sign Up Your College </a></li>
                      <li><a href='/Storydetails'>Sign Up Your Scientific Project </a></li>
                      <li><a href='/Storydetails'>Sign Up Your Childcare </a></li>
                    </ul>
                  </li>
                  <li>
                    <a href='#'>Winners</a>
                    <ul className='submenu'>
                      <li><a href='about.html'>About</a></li>
                      <li><a href='company-overview.html'>Company Overview</a></li>
                      <li><a href='team-member.html'>Team Member</a></li>
                      <li><a href='pricing.html'>Pricing</a></li>
                      <li><a href='faq.html'>FAQ</a></li>
                      <li><a href='testimonial.html'>Testimonials</a></li>
                    </ul>
                  </li>
                  <li><a href='contact.html'>Chat</a></li>
                  <li><a href='/Contactus'>Contact us</a></li>
                </ul>
              </div>
              <div className='navbar-extra d-flex align-items-center'>
                <a href='/Login' className='main-btn nav-btn button d-none d-sm-inline-block'>
                  Account <i className='far fa-arrow-right' />
                </a>
                <a href='#' className='nav-toggler' />
              </div>
            </div>
          </div>
        </div>
        <div className='mobile-menu-panel'>
          <div className='panel-logo'>
            <a href='index.html'><img src='assets/img/logo-white.png' alt='Funden' /></a>
          </div>
          <ul className='panel-menu'>
            <li className='current'>
              <a href='index.html'>Home</a>
              <ul className='submenu'>
                <li><a href='index.html'>Home One</a></li>
                <li><a href='index-2.html'>Home Two</a></li>
              </ul>
            </li>
            <li>
              <a href='project-1.html'>Project</a>
              <ul className='submenu'>
                <li><a href='project-1.html'>Project One</a></li>
                <li><a href='project-2.html'>Project Two</a></li>
                <li><a href='project-3.html'>Project Three</a></li>
                <li><a href='project-details.html'>Project Details</a></li>
              </ul>
            </li>
            <li>
              <a href='events.html'>Events</a>
            </li>
            <li>
              <a href='news-standard.html'>News</a>
              <ul className='submenu'>
                <li><a href='news-standard.html'>News Standard</a></li>
                <li><a href='news-details.html'>News Details</a></li>
              </ul>
            </li>
            <li>
              <a href='#'>Pages</a>
              <ul className='submenu'>
                <li><a href='about.html'>About</a></li>
                <li><a href='company-overview.html'>Company Overview</a></li>
                <li><a href='team-member.html'>Team Member</a></li>
                <li><a href='pricing.html'>Pricing</a></li>
                <li><a href='faq.html'>FAQ</a></li>
              </ul>
            </li>
            <li><a href='/Contactus'>Contact</a></li>
          </ul>
          <div className='panel-extra'>
            <a href='#' className='main-btn btn-white'>
              Donate Now <i className='far fa-arrow-right' />
            </a>
          </div>
          <a href='#' className='panel-close'>
            <i className='fal fa-times' />
          </a>
        </div>
      </header>
    </div>
  )
}

export default Navbar
