import React, { useState, useEffect } from "react";
//adding components
import Router from './routes'
import Footer from "./components/Footer/Footer";
import LoadingScreen from "./LoadingScreen";

const App = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 6000)
    }, [])
    return (
        <div >
             {/* {loading === false ? (
            <Router />
            // ) : (
            //     <LoadingScreen />
            //   )} */}
            <Router/>
            <Footer />
        </div>
    )
}

export default App