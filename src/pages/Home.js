import React from "react";
// import Slider from "../components/homeSections/Slider";

export default function Home() {
  return (
    <div>
      {/* <div id="royal_preloader" /> */}

      <div id="content" className="site-content">
        <div className="page-header dtable text-center header-transparent page-header-contact">
          <div className="dcell">
            <div className="container">
              <h1 className="page-title">Home</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <a href="index.html">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Slider /> */}
        <section className="about-3 p-xl-0 pb-sm-0">
          <div className="grid-lines grid-lines-vertical">
            <span className="g-line-vertical line-left color-line-default" />
            <span className="g-line-vertical line-right color-line-default" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12 mb-5 mb-lg-0 align-self-center">
                <div className="about-img-3">
                  <img src="https://via.placeholder.com/716x611.png" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 align-self-center">
                <div className="about-content-3 ml-xl-70">
                  <div className="ot-heading is-dots">
                    <span>[ main principes ]</span>
                    <h2 className="main-heading">A Sketch of Each Detail</h2>
                  </div>
                  <div className="space-20" />
                  <div className="space-5" />
                  <p>
                    The basic philosophy of our studio is to create individual,
                    aesthetically stunning solutions for our customers by
                    lightning-fast development of projects employing unique
                    styles.
                  </p>
                  <div className="space-20" />
                  <div className="row">
                    <div className="col-md-6 col-sm-12 mb-5 mb-md-0">
                      <div className="icon-box icon-box--classic icon-box--icon-top pr-4">
                        <div className="icon-main">
                          <span className="ot-flaticon-3d" />
                        </div>
                        <div className="content-box">
                          <h5>
                            <a href="about-us.html">3D Visualization</a>
                          </h5>
                          <p>
                            3D sketch of each detail of your future interior.
                          </p>
                        </div>
                        <div className="link-box">
                          <a href="about-us.html" className="btn-details">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <div className="icon-box icon-box--classic icon-box--icon-top">
                        <div className="icon-main">
                          <span className="ot-flaticon-blueprint" />
                        </div>
                        <div className="content-box">
                          <h5>
                            <a href="about-us.html">Individual Project</a>
                          </h5>
                          <p>
                            The basic philosophy of studio is to create
                            individual design.
                          </p>
                        </div>
                        <div className="link-box">
                          <a href="about-us.html" className="btn-details">
                            READ MORE
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-skill-3 pb-0">
          <div className="grid-lines grid-lines-vertical">
            <span className="g-line-vertical line-left color-line-default" />
            <span className="g-line-vertical line-right color-line-default" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12">
                <div className="our-skill-content-3 mr-xl-70">
                  <div className="ot-heading is-dots">
                    <span>[ our skills ]</span>
                    <h2 className="main-heading">The Core Company Values</h2>
                  </div>
                  <div className="space-20" />
                  <div className="space-5" />
                  <p>
                    We are constantly growing, learning, and improving and our
                    partners are steadily increasing. 200 projects is a sizable
                    number.
                  </p>
                  <div className="space-20" />
                  <div
                    className="ot-progress pb-3"
                    data-percent={65}
                    data-processed="true"
                  >
                    <div className="overflow">
                      <span className="pname f-left">interior sketch</span>
                    </div>
                    <div className="iprogress">
                      <div className="progress-bar">
                        <span className="ppercent">65%</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ot-progress pb-3"
                    data-percent={85}
                    data-processed="true"
                  >
                    <div className="overflow">
                      <span className="pname f-left">3D Modeling</span>
                    </div>
                    <div className="iprogress">
                      <div className="progress-bar">
                        <span className="ppercent">85%</span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="ot-progress pb-3"
                    data-percent={55}
                    data-processed="true"
                  >
                    <div className="overflow">
                      <span className="pname f-left">2D Planning</span>
                    </div>
                    <div className="iprogress">
                      <div className="progress-bar">
                        <span className="ppercent">55%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 align-self-center">
                <img src="https://via.placeholder.com/630x520.png" alt="" />
              </div>
              <div className="space-150" />
            </div>
          </div>
        </section>
        <section className="services-3">
          <div className="grid-lines grid-lines-vertical">
            <span className="g-line-vertical line-left color-line-default" />
            <span className="g-line-vertical line-right color-line-default" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center theratio-align-center">
                <div className="ot-heading is-dots">
                  <span>[ OUR SERVICES ]</span>
                  <h2 className="main-heading">What Can We Offer</h2>
                </div>
                <div className="space-50" />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-1 text-center mb-30">
                  <div className="icon-main">
                    <img src="https://via.placeholder.com/74x84.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h5>
                      <a href="servcies-detail-1.html">Design &amp; Planning</a>
                    </h5>
                    <p>We will help you to get the result you dreamed of.</p>
                  </div>
                  <div className="link-box">
                    <a href="servcies-detail-1.html" className="btn-details">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-2 text-center mb-30">
                  <div className="icon-main">
                    <img src="https://via.placeholder.com/74x84.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h5>
                      <a href="servcies-detail-1.html">Custom Solutions</a>
                    </h5>
                    <p>
                      Individual, aesthetically stunning solutions for
                      customers.
                    </p>
                  </div>
                  <div className="link-box">
                    <a href="servcies-detail-1.html" className="btn-details">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-3 text-center mb-30">
                  <div className="icon-main">
                    <img src="https://via.placeholder.com/74x84.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h5>
                      <a href="servcies-detail-1.html">Furniture &amp; Decor</a>
                    </h5>
                    <p>We create and produce our product design lines.</p>
                  </div>
                  <div className="link-box">
                    <a href="servcies-detail-1.html" className="btn-details">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-4 text-center mb-30 mb-lg-0">
                  <div className="icon-main">
                    <img src="https://via.placeholder.com/74x84.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h5>
                      <a href="servcies-detail-1.html">Furniture &amp; Decor</a>
                    </h5>
                    <p>We create and produce our product design lines.</p>
                  </div>
                  <div className="link-box">
                    <a href="servcies-detail-1.html" className="btn-details">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-5 text-center mb-30 mb-md-0">
                  <div className="icon-main">
                    <img src="https://via.placeholder.com/74x84.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h5>
                      <a href="servcies-detail-1.html">Furniture &amp; Decor</a>
                    </h5>
                    <p>We create and produce our product design lines.</p>
                  </div>
                  <div className="link-box">
                    <a href="servcies-detail-1.html" className="btn-details">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-6 text-center  mb-30 mb-md-0">
                  <div className="icon-main">
                    <img src="https://via.placeholder.com/74x84.png" alt="" />
                  </div>
                  <div className="content-box">
                    <h5>
                      <a href="servcies-detail-1.html">Furniture &amp; Decor</a>
                    </h5>
                    <p>We create and produce our product design lines.</p>
                  </div>
                  <div className="link-box">
                    <a href="servcies-detail-1.html" className="btn-details">
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
              <div className="space-80" />
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0">
                <div className="ot-counter">
                  <div>
                    <span>[</span>
                    <span className="num" data-to={180} data-time={2000}>
                      180
                    </span>
                    <span>+]</span>
                  </div>
                  <h6>Current Clients</h6>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0">
                <div className="ot-counter">
                  <div>
                    <span>[</span>
                    <span className="num" data-to={10} data-time={2000}>
                      10
                    </span>
                    <span>+]</span>
                  </div>
                  <h6>years of experience</h6>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-4 mb-sm-0">
                <div className="ot-counter">
                  <div>
                    <span>[</span>
                    <span className="num" data-to={35} data-time={2000}>
                      35
                    </span>
                    <span>+]</span>
                  </div>
                  <h6>awards winning</h6>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
                <div className="ot-counter">
                  <div>
                    <span>[</span>
                    <span className="num" data-to={5} data-time={2000}>
                      5
                    </span>
                    <span>+]</span>
                  </div>
                  <h6>Offices Worldwide</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="no-padding d-none d-xl-block">
          <div className="grid-lines grid-lines-vertical">
            <span className="g-line-vertical line-left color-line-default" />
            <span className="g-line-vertical line-right color-line-default" />
          </div>
          <div className="container-fluid px-xl-90">
            <img src="https://via.placeholder.com/1920x441.png" alt="" />
          </div>
        </div>
      </div>

      {/* #page */}
    </div>
  );
}
