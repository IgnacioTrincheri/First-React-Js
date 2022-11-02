import Home from './Home/Home'
import Prod from './Products/Productos'
import NavBar from "../Components/UI/NavBar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:type" element={<Home />}></Route>
        <Route path="/productos/:idProducto" element={<Prod />}></Route>
        <Route path="/*" element={<div>404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;