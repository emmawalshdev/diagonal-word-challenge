import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import classes from './WordGenerator.module.css';

const WordGenerator = () => {

    const [userInput, setUserInput] = useState();

    const navigate = useNavigate();

    const submitBtnHandler = (event) => {
        event.preventDefault();
        if(!userInput){
            alert('You are required to enter a word!')
        } else {
            navigate("/results", {state: {data:userInput}}); // redirect to results page
            // console.log(userInput);
        }
    }

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <form className={classes.wordGenerator} onSubmit={submitBtnHandler}>
            <h1>The Diagnonal Word Generator</h1>
            <p>Enter a word in the text field below & click go to generate your results.</p>
            <div className={classes.formFields}>
                <div className={classes.fieldGroup}>
                    <label htmlFor="string-input">
                        Enter a word: 
                    </label>
                    <input type="text" onChange={inputChangeHandler}>

                    </input>
                </div>
                <button type="submit">
                    Go
                </button>
            </div>
      </form>
    )
}

export default WordGenerator;