import React, { useEffect, useRef, useState } from 'react';
import "./BookSpot.css"
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hook/useAuth';

const BookSpot = () => {
    const[isloading,setBooked]=useState(true);
    const {user,}=useAuth();

    const history=useHistory();
    const{id}=useParams();
    const[bookSpot,setBookSpot]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/spot/${id}`)
        .then(res=>res.json())
        .then(data=>setBookSpot(data));
    },[id])
    console.log(bookSpot);

    
    const nameRef=useRef()
    const emailRef=useRef()
    const dateRef=useRef()
    const phoneRef=useRef()
    

    const submit=(e)=>{
    
        setBooked(false)


        e.preventDefault()
        const price= document.getElementById("price").innerText
        const spot=document.getElementById("spotname").innerText
       const name= nameRef.current.value;
       const email= emailRef.current.value;
       const date=dateRef.current.value;
       const phn= phoneRef.current.value;
       
      
       

       const selectSpot={
           name:name,email:email,data:date,phn:phn,status:"panding", price:price,spot:spot
       }
       fetch('http://localhost:5000/bookData',{
           method:"post",
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(selectSpot)
       }).then(res=>res.json())
       .then(data=>{
           if(data.insertedId){
               alert("Thank You")
                nameRef.current.value="";
                emailRef.current.value="";
                dateRef.current.value="";
                phoneRef.current.value="";

                history.push("/trip")
                
           }
       })

    }
    
    return (
       <div className="container my-5">
            <div className="row mx-0 px-0">
            <div className="col-md-7 ">
                <img className="w-100 mb-4 " src={bookSpot.img} alt="" />
                <div className="d-flex justify-content-lg-evenly align-items-center">
                <h1 id="spotname" className="mb-2">{bookSpot.name}</h1>
                <div>
                <p  >cost: <span id="price">${bookSpot.price}</span> only </p>
                <small className="text-warning fw-bolder">{bookSpot.rating}k+Rating</small>
                </div>
                </div>
                <hr />
            <div className="d-flex justify-content-md-between">
                <div>
                    <p className="text-warning m-0 fs-4"><i className="far fa-clock text-black me-1"></i>Duration</p>
                    <small className="text-secondary fw-bolder m-0">{bookSpot.day} days</small>
                </div>
                 <div>
                    <p className="text-warning m-0 fs-4"><i className="fas fa-shoe-prints text-black me-1"></i>Tour Type</p>
                    <small className="text-secondary fw-bolder m-0">Daily Tour</small>
                </div>
                <div>
                    <p className="text-warning m-0 fs-4"><i className="fas fa-users text-black me-1"></i>Group Size</p>
                    <small className="text-secondary fw-bolder m-0">30 people </small>
                </div>
                <div>
                    <p className="text-warning m-0 fs-4"><i className="fas fa-globe-asia text-black me-1"></i>Language</p>
                    <small className="text-secondary fw-bolder m-0">Any Language</small>
                 </div>
            </div>
                <hr />

            </div>
            <div className="col-md-4 ms-auto">
                <h3 className="mb-3 text-warning fw-bolder">Book This Package</h3>
                <form onSubmit={submit} >
                

                <label htmlFor="">Name</label> <br />
                <input ref={nameRef} value={user.displayName} className="w-75 my-2 rounded-pill p-2" type="text" /> <br />

                <label htmlFor="">Email</label> <br />
                <input ref={emailRef} value={user.email} className="w-75 my-2 rounded-pill p-2" type="email" /> <br />

               
                <label htmlFor="">Enter any code</label> <br />
                <input ref={phoneRef} className="w-75 my-2 rounded-pill p-2" type="text" placeholder="Have to remember this" required /> <br />

                <label  htmlFor="">Date</label> <br />
                <input  ref={dateRef} className="w-75 my-2 rounded-pill p-2" type="date" required /> <br />

               

                <input className="w-75 my-3 btn btn-success p-2" type="submit" value="BooK Confirm" />
                </form>
                
                
            </div>


            
        </div>
       </div>
    );
};

export default BookSpot;