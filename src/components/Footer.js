import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="site-footer" className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
              <div className="widget-footer">
                <img
                  src="images/logo-footer.svg"
                  className="footer-logo"
                  alt=""
                />
                <p>
                  We provides a full range of interior design, architectural
                  design.
                </p>
                <div className="footer-social list-social">
                  <ul>
                    <li>
                      <a href="http://facebook.com" target="_self">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a href="http://twitter.com" target="_self">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="http://linkedin.com" target="_self">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </li>
                    <li>
                      <a href="http://instagram" target="_self">
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
              <div className="widget-footer">
                <h6>Contacts</h6>
                <ul className="footer-list">
                  <li className="footer-list-item">
                    <span className="list-item-icon">
                      <i className="ot-flaticon-place" />
                    </span>
                    <span className="list-item-text">
                      411 University St, Seattle, USA
                    </span>
                  </li>
                  <li className="footer-list-item">
                    <span className="list-item-icon">
                      <i className="ot-flaticon-mail" />
                    </span>
                    <span className="list-item-text">
                      theratio_interior@mail.com
                    </span>
                  </li>
                  <li className="footer-list-item">
                    <span className="list-item-icon">
                      <i className="ot-flaticon-phone-call" />
                    </span>
                    <span className="list-item-text">+1 800 456 789 123</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
              <div className="widget-footer widget-contact">
                <h6>Latest Projects</h6>
                <ul>
                  <li>
                    <a href="#">Stylish Family Appartment</a>
                  </li>
                  <li>
                    <a href="#">Modern Villa in Belgium</a>
                  </li>
                  <li>
                    <a href="#">Private House in Spain</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="widget-footer footer-widget-subcribe">
                <h6>Subscribe</h6>
                <form className="mc4wp-form" method="post">
                  <div className="mc4wp-form-fields">
                    <div className="subscribe-inner-form">
                      <input
                        type="email"
                        name="EMAIL"
                        placeholder="YOUR EMAIL"
                        required
                      />
                      <button type="submit" className="subscribe-btn-icon">
                        <i className="ot-flaticon-send" />
                      </button>
                    </div>
                  </div>
                </form>
                <p>Follow our newsletter to stay updated about agency.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* #site-footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
              <p>
                Copyright © 2020 Theratio by{" "}
                <a className="text-light" href="#">
                  ThemeModern
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-5 col-md-12 align-self-center">
              <ul className="icon-list-items inline-items justify-content-lg-end">
                <li className="icon-list-item inline-item">
                  <a href="#">
                    <span className="icon-list-text">Terms of use</span>
                  </a>
                </li>
                <li className="icon-list-item inline-item">
                  <a href="#">
                    <span className="icon-list-text">
                      Privacy Environmental Policy
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <a id="back-to-top" href="#" className="show">
        <i class="ot-flaticon-left-arrow"></i>
      </a>
    </>
  );
}
