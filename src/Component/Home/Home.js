import React, { useEffect, useState } from 'react';
import "./Home.css"
import banner from "../../image/banner.png"
import Spot from '../Spot/Spot';



const Home = () => {
    const[spots,setSpot]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/spot")
        .then(res=>res.json())
        .then(data=>setSpot(data))
    },[])

    return (
        <div>
            <div className="w-100 ">
                <img className="pic"  src={banner} alt="" />
                <button className="btn btn-danger offer">See offer</button>
                <h3 className="pp">up TO <span className="text-danger">30%</span> off</h3>   
            </div>

            <div className="mb-5 mt-3">
                <p className="text-warning text-center fs-4 mb-0">Explore your world</p>
                <h1 className="text-center mt-0">Select your best Package <br /> For Your Travel </h1>
            </div>
            <div className="container">
                <div className="row g-4">
                    {
                        spots.map(spot=> <Spot key={spot.name} spot={spot} ></Spot>)
                    }

                </div>

            </div>
            
        </div>
    );
};

export default Home;