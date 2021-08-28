import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import Window Dimension Hook
import useWindowDimensions from "../utils/useWindowDimensions";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "../../assets/styles/swiper.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function CustomSlider() {
  // const { height, width } = useWindowDimensions();
  const { width } = useWindowDimensions();

  return (
    <>
      <Swiper
        spaceBetween={10}
        loop={true}
        slidesPerView={width < 900 ? 1 : 2}
        // slidesPerView={1}
        centeredSlides={true}
        // autoplay={{
        //   delay: 3500,
        //     disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="hero-slider"
      >
        <SwiperSlide>
          <div className="hero-slider-img">
            <div
              style={{
                position: "absolute",
                top: "0px",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="slider-content">
                <h1 style={{ color: "#ffffff" }}>
                  Creating Unique Exterior Designs
                </h1>
                <p style={{ color: "#ffffff" }}>
                  Our goal is to create reliable relations with customers, that
                  is why, from the first day of the activity of the studio.
                </p>
                <div className="ot-button" style={{ alignSelf: "center" }}>
                  <a
                    href="https://asamaco.com/mail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="octf-btn octf-btn-dark border-hover-dark"
                  >
                    Exterior Designs
                  </a>
                </div>
              </div>
            </div>
            <img src="/images/slideshow/slide4.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slider-img">
            <div
              style={{
                position: "absolute",
                top: "0px",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="slider-content">
                <h1 style={{ color: "#ffffff" }}>
                  Asthetically Stunning Solutions
                </h1>
                <p style={{ color: "#ffffff" }}>
                  Our goal is to create reliable relations with customers, that
                  is why, from the first day of the activity of the studio.
                </p>
                <div className="ot-button" style={{ alignSelf: "center" }}>
                  <a
                    href="https://asamaco.com/mail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="octf-btn octf-btn-dark border-hover-dark"
                  >
                    Interior Concepts
                  </a>
                </div>
              </div>
            </div>
            <img src="/images/slideshow/slide5.jpg" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero-slider-img">
            <div
              style={{
                position: "absolute",
                top: "0px",
                width: "100%",
                height: "100%",
              }}
            >
              <div className="slider-content">
                <h1 style={{ color: "#ffffff" }}>
                  Simple. Authemtic. Close to Nature
                </h1>
                <p style={{ color: "#ffffff" }}>
                  Our goal is to create reliable relations with customers, that
                  is why, from the first day of the activity of the studio.
                </p>
                <div className="ot-button" style={{ alignSelf: "center" }}>
                  <a
                    href="https://asamaco.com/mail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="octf-btn octf-btn-dark border-hover-dark"
                  >
                    Design & Planning
                  </a>
                </div>
              </div>
            </div>
            <img src="/images/slideshow/slide6.jpg" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
