import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Results from "./pages/Results";

const RoutesPath = () => {
    return (
        <div className="">
            <Router>
                <Routes>
                    {/* redirect to results page after submission */}
                    <Route path='/results' exact element={<Results/>} />
                    <Route path='/' exact element={<Home/>} />
                </Routes>
            </Router>
      </div>
    )
}


export default RoutesPath;