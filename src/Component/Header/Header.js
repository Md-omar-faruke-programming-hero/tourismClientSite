import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import logo from "../../image/logo.png"
import "./Header.css"

const Header = () => {
    const{user,signout}=useAuth()
    return (
        <div className="mt-2"> 
            <div className="d-flex bg-success py-1 info">
            <small className="fs-5 ms-5">+1 763-227-5032</small>
            <small className="fs-5 ms-5">info@example.com</small>
            </div>
            <div className="d-flex  align-items-center my-2">
                <div className="w-25 logo">
                   <img className="w-50 ms-5 " src={logo} alt="" /> 
                </div>
                <div>
                   <div  className="d-flex ">
                   <nav>
                        <Link to="/home">Home</Link>
                        {
                            user.email && <Link to="/trip">My Trip</Link>
                        }
                        <Link to="/about">About Us</Link>
                        <Link to="/about">Contact Us</Link>
                        {
                            user.email? <button onClick={signout} className="btn btn-danger">Log out</button> :<Link to="/login">Login</Link>
                        }
                    </nav>
                   
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Header;