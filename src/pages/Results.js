import React from "react";
import { useLocation, /* other hooks */ } from 'react-router-dom'; 
import classes from './Results.module.css'

const Results = (props) => {
    const { state } = useLocation();
    let str = state.data.split(''); // split word by letter + store in array

    return (
        <div className={classes.results}>
            <h1>Your Results</h1>

            <p>
                <em>
                    You entered the word: <b>{ state.data }</b>
                </em>
            </p>

            <h3>Your word displayed diagonally</h3>

            <table>
                <tbody>
                {/* left to right results */}
                {str.map((item, index) => { // loop through word array + render a row for each item (1-4)    
                        return (
                            <tr>
                                {/* create tds to length of word */}
                                {str.map((item2, index2) => {
                                    if(index === index2){ // match letter on matrix position
                                        return <td>{item}</td>; // letter
                                    }
                                    return <td>{}</td>; // 4 data points
                                })}
                            </tr>
                        )
                })}
                {/* right to left results */}
                {str.map((item, index) => { // loop through word array + render a row for each item (1-4)    
                    return (
                        <tr>
                            {/* create tds to length of word */}
                            {str.map((item2, index2) => {
                                if(((str.length - 1)-index) === index2){ //reverse match
                                    return <td>{item}</td>; // letter
                                }
                                return <td></td>; // empty cells
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Results;