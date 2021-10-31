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
            <small className=" ms-5">+1 763-227-5032</small>
            <small className="fs-5 ms-5">info@example.com</small>
          </div>
           
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
        <img className="hlogo" src={logo} alt="" /> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                
                {
                    user.email && <Link to="/trip" className="nav-link text-primary fw-bolder">My Trip</Link>
                }
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li>
                {
                    user.email &&  <Link to="/addSpot" className="nav-link text-primary fw-bolder">Add_Travel-spot</Link>
                }
                </li>
                <li>
                    {
                    user.email && <Link to="/manage" className="nav-link  text-primary fw-bolder">ManageAllBooked</Link>
                    }
                </li>
                <li>
                    {
                    user.email? <button onClick={signout} className="btn btn-danger me-2">Log out</button> :<Link className="nav-link " to="/login">Login</Link>
                    }
                </li>
                
            
            </ul>
            
            </div>
        </div>
        </nav>
    </div>
    );
};

export default Header;