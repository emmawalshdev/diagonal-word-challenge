import React from "react";
import Results from "../pages/Results";
import { BrowserRouter as Router, useNavigate, Route, Routes, Link, Switch, Navigate } from 'react-router-dom';

const WordGenerator = () => {
    const navigate = useNavigate();
    const submitBtnHandler = (event) => {
        event.preventDefault();
        console.log('btn clicked');
        navigate("/results");
    }
    return (
        <form className="" onSubmit={submitBtnHandler}>
            <h2>Enter a word!</h2>
            <p>
                <label htmlFor="string-input">
                    Your word
                </label>
                <input type="text">

                </input>
                <button type="submit">
                    Generate diagonal
                </button>
            </p>
      </form>
    )
}

export default WordGenerator;