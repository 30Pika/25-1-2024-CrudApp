// import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();
    const Logout = () => {
        localStorage.clear();
        // navigate("/Login");
    }

    const auth = JSON.parse(localStorage.getItem("user"));

    return (
        <>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm ">
                <div className="container">
                    <div className="col-md-2">
                        <span className="navbar-brand fs-3 text-decoration-line-through">
                            Contact List</span>
                    </div>
                    <div className="col-md-5 offset-md-7 justify-content-center">
                        <div className="collapse navbar-collapse " id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                {auth ?
                                    <>
                                        {
                                            auth.admin_email === "admin@gmail.com" ?
                                                <>
                                                    <li className="nav-item ">
                                                        <Link style={{ width: "135px" }} className="nav-link text-white fs-5" to="/AddProduct">
                                                            Add Product</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link style={{ width: "120px" }} className="nav-link text-white fs-5"
                                                            to="/ProductList">Product List</Link>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <li className="nav-item">
                                                        <Link style={{ width: "125px" }} className="nav-link text-white fs-5"
                                                            to="/Buy">Buy Product</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link style={{ width: "90px" }} className="nav-link text-white fs-5"
                                                            to="/Cart">Cart</Link>
                                                    </li>
                                                </>
                                        }
                                        <li className="nav-item ">
                                            <Link style={{ width: "160px" }} onClick={Logout}
                                                className="nav-link text-white fs-5" to="/Login">
                                                Logout...</Link>
                                            {/* <i class=' bx bx-log-out ms-2 fs-4 '></i> */}
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
            </nav>
            {/* <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-12 text-center ">
                        <h1 >WellCome</h1>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Navbar;
