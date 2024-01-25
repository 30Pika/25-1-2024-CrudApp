import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import bag from "../img/bag.jpg";

const ProductList = () => {

    const [data, setdata] = useState([]);
    const [Empty, setEmpty] = useState("");

    function getData() {
        axios.get("http://localhost:2030/CrudApp/product")
            .then((res) => {
                setdata(res.data);
            }).catch((err) => {
                console.log(`Error From Product List Page ${err}`);
            })
    }
    useEffect(() => {
        getData();
    }, [])

    const Search = async (event) => {
        const key = event.target.value;
        setEmpty(key);
        axios.get(`http://localhost:2030/search/${key}`)
            .then((res) => {
                if (res.data) {
                    setdata(res.data);
                }
            }).catch((err) => {
                console.log(`Error From Search Block Product List Page ${err}`);
            })
    }

    const Reset = () => {
        getData();
        setEmpty("");
    }

    const ConfirmBuy = (_id, name, company, category, price, quntity) => {
        const buydata = { _id, name, company, category, price, quntity };
        localStorage.setItem("buydata", JSON.stringify(buydata));
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>Product</h1>
                        <div className="d-flex flex-row mb-3">
                            <input type="text" placeholder='Search' onChange={Search} value={Empty}
                                className='p-1 w-25 border-3 text-info fs-5 fw-bold me-1' />
                            <i class='bx bx-x fs-2 p-1 fw-bold border border-dark border-3'
                                onClick={Reset}></i>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center shadow">
                            {
                                data.map((itm) => {
                                    return (
                                        <>
                                            <div class="card m-3 shadow" style={{ width: "14rem" }}>
                                                <img src={bag} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title ">Name : {itm.name}</h5>
                                                    <div>
                                                        <h6>Company : {itm.company}</h6>
                                                        <h6>Categroy : {itm.category}</h6>
                                                    </div>
                                                    <div className="d-flex justify-content-around">
                                                        <div className='fs-5'><i className='bx bx-rupee '></i>{itm.price} /-</div>
                                                        <Link to="/ConfirmBuy"><button type="submit" className='btn btn-primary '
                                                            onClick={() => ConfirmBuy(itm._id, itm.name, itm.company, itm.category, itm.price, itm.quntity)}>
                                                            Buy</button></Link>
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

export default ProductList;
