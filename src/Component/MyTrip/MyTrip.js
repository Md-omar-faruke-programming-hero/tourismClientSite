import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import pic from "../../image/download.jpg"


const MyTrip = () => {
    const{user}=useAuth()
    const[trips,setTrip]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bookData')
        .then(res=>res.json())
        .then(data=>setTrip(data.filter(myTrip=> myTrip.email===user.email )))
    },[user.email])
    return (
        <div className="container my-5 ">
            <div className="row  my-5">
                    {
                        trips.map(user=>  <div className="col-md-5 mb-4 border p-3 ms-2 ">
                        <div className="row">
                            <div className="col-md-4">
                                 <img className="w-100" src={pic} alt="" />
                            </div>
                            <div className="col-md-8">
                             <h2 className="text-muted" >{user.spot}</h2>
                             <p>Trip Cost: <span className="text-danger">${user.price}</span> only</p>
                             <p>Booked Status: <span className="text-danger">{user.status}</span></p>
                             <div className="text-end">
                             <button  className="btn btn-success me-2">Pay</button>
                             <button  className="btn btn-danger text-end">cancle</button>
                             </div>
                            </div>
             
                        </div>
                    </div> )
                    }
            </div>
        </div>
    );
};

export default MyTrip;