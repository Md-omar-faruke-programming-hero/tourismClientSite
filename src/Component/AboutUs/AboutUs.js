import React from 'react';
import pic from '../../image/about.jpg'

const AboutUs = () => {
    return (
       <div className="container">
            <div className="row my-5">
                <div className="col-md-5 col-12 mx-auto">
                  <h5 className="fw-bolder">About Us</h5>
                  <h2>Who We Are</h2>
                  <p className="text-muted">TourX is a rapidly-growing global online travel agency, TourX is here to help you plan the perfect trip. Whether you're going on holiday, taking a business trip, or looking to set up a corporate travel account, TourX is here to help you travel the world with cheap flights, discount hotels, and train tickets. </p> <br />
                  <p className="text-muted">Looking to find great travel deals or enjoy the biggest savings on your next trip? TourX has you covered. With our easy-to-use website and app, along with 24-hour customer service, booking your next trip couldn't be simpler. With TourX, quality travel services in over a dozen languages including English, Mandarin, Cantonese, Japanese, Korean, German, French, and Spanish are just a call—or click—away.</p>


                </div>
                <div className="col-md-5 col-12 mx-auto">
                    <img className="w-100" src={pic} alt="" />

                </div>
            </div>
       </div>
    );
};

export default AboutUs;