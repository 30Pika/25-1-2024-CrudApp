import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  //state
  const [username, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleform = async (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please Fill The All Filed...");
    }
    else {
      axios.post("http://localhost:2030/register", {
        username: username,
        email: email,
        password: password
      }).then((res) => {
        if (res.data) {
          alert("User Register Successfully...");
          setname(""); setemail(""); setpassword("");
        }
      }).catch((err) => {
        console.log(`Data Not Sending From Register Page ${err}`);
      });
    }
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 mt-2 offset-md-3 ">
            <form onSubmit={handleform}>
              <div className='d-flex justify-content-center '>
                <p className='fs-2 fw-bold text-dec-underline'>Sing Up</p>
              </div>
              <div className="mb-3">
                <label for="exampleInputName" className="form-label fw-bold">User Name</label>
                <input type="name" className="form-control border-3 border-info shadow" id="exampleInputName"
                  value={username} onChange={(e) => { setname(e.target.value) }}
                  aria-describedby="nameHelp" />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                <input type="email" className="form-control border-3 border-info shadow" id="exampleInputEmail1"
                  value={email} onChange={(e) => { setemail(e.target.value) }}
                  aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <label for="inputPassword5" className="form-label fw-bold">Password</label>
              <input type="password" id="inputPassword5" className="form-control border-3 border-info shadow"
                value={password} onChange={(e) => { setpassword(e.target.value) }}
                aria-describedby="passwordHelpBlock" />
              <div id="passwordHelpBlock" className="form-text">
                Your password must be 8-20 characters long, contain letters and numbers,
                and must not contain spaces, special characters, or emoji.
              </div>
              <div className="d-flex mt-3">
                <button type="submit" className="btn btn-secondary shadow border-1 border-dark d-inline">Submit</button>
                <p className='ms-5 align-bottom '>If Alerady Have Any Account? </p>
                <Link to="/Login" className='fs-5 fw-bold ms-2'>Sign In...</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register;
