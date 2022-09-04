import React from "react";
import { Routes, Route } from 'react-router-dom'
//adding pages
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Contact from "./pages/Contact/Contact";
import Products from "./pages/Products/Products";
import Page404 from "./pages/404/404";

const Router = () => {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/categories/:name" element={<Products />} />
                <Route path="/contact-us" element={<Contact />} />

            <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    )
}

export default Router