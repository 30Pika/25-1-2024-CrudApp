import React, { useEffect, useState } from 'react'
import bag from "../img/bag.jpg";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StoreBuyProduct = () => {

  const [quntity, setQuntity] = useState(1);
  const [buydata, setBuydata] = useState();
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    setBuydata(JSON.parse(localStorage.getItem("buydata")));
  })

  const handleform = (e) => {
    e.preventDefault();
  }

  const ConfirmBuy = async () => {

    const bill = Number(buydata.price) * quntity;

    await axios.post("http://localhost:2030/CrudApp/buy", {
      userId: auth._id,
      name: buydata.name,
      category: buydata.category,
      company: buydata.company,
      price: buydata.price,
      quntity: quntity,
      bill: bill
    }).then((res) => {
      if (res.data) {
        alert("Product Buy Successfully...");
        localStorage.removeItem("buydata");
        navigate("/Cart");
      }
    }).catch((err) => {
      console.log(`Error From Confirm Buy Page ${err}`);
    })

    const setQut = Number(buydata.quntity) - Number(quntity);

    await axios.put(`http://localhost:2030/CrudApp/product/BuyQut/${buydata._id}`, {
      quntity: setQut
    }).then((res) => {

    }).catch((err) => {
      console.log(`Error From Confirm Page Quntity Modification : ${err}`);
    })
  }

  return (
    <>
      <div className="container-fluid my-2">
        <div className="row">
          <div className="col-md-3 offset-md-5 border border-2 border-dark justify-content-center">
            {buydata ?
              <>
                <div class="card " style={{ width: "20rem" }}>
                  <img src={bag} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title ">Name : {buydata.name}</h5>
                    <div>
                      <h6>Company : {buydata.company}</h6>
                      <h6>Categroy : {buydata.category}</h6>
                    </div>
                    <div className="d-flex mt-1">
                      <form onSubmit={handleform}>
                        <p>Qut : <input type="number" value={quntity} style={{ width: "50px" }}
                          onChange={(e) => setQuntity(e.target.value)} /></p>
                      </form>
                    </div>
                    <div className="d-flex justify-content-around">
                      <div className='fs-5'><i className='bx bx-rupee '></i>{buydata.price} /-</div>
                      <Link to="/ConfirmBuy"><button type="submit" className='btn btn-primary '
                        onClick={() => ConfirmBuy()}>
                        Confirm Buy</button></Link>
                    </div>
                  </div>
                </div>
              </>
              :
              <><h1>No Buying Data</h1></>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default StoreBuyProduct
