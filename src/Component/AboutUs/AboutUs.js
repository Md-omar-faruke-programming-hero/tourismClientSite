import React from 'react';
import pic from '../../image/about.jpg'

const AboutUs = () => {
    return (
       <div className="container">
            <div className="row my-5">
                <div className="col-md-5 mx-auto">
                  <h5 className="fw-bolder">About Us</h5>
                  <h2>Who We Are</h2>
                  <p className="text-muted">Rorem Ipsum is simply dummy text of the printin and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p> <br />
                  <p className="text-muted">Printer took a galley of type and scrambled it to make a type speci menu book. It has survived not only five centuries, but also the leap intoelectronic typesetting, remaining essentially unchanget was popularised.</p>


                </div>
                <div className="col-md-5 mx-auto">
                    <img className="w-100" src={pic} alt="" />

                </div>
            </div>
       </div>
    );
};

export default AboutUs;