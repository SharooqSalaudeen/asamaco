import React from "react";
import { Link } from "react-router-dom";

export default function Contacts() {
  const [messaged, setMessaged] = React.useState(0);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setMessaged(1);
  };
  return (
    <>
      <div>
        {/* <div id="royal_preloader" />  */}
        <div id="page" className="site">
          <div>
            <div id="content" className="site-content">
              <div className="page-header dtable text-center header-transparent page-header-contact">
                <div className="dcell">
                  <div className="container">
                    <h1 className="page-title">Contact</h1>
                    <ul id="breadcrumbs" className="breadcrumbs none-style">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="active">Contacts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <section className="contact-page">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 align-self-center mb-5 mb-lg-0">
                    <div className="contact-left">
                      <h2>Get in Touch</h2>
                      <p className="font14">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                      <form
                        action="contact.php"
                        // method="post"
                        className="wpcf7"
                        onSubmit={(e) => handleSubscribe(e)}
                      >
                        <div className="main-form">
                          <p>
                            <input
                              type="text"
                              name="name"
                              // defaultValue
                              size={40}
                              // className
                              // aria-invalid="false"
                              placeholder="Your Name"
                              required
                            />
                          </p>
                          <p>
                            <input
                              type="email"
                              name="email"
                              // defaultValue
                              size={40}
                              // className
                              // aria-invalid="false"
                              placeholder="Your Email "
                              required
                            />
                          </p>
                          <p>
                            <textarea
                              name="message"
                              cols={40}
                              rows={10}
                              // className
                              // aria-invalid="false"
                              placeholder="Message..."
                              required
                              defaultValue={""}
                            />
                          </p>
                          {messaged ? (
                            <p style={{ color: "orangered" }}>
                              {" "}
                              The log is full. Please send a mail on{" "}
                              <a
                                href="mailto:info@asamaco.com"
                                style={{
                                  color: "orangered",
                                  textDecoration: "underline",
                                }}
                              >
                                info@asamaco.com
                              </a>
                              .
                            </p>
                          ) : null}
                          <p>
                            <button type="submit" className="octf-btn">
                              Send Message
                            </button>
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact-right">
                      <div className="ot-heading">
                        <span>[ our contact details ]</span>
                        <h2 className="main-heading">Let's Start a Project</h2>
                      </div>
                      <p>
                        Give us a call or drop by anytime, we endeavour to
                        answer all enquiries within 24 hours on business days.
                        We will be happy to answer your questions.
                      </p>
                      <div className="contact-info">
                        <i className="ot-flaticon-place" />
                        <div className="info-text">
                          <h6>OUR ADDRESS:</h6>
                          <p>
                            V/364/b, Chempumoola, Azhoor.P.O,
                            Thiruvananthapuram, India
                          </p>
                        </div>
                      </div>
                      <div className="contact-info">
                        <i className="ot-flaticon-mail" />
                        <div className="info-text">
                          <h6>OUR MAILBOX:</h6>
                          <p>
                            <a href="mailto:info@asamaco.com">
                              info@asamaco.com
                            </a>
                          </p>
                        </div>
                      </div>
                      {/* <div className="contact-info">
                        <i className="ot-flaticon-phone-call" />
                        <div className="info-text">
                          <h6>OUR PHONE:</h6>
                          <p>
                            <a href="tel:+1 800 456 789 123">
                              +1 800 456 789 123
                            </a>
                          </p>
                        </div>
                      </div> */}
                      <div style={{ padding: "50px 0" }} />
                      {/* <div className="list-social">
                        <ul>
                          <li>
                            <a href="http://twitter.com" target="_self">
                              <i className="fab fa-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="http://facebook.com" target="_self">
                              <i className="fab fa-facebook-f" />
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
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className="contact-map">
              <div className="map">
                <iframe
                  title="Asama Construction International Pvt Ltd Google Map."
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d986.1032528124706!2d76.80403812921688!3d8.652211299611443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05ebef9568e63f%3A0xf18f5c204c4e3c48!2sAsama%20Construction%20International%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1630047451358!5m2!1sen!2sin"
                  height={522}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
