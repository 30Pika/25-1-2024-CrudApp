import React, { useEffect, useState } from 'react'
import bag from "../img/bag.jpg";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Cart = () => {

  const auth = JSON.parse(localStorage.getItem("user"));
  const id = auth._id;
  const [data, setData] = useState([]);

  const BuyData = async () => {
    await axios.get(`http://localhost:2030/CrudApp/buy/${id}`)
      .then((res) => {
        setData(res.data);
      }).catch((err) => {
        console.log(`Error From Cart Page : ${err}`);
      })
  }

  useEffect(() => {
    BuyData();
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className='d-flex justify-content-center position-relative '>
              <div className='position-absolute top-0 start-0 fs-2 fw-bold'>
                <Link to="/" className='text-decoration-none text-dark'>
                  <i class='bx bx-left-arrow-alt'>Back</i>
                </Link>
              </div>
              <h1 className='text-center'>Buy Product List</h1>
            </div>
            <div className="d-flex flex-wrap justify-content-center shadow">
              {
                data.map((itm, index) => {
                  return (
                    <>
                      <div class="card m-3 shadow" style={{ width: "14rem" }}>
                        <img src={bag} class="card-img-top" alt="..." />
                        <div class="card-body">
                          <h5 class="card-title ">Name : {itm.name}</h5>
                          <div>
                            <h6>Company : {itm.company}</h6>
                            <h6>Categroy : {itm.category}</h6>
                            <h6>Buying Qut : {itm.quntity}</h6>
                            <h6>Total Bill : {itm.bill}</h6>
                          </div>
                          <div className="d-flex justify-content-around">
                            <div className='fs-5'><i className='bx bx-rupee '></i>{itm.price} /-</div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart;
