import React from "react";
import './App.css'
//adding components
import Router from './routes'
import Footer from "./components/Footer/Footer";

const App = () => {


    const loading = () => {
        setTimeout(() => {
            var x = document.getElementById('loadingContainer')
            x.style.display = "none";
        }, 2000)
    }
    return (
        <div onLoad={loading}>
            <div className="loader-container" id="loadingContainer">
                <div className="spinner"></div>
            </div>
            <Router />
            <Footer />


        </div>
    )
}

export default App