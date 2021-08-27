import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section className="error-404">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="page-content">
              <h1>404</h1>
              <h2>Sorry! Page Not Found!</h2>
              <p>
                Oops! The page you are looking for does not exist. Please return
                to the site’s homepage.
              </p>
              {/* <form role="search" method="get" className="search-form">
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
              </form> */}
              <div className="ot-button">
                <Link to="/" className="octf-btn octf-btn-light no-line">
                  TAKE ME HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
