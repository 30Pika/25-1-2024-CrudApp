import { Route, Routes } from "react-router-dom"
import Navbar from "./Com/Navbar"
import Login from "./Com/Login"
import Register from "./Com/Register"
import PrivateCom from "./Com/PrivateCom";
import AddProduct from "./Com/AddProduct";
import ProductList from "./Com/ProductList";
import Update from "./Com/Update";
import Buy from "./Com/Buy";
import Cart from "./Com/Cart";
import ConfirmBuy from "./Com/ConfirmBuy";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrivateCom />}>
          <Route path="/AddProduct" element={<AddProduct />}></Route>
          <Route path="/ProductList" element={<ProductList />}></Route>
          <Route path="/Update" element={<Update />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
          <Route path="/ConfirmBuy" element={<ConfirmBuy />}></Route>
          <Route path="/Logout" element={<h1>Logout</h1>}></Route>
        </Route>
        <Route path="/" element={<Buy />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  )
}

export default App
