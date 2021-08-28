import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../assets/styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper/core";

import ServiceItem1 from "../components/ServiceItems/ServiceItem1";
import ServiceItem2 from "../components/ServiceItems/ServiceItem2";
import ServiceItem3 from "../components/ServiceItems/ServiceItem3";
import ServiceItem4 from "../components/ServiceItems/ServiceItem4";
import ServiceItem5 from "../components/ServiceItems/ServiceItem5";
import ServiceItem6 from "../components/ServiceItems/ServiceItem6";

// install Swiper modules
SwiperCore.use([Pagination]);
SwiperCore.use([Navigation]);

const servicesTitle = [
  "Design & Planning",
  "Exterior Design",
  "Custom Solutions",
  "Furniture & Decor",
  "Creating Concepts",
  "Customer's Control",
];

export default function ServiceItems() {
  const { id } = useParams();

  const [service, setService] = useState(0);

  const serviceItem = () => {
    if (service === 0) {
      return <ServiceItem1 />;
    } else if (service === 1) {
      return <ServiceItem2 />;
    } else if (service === 2) {
      return <ServiceItem3 />;
    } else if (service === 3) {
      return <ServiceItem4 />;
    } else if (service === 4) {
      return <ServiceItem5 />;
    } else if (service === 5) {
      return <ServiceItem6 />;
    }
  };

  useEffect(() => {
    let IntId = Number(id);
    setService(IntId);
    // console.log(service);
  }, [id]);
  return (
    <div>
      <div id="content" className="site-content">
        <div className="page-header dtable text-center header-transparent pheader-service-detail1">
          <div className="dcell">
            <div className="container">
              <h1 className="page-title">{servicesTitle[service]}</h1>
              <ul id="breadcrumbs" className="breadcrumbs none-style">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/services">Our Services</Link>
                </li>
                <li className="active">{servicesTitle[service]}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="services-single">
        <div className="container">
          <div className="row">
            <div className="widget-area col-lg-3 col-md-12">
              <div className="widget widget_nav_menu">
                <ul className="services-menu">
                  <li className={service === 0 ? "current-menu-item" : null}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => setService(0)}>
                      <span>01.</span> Design &amp; Planning
                    </a>
                  </li>
                  <li className={service === 1 ? "current-menu-item" : null}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => setService(1)}>
                      <span>02.</span> Exterior Design
                    </a>
                  </li>
                  <li className={service === 2 ? "current-menu-item" : null}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => setService(2)}>
                      <span>03.</span> Custom Solutions
                    </a>
                  </li>
                  <li className={service === 3 ? "current-menu-item" : null}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => setService(3)}>
                      <span>04.</span> Furniture &amp; Decor
                    </a>
                  </li>
                  <li className={service === 4 ? "current-menu-item" : null}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => setService(4)}>
                      <span>05.</span> Creating Concept
                    </a>
                  </li>
                  <li className={service === 5 ? "current-menu-item" : null}>
                    {/* eslint-disable-next-line */}
                    <a onClick={() => setService(5)}>
                      <span>06.</span> Customer`s Control
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {serviceItem()}
          </div>
        </div>
      </section>
    </div>
  );
}
