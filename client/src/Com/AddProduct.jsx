import React, { useState } from 'react'
import axios from 'axios';

const AddProduct = () => {

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [category, setcategory] = useState("");
    const [subcategory, setsubcategory] = useState("");
    const [company, setcompany] = useState("");
    const [quntity, setquntity] = useState("");

    const handleform = async (e) => {
        e.preventDefault();
        const userId = JSON.parse(localStorage.getItem("user"))._id;
        if (!name || !price || !category || !company || !quntity) {
            alert("Please Fill The All Filed...!");
        } else {
            await axios.post("http://localhost:2030/CrudApp/product", {
                name: name,
                price: price,
                category: category,
                subcategory: subcategory,
                userId: userId,
                company: company,
                quntity: quntity
            }).then((res) => {
                if (res.data) {
                    alert("Add Product Successfully...");
                    setname(""); setprice(""); setcategory(""); setcompany(""); setsubcategory("");
                }
            }).catch((err) => {
                console.log(`Error From Add Product Page ${err}`);
            });
        };
    };

    return (
        <>
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-5 offset-md-3 mt-5 border border-2 border-dark rounded">
                        <form onSubmit={handleform}>
                            <h1 className='text-center'>Add Product</h1>
                            <input type="text" placeholder='Product Name' onChange={(e) => setname(e.target.value)}
                                className='form-control mb-3 fw-bold shadow border-3' />
                            <input type="text" placeholder='Product Price' onChange={(e) => setprice(e.target.value)}
                                className='form-control mb-3 fw-bold shadow border-3' />
                            <input type="text" placeholder='Product Category' onChange={(e) => setcategory(e.target.value)}
                                className='form-control mb-3 fw-bold shadow border-3' />
                            <input type="text" placeholder='Product Sub-Category' onChange={(e) => setsubcategory(e.target.value)}
                                className='form-control mb-3 fw-bold shadow border-3' />
                            <input type="text" placeholder='Product Company' onChange={(e) => setcompany(e.target.value)}
                                className='form-control mb-3 fw-bold shadow border-3' />
                            <input type="text" placeholder='Product Quntity' onChange={(e) => setquntity(e.target.value)}
                                className='form-control mb-3 fw-bold shadow border-3' />
                            <button className="btn btn-secondary border offset-sm-5 mb-3" type='submit'>
                                Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct;
