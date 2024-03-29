import React from 'react'
// import React, { useState } from "react";
import { Link } from 'react-router-dom'

export default function Header() {
    // const [sidePanel, setSidePanel] = useState(false);
    // const handleSidePanel = () => {
    //   setSidePanel(!sidePanel);
    // };
    return (
        <>
            <header id="site-header" className="site-header header-transparent">
                {/* Main Header start */}
                <div className="octf-main-header main-header-s3 main-header-slight">
                    <div className="octf-area-wrap">
                        <div className="container-fluid octf-mainbar-container">
                            <div className="octf-mainbar">
                                <div className="octf-mainbar-row octf-row">
                                    <div className="octf-col logo-col no-padding">
                                        <div
                                            id="site-logo"
                                            className="site-logo"
                                        >
                                            <Link to="/">
                                                <img
                                                    src="/images/asama-logo-transparent.png"
                                                    alt="Asama Construction International Pvt Ltd"
                                                    className="logo-h3"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="octf-col menu-col no-padding">
                                        <nav
                                            id="site-navigation"
                                            className="main-navigation nav-text-dark"
                                        >
                                            <ul className="menu">
                                                {/* <li className="menu-item-has-children current-menu-item current-menu-ancestor"> */}
                                                <li>
                                                    <Link to="/"> Home </Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link to="/services">
                                                        {' '}
                                                        Services{' '}
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link to="/serviceitem/0">
                                                                Design &amp;
                                                                Planning
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/serviceitem/1">
                                                                Exterior Design
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/serviceitem/2">
                                                                Custom Solutions
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/serviceitem/3">
                                                                Furniture &amp;
                                                                Decor
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/serviceitem/4">
                                                                Creating Concept
                                                            </Link>
                                                        </li>
                                                        <li>
                                                            <Link to="/serviceitem/5">
                                                                Author’s Control
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="/aboutus">
                                                        {' '}
                                                        About Us{' '}
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="/contacts">
                                                        {' '}
                                                        Contacts{' '}
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="octf-col cta-col text-right no-padding">
                                        {/* Call To Action */}
                                        <div className="octf-btn-cta">
                                            {/* serach button */}
                                            {/* <div className="octf-search octf-cta-header">
                        <div className="toggle_search octf-cta-icons">
                          <i className="ot-flaticon-search" />
                        </div> */}
                                            {/* Form Search on Header */}
                                            <div className="ot-button login-button-header">
                                                <a
                                                    href="https://asamaco.com/mail"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="octf-btn octf-btn-dark border-hover-dark"
                                                >
                                                    Login
                                                </a>
                                            </div>
                                            {/* <div className="h-search-form-field collapse">
                          <div className="h-search-form-inner">
                            <form
                              role="search"
                              method="get"
                              className="search-form"
                            >
                              <input
                                type="search"
                                className="search-field"
                                placeholder="SEARCH..."
                                defaultValue
                                name="s"
                              />
                              <button type="submit" className="search-submit">
                                <i className="ot-flaticon-search" />
                              </button>
                            </form>
                          </div>
                        </div>
                      </div> */}
                                            <div className="octf-sidepanel octf-cta-header">
                                                <div className="site-overlay panel-overlay" />
                                                <div
                                                    id="panel-btn"
                                                    className="panel-btn octf-cta-icons"
                                                >
                                                    <i
                                                        // onClick={() => handleSidePanel()}
                                                        className="ot-flaticon-menu"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="header_mobile header-mobile-s3">
                    <div className="container-fluid">
                        <div className="octf-mainbar-row octf-row">
                            <div className="octf-col">
                                <div className="mlogo_wrapper clearfix">
                                    <div className="mobile_logo">
                                        <Link to="/">
                                            <img
                                                src="/images/asama-logo-transparent-white.png"
                                                alt="Asama Construction International Pvt Ltd"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="octf-col justify-content-end">
                                {/* <div className="octf-search octf-cta-header">
                  <div className="toggle_search octf-cta-icons">
                    <i className="ot-flaticon-search" />
                  </div> */}
                                {/* Form Search on Header */}
                                <div className="ot-button login-button-header">
                                    <a
                                        href="https://asamaco.com/mail"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="octf-btn octf-btn-light border-hover-light"
                                    >
                                        Login
                                    </a>
                                </div>
                                {/* <div className="h-search-form-field collapse">
                    <div className="h-search-form-inner">
                      <form role="search" method="get" className="search-form">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="SEARCH..."
                          defaultValue
                          name="s"
                        />
                        <button type="submit" className="search-submit">
                          <i className="ot-flaticon-search" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div> */}
                                <div className="octf-menu-mobile octf-cta-header">
                                    <div
                                        id="mmenu-toggle"
                                        className="mmenu-toggle"
                                    >
                                        <button>
                                            <i className="ot-flaticon-menu" />
                                        </button>
                                    </div>
                                    <div className="site-overlay mmenu-overlay" />
                                    <div
                                        id="mmenu-wrapper"
                                        className="mmenu-wrapper on-right"
                                    >
                                        <div className="mmenu-inner">
                                            <a
                                                className="mmenu-close"
                                                href="/#"
                                            >
                                                <i className="ot-flaticon-right-arrow" />
                                            </a>
                                            <div className="mobile-nav">
                                                <ul
                                                    id="menu-main-menu"
                                                    className="mobile_mainmenu none-style"
                                                >
                                                    {/* <li className="menu-item-has-children current-menu-item current-menu-ancestor"> */}
                                                    <li>
                                                        <Link to="/">
                                                            {' '}
                                                            Home{' '}
                                                        </Link>
                                                    </li>
                                                    <li className="menu-item-has-children">
                                                        <Link to="/services">
                                                            {' '}
                                                            Services{' '}
                                                        </Link>
                                                        {/* <a href="#">Services</a> */}
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link to="/serviceitem/0">
                                                                    Design &amp;
                                                                    Planning
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/serviceitem/1">
                                                                    Exterior
                                                                    Design
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/serviceitem/2">
                                                                    Custom
                                                                    Solutions
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/serviceitem/3">
                                                                    Furniture
                                                                    &amp; Decor
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/serviceitem/4">
                                                                    Creating
                                                                    Concept
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link to="/serviceitem/5">
                                                                    Author’s
                                                                    Control
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link to="/aboutus">
                                                            {' '}
                                                            About Us{' '}
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to="/contacts">
                                                            {' '}
                                                            Contacts{' '}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Side Gallary */}
            <div
                id="side-panel"
                className="side-panel"
                // className={sidePanel ? "side-panel side-panel-open" : "side-panel"}
            >
                {/* eslint-disable-next-line */}
                <a
                    // href="#"
                    // onClick={() => handleSidePanel()}
                    className="side-panel-close"
                >
                    <i className="ot-flaticon-close-1" />
                </a>
                <div className="side-panel-block">
                    <div className="side-panel-wrap">
                        <div className="the-logo">
                            <Link to="/">
                                <img
                                    src="/images/gallary/asama-logo-transparent-white1.png"
                                    alt="Theratio"
                                />
                            </Link>
                        </div>
                        <div className="ot-heading">
                            <h2 className="main-heading">Our Gallery</h2>
                        </div>
                        <div className="image-gallery">
                            <div
                                id="gallery-1"
                                className="gallery galleryid-102 gallery-columns-3 gallery-size-thumbnail"
                            >
                                <figure className="gallery-item">
                                    <div className="gallery-icon landscape">
                                        <a href="/images/gallary/p3-gallery1.jpg">
                                            <img
                                                src="/images/gallary/p3-gallery1-150x150.jpg"
                                                className=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </figure>
                                <figure className="gallery-item">
                                    <div className="gallery-icon landscape">
                                        <a href="/images/gallary/p3-gallery2.jpg">
                                            <img
                                                src="/images/gallary/p3-gallery2-150x150.jpg"
                                                className=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </figure>
                                <figure className="gallery-item">
                                    <div className="gallery-icon landscape">
                                        <a href="/images/gallary/p3-gallery4.jpg">
                                            <img
                                                src="/images/gallary/p3-gallery4-150x150.jpg"
                                                className=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </figure>
                                <figure className="gallery-item">
                                    <div className="gallery-icon landscape">
                                        <a href="/images/gallary/p3-gallery5.jpg">
                                            <img
                                                src="/images/gallary/p3-gallery5-150x150.jpg"
                                                className=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </figure>
                                <figure className="gallery-item">
                                    <div className="gallery-icon landscape">
                                        <a href="/images/gallary/p4-gallery1.jpg">
                                            <img
                                                src="/images/gallary/p4-gallery1-150x150.jpg"
                                                className=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </figure>
                                <figure className="gallery-item">
                                    <div className="gallery-icon landscape">
                                        <a href="/images/gallary/p4-gallery2.jpg">
                                            <img
                                                src="/images/gallary/p4-gallery2-150x150.jpg"
                                                className=""
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                </figure>
                            </div>
                        </div>
                        <div className="ot-heading ">
                            <h2 className="main-heading">Contact Info</h2>
                        </div>
                        <div className="side-panel-cinfo">
                            <ul className="panel-cinfo">
                                <li className="panel-list-item">
                                    <span className="panel-list-icon">
                                        <i className="ot-flaticon-place" />
                                    </span>
                                    <span className="panel-list-text">
                                        V/364/b, Chempumoola, Azhoor.P.O,
                                        Thiruvananthapuram
                                    </span>
                                </li>
                                <li className="panel-list-item">
                                    <span className="panel-list-icon">
                                        <i className="ot-flaticon-mail" />
                                    </span>
                                    <span className="panel-list-text">
                                        info@asamaco.com
                                    </span>
                                </li>
                                <div
                                    style={{
                                        margin: '2rem 0 0 0',
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Link to="/terms">
                                        <span style={{ color: '#fff' }}>
                                            Terms of use
                                        </span>
                                    </Link>
                                    <Link to="/privacy">
                                        <span style={{ color: '#fff' }}>
                                            Privacy policy
                                        </span>
                                    </Link>
                                </div>

                                {/* <li className="panel-list-item">
                  <span className="panel-list-icon">
                    <i className="ot-flaticon-phone-call" />
                  </span>
                  <span className="panel-list-text">+1 800 456 789 123</span>
                </li> */}
                            </ul>
                        </div>
                        {/* <div className="side-panel-social">
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
        </>
    )
}
