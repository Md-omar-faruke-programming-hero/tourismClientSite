import React, { useEffect, useState } from 'react';
import "./Home.css"
import banner from "../../image/banner.png"
import Spot from '../Spot/Spot';




const Home = () => {
    const[spots,setSpot]=useState([])
   useEffect(()=>{
        fetch("https://shielded-meadow-16233.herokuapp.com/spot")
        .then(res=>res.json())
        .then(data=>setSpot(data))
   },[])
    
     if(spots.length===0){
         return <div className="d-flex justify-content-center mt-5">
         <div className="spinner-border" role="status">
           <span className="visually-hidden">Loading...</span>
         </div>
       </div>
     }
     else {

        return (
            <div>
                <div className="w-100 ">
                    <img className="pic"  src={banner} alt="" />
                    <button className="btn btn-danger offer ">See offer</button>
                    <h3 className="pp">up TO <span className="text-danger fw-bolder">30%</span> off</h3>   
                </div>
    
                <div className="mb-5 mt-3">
                    <p className="text-warning text-center fs-4 mb-0">Explore your world</p>
                    <h1 className="text-center mt-0">Select your best Package <br /> For Your Travel </h1>
                </div>
                <div className="container mb-5">
                    <div className="row g-4">
                        {
                            spots.map(spot=> <Spot key={spot.name} spot={spot} ></Spot>)
                        }
    
                    </div>
    
                </div>
    
                <div>
                   <div className="text-center">
                        <h5 className="text-warning fw-bolder">why TourX</h5>
                        <h2 className="text-dark fw-bolder">Why You Are Travel With Tourx</h2>
                   </div>
                  <div className="container">
                       <div className="row ">
                       <div className="col-md-2 mx-auto bg-success rounded-3 p-5">
                      <div className="text-center ">
                            <i className="text-center fas fa-male fa-4x"></i>
                            <h6 className="text-white">2000+ Our <br /> worldwide guide</h6>
                      </div>
                       </div>
                       <div className="col-md-2 rounded-3 mx-auto bg-success p-5">
                      <div className="text-center ">
                      <i className="fas fa-handshake fa-4x text-center"></i>
                            <h6 className="text-white">100% trusted travel agency</h6>
                      </div>
                       </div>
                       <div className="col-md-2 rounded-3 mx-auto bg-success p-5">
                      <div className="text-center ">
                            <i className="text-center fas fa-male fa-4x"></i>
                           <h6 className="text-white"> 10+ year of travel experience</h6>
                      </div>
                       </div>
                       <div className="col-md-2 rounded-3 mx-auto bg-success p-5">
                      <div className="text-center ">
                      <i className="fas fa-hiking fa-4x text-center "></i>
                            <h6 className="text-white">90% of our traveller happy</h6>
                      </div>
                       </div>
    
                   </div>
                  </div>
                </div>
    
    
                <div className="w-75 bg-warning mx-auto b p-5  my-5 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center fw-bolder text-white mt-5">Subscribe To Our Newsletter <br /> For Latest Update</h1>
                    <div className="d-flex mb-5">
                        <input className="form-control me-2" type="search" placeholder="enter your mail" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Subscribe</button>
                    </div>
                </div>
                
            </div>
        );
     }
    
};

export default Home;