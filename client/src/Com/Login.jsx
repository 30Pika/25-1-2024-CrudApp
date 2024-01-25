import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleform = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please Fill The All Fileds...!");
    } else {
      await axios.post("http://localhost:2030/Login", {
        email: email,
        password: password
      }).then((res) => {
        // console.log(res.data);
        if (res.data != null) {
          navigate("/");
          const user = res.data;
          localStorage.setItem("user", JSON.stringify(user));
        } else {
          setemail(""); setpassword("");
          alert("No User Found...!");
        }
      }).catch((err) => {
        console.log(`Error From Login Page ${err}`);
      })
    }
  }

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 mt-2 offset-md-3 ">
            <form onSubmit={handleform}>
              <div className='d-flex justify-content-center '>
                <p className='fs-2 fw-bold text-dec-underline'>Sing In</p>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label fw-bold">Email address</label>
                <input type="email" className="form-control border-3 border-info shadow" id="exampleInputEmail1"
                  value={email} onChange={(e) => { setemail(e.target.value) }}
                  aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="inputPassword5" class="form-label fw-bold">Password</label>
                <input type="password" id="inputPassword5" class="form-control border-3 border-info shadow"
                  value={password} onChange={(e) => { setpassword(e.target.value) }}
                  aria-describedby="passwordHelpBlock" />
              </div>
              <div className="d-flex mt-3">
                <button type="submit" class="btn btn-secondary shadow border-1 border-dark d-inline">Submit</button>
                <p className='ms-5 align-bottom '>Create New Account? </p>
                <Link to="/Register" className='fs-5 fw-bold ms-2'>Sing Up...</Link>
              </div>
            </form>
          </div>
        </div>
      </div>                            
    </>
  )
}

export default Login;
