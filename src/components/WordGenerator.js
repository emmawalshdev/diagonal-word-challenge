import React, { useState } from "react";
import Results from "../pages/Results";
import { BrowserRouter as Router, useNavigate, Route, Routes, Link, Switch, Navigate } from 'react-router-dom';

const WordGenerator = () => {

    const [userInput, setUserInput] = useState();

    const navigate = useNavigate();

    const submitBtnHandler = (event) => {
        event.preventDefault();
        console.log('btn clicked');
        navigate("/results", {state: {data:userInput}});
        console.log(userInput);
    }

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <form className="" onSubmit={submitBtnHandler}>
            <h2>Enter a word!</h2>
            <p>
                <label htmlFor="string-input">
                    Your word
                </label>
                <input type="text" onChange={inputChangeHandler}>

                </input>
                <button type="submit">
                    Generate diagonal
                </button>
            </p>
      </form>
    )
}

export default WordGenerator;