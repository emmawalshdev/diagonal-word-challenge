import React from "react";
import WordGenerator from "../components/WordGenerator";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom';


const Home = () => {

    return (
        <div>
            <h1>Home</h1>
            <WordGenerator/>
        </div>
    )
}

export default Home;