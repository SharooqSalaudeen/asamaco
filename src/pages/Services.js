import React from "react";
import { Link } from "react-router-dom";

import ServiceGrid from "../components/ServiceGrid";

export default function Services() {
  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header dtable text-center header-transparent pheader-services">
          <div className="dcell">
            <div className="container">
              <h1 className="page-title">Our Services</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li className="active">Our Services</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="services-benefits">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0">
              <div className="benefits-sidebar">
                <div className="ot-heading ">
                  <span>[ our benefits ]</span>
                  <h2 className="main-heading">
                    Ambitious Studio with a Successful Concept &amp; Ideas
                  </h2>
                </div>
                {/* <div className="ot-button">
                  <a
                    href="portfolio-masonry.html"
                    className="octf-btn octf-btn-dark"
                  >
                    View Projects
                  </a>
                </div> */}
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              <div className="benefits-content">
                <div className="row mb-md-70">
                  <div className="col-md-6 col-sm-12">
                    <div className="icon-box icon-box--classic icon-box--icon-top mb-4 mb-md-0">
                      <div className="icon-main">
                        <span className="ot-flaticon-sphere" />
                      </div>
                      <div className="content-box">
                        <h5
                          className="title-link"
                          style={{ cursor: "default" }}
                        >
                          {/* <a href="#" className="title-link"> */}
                          Customer Focus
                          {/* </a> */}
                        </h5>
                        <p>
                          Customers choose us for the simplicity of
                          communication and an understanding of what it’s
                          necessary to receive in the end.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="icon-box icon-box--classic icon-box--icon-top mb-4 mb-md-0">
                      <div className="icon-main">
                        <span className="ot-flaticon-measure" />
                      </div>
                      <div className="content-box">
                        <h5
                          className="title-link"
                          style={{ cursor: "default" }}
                        >
                          {/* <a href="#" className="title-link"> */}
                          Professionalism
                          {/* </a> */}
                        </h5>
                        <p>
                          We develop a full cycle of project documentation: an
                          outline sketch, a design project, working
                          documentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <div className="icon-box icon-box--classic icon-box--icon-top mb-4 mb-md-0">
                      <div className="icon-main">
                        <span className="ot-flaticon-home" />
                      </div>
                      <div className="content-box">
                        <h5
                          className="title-link"
                          style={{ cursor: "default" }}
                        >
                          {/* <a href="#" className="title-link"> */}
                          Multi Experience
                          {/* </a> */}
                        </h5>
                        <p>
                          We provide a wide range of services, we work in
                          different styles, we project commercial and
                          residential properties.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="icon-box icon-box--classic icon-box--icon-top mb-0">
                      <div className="icon-main">
                        <span className="ot-flaticon-house" />
                      </div>
                      <div className="content-box">
                        <h5
                          className="title-link"
                          style={{ cursor: "default" }}
                        >
                          {/* <a href="#" className="title-link"> */}
                          Author`s Supervision
                          {/* </a> */}
                        </h5>
                        <p>
                          We develop an attractive and convenient space for work
                          and leisure time, working on units, selecting
                          materials, manufacturers.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="space-medium bg-dark-1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <div className="icon-box icon-box--bg-color icon-box--icon-left">
                <div className="icon-main">
                  <span className="ot-flaticon-diamond" />
                </div>
                <div className="content-box">
                  <h5>Professionalism</h5>
                  <p>Certified high-class specialists.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
              <div className="icon-box icon-box--bg-color icon-box--icon-left">
                <div className="icon-main">
                  <span className="ot-flaticon-box" />
                </div>
                <div className="content-box">
                  <h5>Experience &amp; Skills</h5>
                  <p>Certified high-class specialists.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="icon-box icon-box--bg-color icon-box--icon-left">
                <div className="icon-main">
                  <span className="ot-flaticon-3d-2" />
                </div>
                <div className="content-box">
                  <h5>Customer Focus</h5>
                  <p>Certified high-class specialists.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="principes no-padding">
        <div className="row m-0">
          <div className="col-xl-6 col-lg-12 col-md-12 p-0 text-center align-self-center">
            <img src="/images/service-page/image1-service.jpg" alt="" />
          </div>
          <div className="col-xl-6 col-lg-12 col-md-12 p-0 mt-5 mt-lg-0 align-self-center">
            <div className="main-principes">
              <div className="ot-heading is-dots">
                <span>[ main principes ]</span>
                <h2 className="main-heading">A Sketch of Each Detail</h2>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                  <div className="process-classic">
                    <span>01</span>
                    <h6>Apartment Design</h6>
                    <p>
                      We’re committed to building sustainable and high-quality
                      Java solutions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                  <div className="process-classic">
                    <span>02</span>
                    <h6>Office Design</h6>
                    <p>
                      We’re committed to building sustainable and high-quality
                      Java solutions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                  <div className="process-classic mb-4 mb-md-0">
                    <span>03</span>
                    <h6>Shop Design</h6>
                    <p>
                      We’re committed to building sustainable and high-quality
                      Java solutions.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="process-classic mb-md-0">
                    <span>04</span>
                    <h6>House Design</h6>
                    <p>
                      We’re committed to building sustainable and high-quality
                      Java solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-feature">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 align-self-center mb-5 mb-xl-0">
              <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover s2 text-center">
                    <div className="icon-main">
                      <span className="ot-flaticon-tip" />
                    </div>
                    <div className="content-box">
                      <h5>MAKING IDEA</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover s2 text-center">
                    <div className="icon-main">
                      <span className="ot-flaticon-3d-1" />
                    </div>
                    <div className="content-box">
                      <h5>3D MODELING</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover s2 text-center">
                    <div className="icon-main">
                      <span className="ot-flaticon-type-1" />
                    </div>
                    <div className="content-box">
                      <h5>PROTOTYPING</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover s2 text-center mb-0">
                    <div className="icon-main">
                      <span className="ot-flaticon-house-1" />
                    </div>
                    <div className="content-box">
                      <h5>PLANNING</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
                  <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover s2 text-center mb-0">
                    <div className="icon-main">
                      <span className="ot-flaticon-paint" />
                    </div>
                    <div className="content-box">
                      <h5>DESIGNING</h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 last">
                  <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover s2 text-center mb-0">
                    <div className="icon-main">
                      <span className="ot-flaticon-paint-1" />
                    </div>
                    <div className="content-box">
                      <h5>BUILDING</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 align-self-center">
              <div className="feature-content">
                <div className="ot-heading">
                  <span>[ features ]</span>
                  <h2 className="main-heading text-light">
                    Our Philosophy in Simply and Quality Design
                  </h2>
                </div>
                <div className="ot-tabs tabs-light">
                  <ul className="tabs-heading unstyle">
                    <li className="tab-link current" data-tab="tab-1">
                      awards
                    </li>
                    <li className="tab-link" data-tab="tab-2">
                      concept
                    </li>
                    <li className="tab-link" data-tab="tab-3">
                      history
                    </li>
                  </ul>
                  <div id="tab-1" className="tab-content current">
                    <ul>
                      <li>Best Office Interior Design in New York,, 2018</li>
                      <li>
                        Between tradition and innovation, Dutch Design Week,
                        2017
                      </li>
                      <li>
                        CUBE project, Best Home Design List in Germany, 2015
                      </li>
                      <li>International Industrial Design Award, 2015</li>
                    </ul>
                  </div>
                  <div id="tab-2" className="tab-content">
                    <ul>
                      <li>
                        Between tradition and innovation, Dutch Design Week,
                        2019
                      </li>
                      <li>Best Office Interior Design in New York,, 2018</li>
                      <li>International Industrial Design Award, 2015</li>
                      <li>
                        CUBE project, Best Home Design List in Germany, 2013
                      </li>
                    </ul>
                  </div>
                  <div id="tab-3" className="tab-content">
                    <ul>
                      <li>Beginning Our Services, 2006</li>
                      <li>Offering More Services, 2008</li>
                      <li>Opening Our First Branch Office, 2009</li>
                      <li>Expansion and Transformations, 2011</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>
    </div>
  );
}
