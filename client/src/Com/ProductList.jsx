import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

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
    const Delete = (id) => {
        axios.delete(`http://localhost:2030/CrudApp/product/${id}`)
            .then(() => {
                getData();
            }).catch((err) => {
                console.log(`Error Form Product Delete function ${err}`);
            })
    }
    const Update = (id, name, price, quntity, category, subcategory, company) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("price", price);
        localStorage.setItem("quntity", quntity);
        localStorage.setItem("category", category);
        localStorage.setItem("category", subcategory);
        localStorage.setItem("company", company);
    }

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

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover mt-2 caption-top border-top border-dark">
                            <caption className='fw-bold text-center fs-2'>Product List</caption>
                            <caption >
                                <div className='d-flex flex-row'>
                                    <input type="text" placeholder='Search' onChange={Search} value={Empty}
                                        className='p-1 w-25 border-3 text-info fs-5 fw-bold me-1' />
                                    <i class='bx bx-x fs-2 p-1 fw-bold border border-dark border-3'
                                        onClick={Reset}></i>
                                </div>
                            </caption>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quntity</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Sub-Category</th>
                                    <th scope="col">Compnay</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((itm, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{itm.name}</td>
                                                    <td>{itm.price}</td>
                                                    <td>{itm.quntity}</td>
                                                    <td>{itm.category}</td>
                                                    <td>{itm.subcategory}</td>
                                                    <td>{itm.company}</td>
                                                    <td><Link to="/Update"
                                                        onClick={() => Update(itm._id, itm.name, itm.price, itm.quntity, itm.category, itm.subcategory, itm.company)}>
                                                        <i class='bx bx-edit-alt fs-4 text-info'></i></Link></td>
                                                    <td onClick={() => { if (window.confirm("Are You Sure To Delete Data...!")) { Delete(itm._id) } }}
                                                    ><i className='bx bx-trash fs-4 text-danger'></i></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;
