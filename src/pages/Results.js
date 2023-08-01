import React from "react";
import { useLocation, /* other hooks */ } from 'react-router-dom'; 

const Results = (props) => {
    const { state } = useLocation();
    console.log(state); 
    
    return (
        <div>
            <h1>Results</h1>
        </div>
    )
}

export default Results;