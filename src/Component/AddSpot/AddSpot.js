import React, { useRef } from 'react';
import { useHistory } from 'react-router';

const AddSpot = () => {
    const history=useHistory()
    const nameRef= useRef()
    const costRef=useRef()
    const ratingRef=useRef()
    const timeRef= useRef()
    const viewRef=useRef();

    const submit=(e)=>{
        e.preventDefault()
        const name= nameRef.current.value;
        const price=costRef.current.value
        const day=timeRef.current.value
        const img=viewRef.current.value
        const rating=ratingRef.current.value


        const spotDetail= {
            name:name,price:price,day:day,img:img,rating:rating
        }

        fetch("https://shielded-meadow-16233.herokuapp.com/spot",{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(spotDetail)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                alert("successfully added")
                nameRef.current.value="";
                costRef.current.value=""
                timeRef.current.value=""
                viewRef.current.value=""
                ratingRef.current.value=""
                history.push("/home")

            }
        })
    }


    return (
        <div className="row my-5 container">
            <div className="col-md-3 mx-auto">
                  
                   <p className="text-primary">+ Add New Travel Spot</p>
                  
            </div>
            <div className="col-md-8 ">
                <form onSubmit={submit} >
                <p className="fs-3 me-auto"> Travel Spot Details</p>
                <div className="row border p-2 mt-5 mb-2">
                    <div className="col-md-6">
                        <label for="basic-url" className="form-label">Spot Name</label>
                        <div className="input-group mb-3">
                             <input ref={nameRef} type="text" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <label for="basic-url" className="form-label">Set Tour Cost</label>
                        <div className="input-group mb-3">
                             <input ref={costRef} type="number" ror="4" col="4" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <label for="basic-url" className="form-label">Spot Rating</label>
                        <div className="input-group mb-3">
                             <input ref={ratingRef}  type="number" ror="4" col="4" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                    </div>
                    <div className="col-md-6">
                    <label for="basic-url" className="form-label">Duration</label>
                        <div className="input-group mb-3">
                             <input placeholder="days" ref={timeRef}  type="number"  className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                    <label for="basic-url" className="form-label">Spot View</label>
                        <div className="input-group mb-3">
                             <input ref={viewRef}  type="text" placeholder="url" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                   

                    </div>

                </div>
                <div className="text-end">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>

                </form>
            </div>
            
        </div>
    );
};

export default AddSpot;