import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div class="container pt-5">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 ">
              <div>
                <h4>STORYLINE</h4>
                <p class="mb-30 footer-desc">
                  {" "}
                  Discover a wide selection of high-quality products at
                  affordable prices on our shopping website,
                  <br />
                  where convenience meets style and satisfaction is guaranteed.
                </p>
              </div>
            </div>
            <div class="col-xl-3 offset-xl-1 col-lg-2 col-md-6 ">
              <div class="">
                <h5>Quick Link</h5>
                <ul class="list-unstyled">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                  <NavLink className="nav-link" to="/product">
                    Product
                  </NavLink>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </ul>
              </div>
            </div>

            <div class="col-xl-4 col-lg-4 col-md-6">
              <div>
                <h5>Newsletter</h5>
                <div>
                  <label for="Newsletter" class="form-label">
                    Subscribe To Our Newsletter
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    Placeholder="Enter Your Email"
                  />
                  <button class="btn btn-dark mt-3">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-center pt-5">
            <div class="copyright">
              <p>Developed by CSIT 2076 batch CSIT</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
