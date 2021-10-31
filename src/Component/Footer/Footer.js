import React from 'react';
import "./Footer.css"

import logo from "../../image/logo.png"
import payment from "../../image/method.png"
const Footer = () => {
    return (
      <div className="shadow bg-light ">
            <div className="row container mt-5">
            <div className="col-md-3 mt-5">
              <img className="w-50 " src={logo} alt="" />
                <p>TourX is a rapidly-growing global online travel agency, TourX is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, TourX is here to help you travel the world with cheap flights, discount hotels, and train tickets. </p>
                <h4>Follow Use</h4>
                <i className="facebook fab fa-facebook-square fa-2x me-3"></i>
                <i className=" youtube fab fa-youtube  fa-2x me-3"></i>
                <i className=" insta fab fa-instagram-square fa-2x"></i>
            </div>
            <div className="col-md-3 mt-5">
                <h4>Contact Us</h4>
                <p>+01852-1265122 <br />+01852-1265122</p> <br />
                <p>info@example.com <br /> support@example.com</p>
            </div>
            <div className="col-md-2 mt-5">
                <h4>Support</h4>
                <p>contact Us</p>
                <p>About Us</p>
                <p>Our Blog</p>
                <p>Package</p>

            </div>
            <div className="col-md-4 mt-5">
                <h4>We access</h4>
                <img className="pay" src={payment} alt="" />
            </div>

            
            </div>
            <p className="text-center fw-bolder text-muted">Copyright 2021 TourX | </p>
      </div>
    );
};

export default Footer;