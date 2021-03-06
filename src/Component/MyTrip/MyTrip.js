import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import pic from "../../image/download.jpg"


const MyTrip = () => {
    const{user}=useAuth()
    const[trips,setTrip]=useState([])
    useEffect(()=>{
        fetch('https://shielded-meadow-16233.herokuapp.com/bookData')
        .then(res=>res.json())
        .then(data=>setTrip(data.filter(myTrip=> myTrip.email===user.email )))
    },[user.email])



    const cancleTour=(id)=>{
       const process= window.confirm("Are You Sure To Delete?")
       if(process){
        fetch(`https://shielded-meadow-16233.herokuapp.com/bookData/${id}`,{
            method:"delete"
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert("deleted successfully and you will miss the trip 😛")
                const remain=trips.filter(rest=> id!==rest._id)
                setTrip(remain);
            }
        })
       }
        
    }

    const pay=()=>{
        alert("this function will update soon")
    }

    if(trips.length===0){
        return <div className="d-flex justify-content-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    else{

        return (
            <div className="container my-5 ">
                <div className="row  my-5">
                        {
                            trips.map(user=>  <div className="col-md-5 mb-4 border col-12 p-3 ms-2 ">
                            <div className="row">
                                <div className="col-md-4">
                                     <img className="w-100" src={pic} alt="" />
                                </div>
                                <div className="col-md-8">
                                 <h2 className="text-muted" >{user.spot}</h2>
                                 <p>Trip Cost: <span className="text-danger">{user.price}</span> only</p>
                                 <p>Booked Status: <span className="text-danger">{user.status}</span></p>
                               
                                 <div className="text-end">
                                 <button onClick={pay} className="btn btn-success me-2">Pay</button>
                                 <button onClick={()=>cancleTour(user._id)} className="btn btn-danger text-end">cancle</button>
                                 </div>
                                </div>
                 
                            </div>
                        </div> )
                        }
                </div>
            </div>
        );

    }
    
};

export default MyTrip;