import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hook/useAuth';


const Login = () => {
    const history= useHistory()
    const location= useLocation();
    const redirect_uri= location.state?.from || "/home"
    const{signInUsingGoogle,setloading}=useAuth()
    const signInUsingGoogle1=()=>{
        signInUsingGoogle()
        .then((result) => {
            history.push(redirect_uri)
            setloading(false)
    
        })
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
           
            <div className="border w-50">
            <div className="mb-3  p-5">
            <h1 className="text-center">LogIn From</h1>
                <label for="exampleFormControlInput1" className="form-label ">Email address</label>
                <input type="email" className="form-control mb-2" id="exampleFormControlInput1" placeholder="name@example.com"/>
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password"/>
                <p className="text-center mt-3"><button className="btn btn-primary ">Submit</button></p>
                <p className="text-center">------------or------------</p>
                <p className="text-center mt-3"><button onClick={signInUsingGoogle1} className="btn btn-danger ">Google logIN</button></p>
            </div>
            </div>
        </div>
    );
};

export default Login;