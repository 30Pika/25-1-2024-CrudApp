// import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear();
    }

    const auth = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
                <div className="container">
                    <div className="col-md-2">
                        <span className="navbar-brand fs-3 text-decoration-line-through">
                            E-Commerce Website</span>
                    </div>
                    <div className="col-md-5 offset-md-3 justify-content-end">
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link style={{ width: "125px" }} className="nav-link text-white fs-5"
                                        to="/"></Link>
                                </li>
                                {
                                    auth ?
                                        <>
                                            {
                                                auth.admin_email === "admin@gmail.com" ?
                                                    <>
                                                        <li className="nav-item ">
                                                            <Link style={{ width: "135px" }} className="nav-link text-white fs-5"
                                                                to="/AddProduct">Add Product</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                            <Link style={{ width: "120px" }} className="nav-link text-white fs-5"
                                                                to="/ProductList">Product List</Link>
                                                        </li>
                                                    </>
                                                    :
                                                    <>
                                                        <li className="nav-item">
                                                            <Link className="nav-link text-white fs-5"
                                                                to="/Cart">Cart</Link>
                                                        </li>
                                                    </>
                                            }
                                            <li className="nav-item">
                                                <Link onClick={Logout}
                                                    className="nav-link text-white fs-5" to="/Login">
                                                    Logout...</Link>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li className='nav-item '>
                                                <Link to="/Login" className=' nav-link text-white fs-5 '>
                                                    Login </Link>
                                            </li>
                                        </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar;
