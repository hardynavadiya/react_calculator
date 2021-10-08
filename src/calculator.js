import React, {useState} from 'react'

import './css/style.css';

const Calculator = () => {
    const [result, setresult] = useState("");

    const handleplus = (e) => {
        setresult(result.concat(e.target.name));
    }

    const clear = () => {
        setresult("");
    }

    const backspace = () => {
        setresult(result.slice(0, -1));
    }

    const calculate = () => {
        try{
            setresult(eval(result).toString());
        }catch(err){
            setresult("Error");
        }
        
    }
    return (
        <div className="container">
            <form>
                <input type="text" value={result} className="textbox"/>
            </form>
            
            <div className="keypad">
                <button  onClick = {clear} id="clear">clear</button>
                <button  onClick = {backspace} id="backspace">C</button>
                <button name="/" onClick = {handleplus} >&divide;</button>
                <button name="7" onClick = {handleplus}>7</button>
                <button name="8" onClick = {handleplus}>8</button>
                <button name="9" onClick = {handleplus}>9</button>
                <button name="*" onClick = {handleplus}>&times;</button>
                <button name="4" onClick = {handleplus}>4</button>
                <button name="5" onClick = {handleplus}>5</button>
                <button name="6" onClick = {handleplus}>6</button>
                <button name="-" onClick = {handleplus}>&ndash;</button>
                <button name="1" onClick = {handleplus}>1</button>
                <button name="2" onClick = {handleplus}>2</button>
                <button name="3" onClick = {handleplus}>3</button>
                <button name="+" onClick = {handleplus}>+</button>
                <button name="0" onClick = {handleplus}>0</button>
                <button name="." onClick = {handleplus}>.</button>
                <button name="=" onClick = {calculate} id="result">=</button>
            </div>
        </div>
    )
}

export default Calculator
