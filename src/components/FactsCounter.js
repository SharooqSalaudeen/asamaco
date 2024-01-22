import React from "react";

export default function FactsCounter() {
  return (
    <>
      <div className="row">
        {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0"> */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0">
          <div className="ot-counter">
            <div>
              <span>[</span>
              <span className="num" data-to={55} data-time={1000}>
                0
              </span>
              <span>+]</span>
            </div>
            <h6>Current Clients</h6>
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0"> */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0">
          <div className="ot-counter">
            <div>
              <span>[</span>
              <span className="num" data-to={20} data-time={1000}>
                0
              </span>
              <span>+]</span>
            </div>
            <h6>years of experience</h6>
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 mb-4 mb-sm-0"> */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mb-4 mb-xl-0">
          <div className="ot-counter">
            <div>
              <span>[</span>
              <span className="num" data-to={3} data-time={1000}>
                0
              </span>
              <span>+]</span>
            </div>
            <h6>offices worldwide</h6>
          </div>
        </div>
        {/* <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
              <div className="ot-counter">
                <div>
                  <span>[</span>
                  <span className="num" data-to={5} data-time={1000}>
                    0
                  </span>
                  <span>+]</span>
                </div>
                <h6>Offices Worldwide</h6>
              </div>
            </div> */}
      </div>
    </>
  );
}
