import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ServiceItem4() {
  return (
    <div className="col-lg-9 col-md-12">
      <div className="services-detail-content">
        <div className="ot-heading ">
          <span>[ what we offer ]</span>
          <h2 className="main-heading">
            Furniture: We will Help You to Get the Result
            <br /> You Dreamed of
          </h2>
        </div>
        <p>
          The interior design of your dream begins with a concept that is
          reflected in the blueprints, project plans, in 3D visualizations. It
          is possible to make any place more interesting, attractive and
          functional, for this it is worth to trust the real professionals and
          then the money will not be spent in a vain.
        </p>
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="/images/service-list/4/service-silder7.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/service-list/4/service-silder8.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/service-list/4/service-silder7.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
        <p>
          In design, we bring characteristics of the natural world into built
          spaces, such as water, greenery, and natural light, or elements like
          wood and stone. Encouraging the use of natural systems and processes
          in design allows for exposure to nature, and in turn, these design
          approaches improve health and wellbeing. There are a number of
          possible benefits, including reduced heart rate variability and pulse
          rates, decreased blood pressure, and increased activity in our nervous
          systems, to name a few.
        </p>
        <p>
          Over time, our connections to the natural world diverged in parallel
          with technological developments. Advances in the 19th and 20th
          centuries fundamentally changed how people interact with nature.
          Sheltered from the elements, we spent more and more time indoors.
          Today, the majority of people spend almost 80-90% of their time
          indoors, moving between their homes and workplaces. As interior
          designers embrace biophilia.
        </p>
        <img
          src="/images/service-list/4/image1-service4.jpg"
          className="detail-img"
          alt=""
        />
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0 text-center">
            <div
              className="circle-progress tbottom"
              data-color="#939393"
              data-height={2}
              data-size={165}
              data-processed="true"
            >
              <div className="inner-bar" data-percent={50}>
                <span>
                  <span className="percent">50%</span>
                </span>
              </div>
              <h4>3D modeling</h4>
            </div>
            <p>
              Studio provides a full range
              <br />
              of 3D interior modeling
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-3 mb-lg-0 text-center">
            <div
              className="circle-progress tbottom"
              data-color="#939393"
              data-height={2}
              data-size={165}
              data-processed="true"
            >
              <div className="inner-bar" data-percent={75}>
                <span>
                  <span className="percent">75%</span>
                </span>
              </div>
              <h4>ROOM MEASUREMENT</h4>
            </div>
            <p>
              Development of iperfect design
              <br />
              of the project
            </p>
          </div>
          <div className="col-lg-4 col-md-6 text-center">
            <div
              className="circle-progress tbottom"
              data-color="#939393"
              data-height={2}
              data-size={165}
              data-processed="true"
            >
              <div className="inner-bar" data-percent={85}>
                <span>
                  <span className="percent">85%</span>
                </span>
              </div>
              <h4>2d planning</h4>
            </div>
            <p>
              We provide 2D planning
              <br />
              for great visualization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
