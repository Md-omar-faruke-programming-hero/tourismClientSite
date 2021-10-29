import React from 'react';

const Spot = (props) => {
    
    const {name,price,day,img,rating}= props.spot
    return (
        
            <div class="col-md-4">
                <div class="shadow">
                <img src={img} class="card-img-top" alt="..."/>
                <div class="card-body d-flex justify-content-between align-items-center">
                    <p class="card-title text-secondary fw-bold fs-5">${price}/<small>per person</small></p>
                    <p class="card-text"><i class="far fa-calendar-alt me-2"></i>{day}</p>
                </div>
                <h3 className="text-warning ms-2 p-1"><i class="fas fa-map-marker-alt text-dark me-1"></i>{name}</h3>
               <div className="d-flex justify-content-between align-items-center me-1">
               <p className="ms-2 p-1 fw-bolder"><i class="fas fa-star text-warning me-2"></i>{rating}</p>
               <button className="btn btn-danger">Book Now</button>
               </div>
                </div>
            </div>
       
    );
};

export default Spot;