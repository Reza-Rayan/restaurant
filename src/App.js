import React from "react";
import './App.css'
//adding components
import Router from './routes'
import Footer from "./components/Footer/Footer";

const App = () => {
  
    return (
        <div>          
            <Router />
            <Footer />
        </div>
    )
}

export default App