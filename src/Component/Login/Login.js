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
       



        <div className=" mx-auto row border w-50 p-2 mt-5 mb-2">
             <h1 className="text-center">LogIn From</h1>
           <div >
           <label for="basic-url" className="form-label">Email</label>
            <div className="input-group mb-3">
                 <input  type="email" className="form-control  mb-3" id="basic-url" aria-describedby="basic-addon3"/>
            </div>
           </div>
            <div>
            <label for="basic-url" className="form-label">Password</label>
            <div className="input-group mb-3">
                 <input  type="password" ror="4" col="4" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
            </div>
            </div>
           <div>
          
            <div className="input-group mb-3">
                  <input   type="submit" ror="4" col="4" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
            </div> <br /> <br />
            <p className="text-center">------------or------------</p>
            <p className="text-center mt-3"><button onClick={signInUsingGoogle1} className="btn btn-danger ">Google logIN</button></p>
          

        </div>
       

    </div>
    );
};

export default Login;