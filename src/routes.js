import React from "react";
import { Routes, Route } from 'react-router-dom'
//adding pages
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Product from "./pages/Product/Product";
// import Page404 from "./pages/404/404";

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/categories/:name" element={<Product />} />
                {/* <Route path="*" element={<Page404 />} /> */}
            </Routes>
        </div>
    )
}

export default Router