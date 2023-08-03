import React, { useState } from "react";
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';

const WordGenerator = () => {

    const [userInput, setUserInput] = useState();

    const navigate = useNavigate();

    const submitBtnHandler = (event) => {
        event.preventDefault();

        navigate("/results", {state: {data:userInput}}); // redirect to results page
        // console.log(userInput);
    }

    const inputChangeHandler = (event) => {
        setUserInput(event.target.value);
    }
    return (
        <form className="" onSubmit={submitBtnHandler}>
            <h2>The Diagnonal word Generator</h2>
            <p>Enter a word in the text field below & click go to generate your results.</p>
            <p>
                <label htmlFor="string-input">
                    Text
                </label>
                <input type="text" onChange={inputChangeHandler}>

                </input>
                <button type="submit">
                    Go
                </button>
            </p>
      </form>
    )
}

export default WordGenerator;