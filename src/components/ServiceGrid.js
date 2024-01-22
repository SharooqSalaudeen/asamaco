import React from "react";
import { Link } from "react-router-dom";

export default function ServiceGrid() {
  return (
    <>
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
              <img src="/images/services/iconbox1.png" alt="" />
            </div>
            <div className="content-box">
              <h5>
                <Link to="/serviceitem/0">Design &amp; Planning</Link>
              </h5>
              <p>We will help you to get the result you dreamed of.</p>
            </div>
            <div className="link-box">
              <Link to="/serviceitem/0" className="btn-details">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-2 text-center mb-30">
            <div className="icon-main">
              <img src="/images/services/iconbox2.png" alt="" />
            </div>
            <div className="content-box">
              <h5>
                <Link to="/serviceitem/1">Custom Solutions</Link>
              </h5>
              <p>Individual, aesthetically stunning solutions for customers.</p>
            </div>
            <div className="link-box">
              <Link to="/serviceitem/1" className="btn-details">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-3 text-center mb-30">
            <div className="icon-main">
              <img src="/images/services/iconbox3.png" alt="" />
            </div>
            <div className="content-box">
              <h5>
                <Link to="/serviceitem/2">Furniture &amp; Decor</Link>
              </h5>
              <p>We create and produce our product design lines.</p>
            </div>
            <div className="link-box">
              <Link to="/serviceitem/2" className="btn-details">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-4 text-center mb-30 mb-lg-0">
            <div className="icon-main">
              <img src="/images/services/iconbox4.png" alt="" />
            </div>
            <div className="content-box">
              <h5>
                <Link to="/serviceitem/3">Furniture &amp; Decor</Link>
              </h5>
              <p>We create and produce our product design lines.</p>
            </div>
            <div className="link-box">
              <Link to="/serviceitem/3" className="btn-details">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-5 text-center mb-30 mb-md-0">
            <div className="icon-main">
              <img src="/images/services/iconbox5.png" alt="" />
            </div>
            <div className="content-box">
              <h5>
                <Link to="/serviceitem/4">Furniture &amp; Decor</Link>
              </h5>
              <p>We create and produce our product design lines.</p>
            </div>
            <div className="link-box">
              <Link to="/serviceitem/4" className="btn-details">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="icon-box icon-box--bg-img icon-box--icon-top icon-box--is-line-hover icon-bg-6 text-center  mb-30 mb-md-0">
            <div className="icon-main">
              <img src="/images/services/iconbox6.png" alt="" />
            </div>
            <div className="content-box">
              <h5>
                <Link to="/serviceitem/5">Furniture &amp; Decor</Link>
              </h5>
              <p>We create and produce our product design lines.</p>
            </div>
            <div className="link-box">
              <Link to="/serviceitem/5" className="btn-details">
                READ MORE
              </Link>
            </div>
          </div>
        </div>
        <div className="space-80" />
      </div>
    </>
  );
}
