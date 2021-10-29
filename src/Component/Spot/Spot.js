import React from 'react';
import { useHistory } from 'react-router';
import "./Spot.css"

const Spot = (props) => {
    
    const {name,price,day,img,rating,_id}= props.spot

    const history= useHistory()
    const book=(id)=>{
        history.push(`/bookSpot/${id}`)
    }
    return (
        
            <div className="col-md-4 ">
                <div className="shadow">
                <img src={img} className="card-img-top img" alt="..."/>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <p className="card-title text-secondary fw-bold fs-5">${price}/<small>per person</small></p>
                    <p className="card-text"><i className="far fa-calendar-alt me-2"></i>{day} days</p>
                </div>
                <h3 className="text-warning ms-2 p-1"><i className="fas fa-map-marker-alt text-dark me-1"></i>{name}</h3>
               <div className="d-flex justify-content-between align-items-center me-1">
               <p className="ms-2 p-1 fw-bolder"><i className="fas fa-star text-warning me-2"></i>{rating}k+Rating</p>
               <button onClick={()=>book(_id)} className="btn btn-danger">Book Now</button>
               </div>
                </div>
            </div>
       
    );
};

export default Spot;