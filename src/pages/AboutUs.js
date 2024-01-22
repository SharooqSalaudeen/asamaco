import React from "react";
import { Link } from "react-router-dom";

import FactsCounter from "../components/FactsCounter";

export default function AboutUs() {
  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header dtable text-center header-transparent pheader-about">
          <div className="dcell">
            <div className="container">
              <h1 className="page-title">About Us</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="about-company">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 align-self-center text-center mb-5 mb-lg-0">
              <div className="about-img">
                <img src="/images/about/asama-aboutus.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 align-self-center">
              <div className="about-detail">
                <div className="ot-heading is-dots">
                  <span>[ about company ]</span>
                  <h2 className="main-heading">Best Interior Solutions</h2>
                </div>
                <p>
                  The basic philosophy of our studio is to create individual,
                  aesthetically stunning solutions for our customers by
                  lightning-fast development of projects employing unique styles
                  and architecture. Even if you don’t have a ready sketch of
                  what you want – we will help you to get the result you dreamed
                  of.
                </p>
                {/* <div className="ot-button">
                  <a
                    href="portfolio-masonry.html"
                    className="octf-btn octf-btn-dark border-hover-dark"
                  >
                    View Projects
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="our-philosophy">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 theratio-align-center text-center">
              <div className="ot-heading is-dots">
                <span>[ company strategy ]</span>
                <h2 className="main-heading text-light">Our Philosophy</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5 mb-xl-0">
              <div className="support-box">
                <div className="inner-box">
                  <div className="overlay flex-middle">
                    <div className="inner">
                      <p>
                        We call our style ‘live minimalism’. Live minimalism is
                        not about a or visual look. It refers to inner feelings,
                        to your true self.
                      </p>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="icon-title">
                      <span className="ot-flaticon-brickwall" />
                      <h5>Our Missions</h5>
                    </div>
                    <img src="/images/about/support1.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 mb-5 mb-xl-0">
              <div className="support-box">
                <div className="inner-box">
                  <div className="overlay flex-middle">
                    <div className="inner">
                      <p>
                        We call our style ‘live minimalism’. Live minimalism is
                        not about a or visual look. It refers to inner feelings,
                        to your true self.
                      </p>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="icon-title">
                      <span className="ot-flaticon-paint" />
                      <h5>Our Vision</h5>
                    </div>
                    <img src="/images/about/support2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="support-box">
                <div className="inner-box">
                  <div className="overlay flex-middle">
                    <div className="inner">
                      <p>
                        We call our style ‘live minimalism’. Live minimalism is
                        not about a or visual look. It refers to inner feelings,
                        to your true self.
                      </p>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="icon-title">
                      <span className="ot-flaticon-cube" />
                      <h5>Our Values</h5>
                    </div>
                    <img
                      src="/images/about/support2.jpg"
                      className="attachment-full size-full lazyloaded"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-counter">
        <div className="container">
          <FactsCounter />
        </div>
      </section>
      {/* <section className="how-it-work">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12 mb-5 mb-lg-0 align-self-center">
              <div className="work-content">
                <div className="ot-heading is-dots">
                  <span>[ how it works ]</span>
                  <h2 className="main-heading">From Sketch to Life</h2>
                </div>
                <div className="ot-accordions">
                  <div className="acc-item">
                    <div className="acc-toggle flex-middle" data-default="yes">
                      What is 3D desing and how it work?
                      <span className="down">
                        <i className="fas fa-plus" />
                      </span>
                      <span className="up">
                        <i className="fas fa-minus" />
                      </span>
                    </div>
                    <div className="acc-content">
                      The basic philosophy of our studio is to create
                      individual, aesthetically stunning solutions for our
                      customers by lightning-fast development of projects
                      employing unique styles.
                    </div>
                  </div>
                  <div className="acc-item">
                    <div className="acc-toggle flex-middle">
                      How interior design is cost?
                      <span className="down">
                        <i className="fas fa-plus" />
                      </span>
                      <span className="up">
                        <i className="fas fa-minus" />
                      </span>
                    </div>
                    <div className="acc-content">
                      The basic philosophy of our studio is to create
                      individual, aesthetically stunning solutions for our
                      customers by lightning-fast development of projects
                      employing unique styles.
                    </div>
                  </div>
                  <div className="acc-item">
                    <div className="acc-toggle flex-middle">
                      How much time I will spend on planning?
                      <span className="down">
                        <i className="fas fa-plus" />
                      </span>
                      <span className="up">
                        <i className="fas fa-minus" />
                      </span>
                    </div>
                    <div className="acc-content">
                      The basic philosophy of our studio is to create
                      individual, aesthetically stunning solutions for our
                      customers by lightning-fast development of projects
                      employing unique styles.
                    </div>
                  </div>
                  <div className="acc-item">
                    <div className="acc-toggle flex-middle">
                      Can I create custom design?
                      <span className="down">
                        <i className="fas fa-plus" />
                      </span>
                      <span className="up">
                        <i className="fas fa-minus" />
                      </span>
                    </div>
                    <div className="acc-content">
                      The basic philosophy of our studio is to create
                      individual, aesthetically stunning solutions for our
                      customers by lightning-fast development of projects
                      employing unique styles.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12" style={{ zIndex: "-1" }}>
              <div className="work-img">
                <img src="/images/about/image2-aboutus.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
