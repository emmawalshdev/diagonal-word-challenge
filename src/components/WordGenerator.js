import React from "react";
import Results from "../pages/Results";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';

const WordGenerator = () => {
    return (
        <div className="">
            <Router>
            <div>
                <Link to='/about'>
                Submit
                </Link>
            </div>
            <Routes>
                {/* redirect to results page after submission */}
                <Route path='/results' exact element={<Results/>} />
            </Routes>
            </Router>
      </div>
    )
}

export default WordGenerator;