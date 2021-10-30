
import React, { useEffect, useState } from 'react';


 


const ManageAllbooking = () => {
    
   
    const [lists,setList]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/bookData')
        .then(res=>res.json())
        .then(data=>setList(data))
    },[lists])

    const cancleUserData=(id)=>{
        const process= window.confirm("Are You Sure To Delete?")
        if(process){
         fetch(`http://localhost:5000/bookData/${id}`,{
             method:"delete"
         }).then(res=>res.json())
         .then(data=>{
             if(data.deletedCount>0){
                 alert("deleted successfully")
                 const remain=lists.filter(rest=> id!==rest._id)
                 setList(remain);
             }
         })
        }
         
     }
     const updateInfo={
         status:"Approved"
     }

     
     const statusUpdate=(id)=>{
       
        fetch(`http://localhost:5000/bookData/${id}`,{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(updateInfo)
        })
     }

    return (
        <div className="container"> 
          <p className="text-center text-success">admin panal</p> 
             <div className="col-md-12 ">
               <table className="table">
                      <thead>
                           <tr>
                           
                           <th >Name</th>
                           <th>EmailId</th>
                          
                           <th >Tour Spot</th>
                           <th >Personal_code</th>
                           
                           <th >Tour Cost</th>
                           <th >Payment</th>
                           <th >Action</th>
                           </tr>
                       </thead>
         
              
              
                  
                           {
                               lists.map(lis=> <tbody >
                           
                                   <tr >
                                
                                       <td >{lis.name}</td>
                                       <td>{lis.email}</td>
                                      
                                       <td>{lis.spot}</td>
                                       <td>{lis.phn}</td>
                                       <td>{lis.price}</td>
                                       <td className="fw-bolder ">{lis.status}</td>
                                       <td><button onClick={()=>statusUpdate(lis._id)} className='btn btn-danger' ><i className="fas fa-check-circle"></i></button></td>         
                                       <td><button onClick={()=>cancleUserData(lis._id)}  className="btn btn-danger"><i className="far fa-trash-alt"></i></button></td>         
                                   </tr>
                               
                               </tbody> )
                           }
                 
                    
               </table>
               </div>
               
        </div>
      
    );
};

export default ManageAllbooking;