import React from 'react'

function Home () {
  return (
    <div>
      {/* ====== Hero Area Start ====== */}
      <section className='hero-area-one'>
        <div className='hero-text'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-xl-10'>
                <span className='tagline wow fadeInUp' data-wow-delay='0.3s'>Prizes every month!</span>
                <h1 className='title wow fadeInUp' data-wow-delay='0.4s'>It's easier to take <br /> than to give.</h1>
                <a href='project-1.html' className='main-btn wow fadeInUp' data-wow-delay='0.5s'>
                  Explore Stories <i className='far fa-arrow-right' />
                </a>
              </div>
            </div>
          </div>
          <div className='hero-shapes'>
            <div className='hero-line-one'>
              <img src='dist/img/hero/hero-line.png' alt='Line' />
            </div>
            <div className='hero-line-two'>
              <img src='dist/img/hero/hero-line-2.png' alt='Line' />
            </div>
            <div className='dot-one' />
            <div className='dot-two' />
          </div>
        </div>
      </section>
      {/* ====== Hero Area End ====== */}
      {/* ====== Counter Area Start ====== */}
      <section className='counter-section-one mt-negative'>
        <div className='container primary-bg'>
          <div className='row counter-boxes justify-content-xl-between justify-content-center'>
            <div className='col-xl-auto col-lg-5 col-md-5 col-sm-6'>
              <div className='counter-box mb-40 icon-left'>
                <div className='icon white-color'>
                  <i className='flaticon-crowdfunding' />
                </div>
                <div className='content white-color'>
                  <div className='count-wrap'>
                    <span className='count'>0</span>
                    <span className='suffix'>+</span>
                  </div>
                  <h6 className='title'>We’ve Project Complate</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-auto col-lg-5 col-md-5 col-sm-6'>
              <div className='counter-box mb-40 icon-left'>
                <div className='icon white-color'>
                  <i className='flaticon-crowdfunding' />
                </div>
                <div className='content white-color'>
                  <div className='count-wrap'>
                    <span className='count'>0</span>
                    <span className='suffix'>+</span>
                  </div>
                  <h6 className='title'>Global Partners</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-auto col-lg-5 col-md-5 col-sm-6'>
              <div className='counter-box mb-40 icon-left'>
                <div className='icon white-color'>
                  <i className='flaticon-crowdfunding' />
                </div>
                <div className='content white-color'>
                  <div className='count-wrap'>
                    <span className='count'>0</span>
                    <span className='suffix'>+</span>
                  </div>
                  <h6 className='title'>Awards Winning</h6>
                </div>
              </div>
            </div>
            <div className='col-xl-auto col-lg-5 col-md-5 col-sm-6'>
              <div className='counter-box mb-40 icon-left'>
                <div className='icon white-color'>
                  <i className='flaticon-crowdfunding' />
                </div>
                <div className='content white-color'>
                  <div className='count-wrap'>
                    <span className='count'>0</span>
                    <span className='suffix'>+</span>
                  </div>
                  <h6 className='title'>Active Volunteer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Counter Area End ====== */}
      {/* ====== About Section Start ====== */}
      <section className='about-section-one'>
        <div className='container'>
          <div className='row align-items-center justify-content-lg-start justify-content-center'>
            <div className='col-xl-6 col-lg-7 col-md-9'>
              <div className='about-img'>
                <img id='big' src='dist/img/about/5.png' alt='img' />
              </div>
            </div>
            <div className='col-xl-4 col-lg-5 col-md-10 offset-xl-1'>
              <div className='about-text mt-md-70 mb-md-50'>
                <div className='common-heading mb-30'>
                  <span className='tagline'>
                    <i className='fas fa-plus' /> who we are
                    <span className='heading-shadow-text'>who we are</span>
                  </span>
                  <h2 className='title'>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. malesuada fames ac turpis egestas.
                </p>
                <div className='author-note wow fadeInUp'>
                  <ul>
                    <li><i className='far fa-check' /> Non-Profite Supported</li>
                    <li><i className='far fa-check' /> We're Successful donation platform </li>
                  </ul>
                  <div className='author-info'>
                    <div className='author-img'>
                      <img src='dist/img/author-thumbs/01.jpg' alt='img' />
                    </div>
                    <h5 className='name'>Marius L. Lorem</h5>
                    <span className='title'>CEO &amp; Founder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== About Section End ====== */}

      {/* ====== Testimonials Start ====== */}
      <section className='testimonials-section section-gap'>
        <div className='container'>
          <div className='row align-items-center justify-content-center'>
            <div className='col-xl-4 col-lg-6 col-md-8 col-sm-10'>
              <div className='testimonials-content mb-lg-50'>
                <div className='common-heading mb-30'>
                  <span className='tagline'>
                    <i className='fas fa-plus' /> What is our goal
                    <span className='heading-shadow-text'>What is our goal</span>
                  </span>
                  <h2 className='title'>Our Goal</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. malesuada fames ac turpis egestas.
                </p>
                <a href='testimonial.html' className='main-btn mt-35'> Start Now <i className='far fa-arrow-right' /></a>

              </div>
            </div>
            <div className='col-xl-8 col-lg-10'>
              <div className='testimonial-boxes square-shape'>
                <div className='row  justify-content-center'>
                  <div className='col-lg-6 col-md-6 col-sm-10'>
                    <div className='testimonial-box-one wow fadeInUp' data-wow-delay='0s'>
                      <div className='author-info'>
                        <div className='author-img'>
                          <img src='dist/img/author-thumbs/01.jpg' alt='Thumb' />
                        </div>
                        <div>
                          <h5 className='name'>Lorem ipsum</h5>
                          <p className='position'>dolor sit amet</p>
                        </div>
                      </div>
                      <p className='testimonial-desc'>
                        Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                      </p>
                    </div>
                    <div className='testimonial-box-one mt-30 wow fadeInUp' data-wow-delay='0.1s'>
                      <div className='author-info'>
                        <div className='author-img'>
                          <img src='dist/img/author-thumbs/03.jpg' alt='Thumb' />
                        </div>
                        <div>
                          <h5 className='name'>Lorem ipsum</h5>
                          <p className='position'>dolor sit amet</p>
                        </div>
                      </div>
                      <p className='testimonial-desc'>
                        Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-10'>
                    <div className='testimonial-box-one mt-30 wow fadeInUp' data-wow-delay='0.2s'>
                      <div className='author-info'>
                        <div className='author-img'>
                          <img src='dist/img/author-thumbs/02.jpg' alt='Thumb' />
                        </div>
                        <div>
                          <h5 className='name'>Lorem ipsum</h5>
                          <p className='position'>dolor sit amet</p>
                        </div>
                      </div>
                      <p className='testimonial-desc'>
                        Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                      </p>
                    </div>
                    <div className='testimonial-box-one mt-30 wow fadeInUp' data-wow-delay='0.3s'>
                      <div className='author-info'>
                        <div className='author-img'>
                          <img src='dist/img/author-thumbs/04.jpg' alt='Thumb' />
                        </div>
                        <div>
                          <h5 className='name'>Lorem ipsum</h5>
                          <p className='position'>dolor sit amet</p>
                        </div>
                      </div>
                      <p className='testimonial-desc'>
                        Lorem ipsum dolor sit amet,Et magnis dis parturient montes nascetur. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Testimonials End ====== */}

      {/* ====== Emergency Project & CTA Start ====== */}
      <section className='emergency-project-with-cta pt-5'>
        <div className='container'>
          {/* Call to Action */}
          <div className='common-heading text-center mb-60'>
            <span className='tagline'>
              <i className='fas fa-plus' /> Our Story
              <span className='heading-shadow-text'>Our Story</span>
            </span>
            <h2 className='title'>Presentation Video</h2>
          </div>
          <div className='cta-box'>
            <div className='row justify-content-center'>
              <iframe width='1000' height='500' src='https://www.youtube.com/embed/ySF6CDtxYOM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen />
            </div>
          </div>
        </div>
        <div className='emergency-project-slider'>
          <div className='container'>
            <div className='common-heading text-center mb-60'>
              <span className='tagline'>
                <i className='fas fa-plus' /> What Are our Terms and Conditions
                <span className='heading-shadow-text'>What Are our Terms and Conditions</span>
              </span>
              <h2 className='title'>Terms & Conditions</h2>
            </div>
            <div className='row project-slider-two project-items project-style-four'>
              <div className='col'>
                <div className='project-item'>
                  <div className='content'>
                    <div className='cats'>
                      <a href='fake-url'>TERMS</a>
                    </div>
                    <h5 className='title'>
                      <a href='project-details.html'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
                    </h5>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className='project-item'>
                  <div className='content'>
                    <div className='cats'>
                      <a href='fake-url'>CONDITIONS</a>
                    </div>
                    <h5 className='title'>
                      <a href='project-details.html'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Emergency Project & CTA End ====== */}
    </div>

  )
}

export default Home
