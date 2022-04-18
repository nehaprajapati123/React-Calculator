import React, { useState,useRef } from 'react'
import './App.css'

function Calculator() {
    const [result, setResult] = useState("")
    const inputRef = useRef("")



    function handleClick(e) {
        setResult(result.concat(e.target.name))
    }


    function Delete() {
        setResult(result.slice(0, result.length - 1))
    }


    function Clear() {
        setResult("")
    }


    function Result() {
        try {
            setResult(eval(result).toString())
        }
        catch (error) {
            setResult("Error")
        }


    }

    return (

        <>
                <h1><i>Calculator</i></h1>

            <div className='calc-app'>
            
                <form>
                    <input type="text" value={result} ref={inputRef} />
                </form>
                <div className='keypad'>
                    <button id='backspace' onClick={Delete}>Delete</button>
                    <button name='+' className='operation' onClick={handleClick}>+</button>
                    <button name='1' onClick={handleClick}>1</button>
                    <button name='2' onClick={handleClick}>2</button>
                    <button name='3' onClick={handleClick}>3</button>
                    <button name='-' className='operation' onClick={handleClick}>-</button>
                    <button name='4' onClick={handleClick}>4</button>
                    <button name='5' onClick={handleClick}>5</button>
                    <button name='6' onClick={handleClick}>6</button>
                    <button name='*' className='operation' onClick={handleClick}>*</button>
                    <button name='7' onClick={handleClick}>7</button>
                    <button name='8' onClick={handleClick}>8</button>
                    <button name='9' onClick={handleClick}>9</button>
                    <button name='/' className='operation' onClick={handleClick}>/</button>
                    <button className='dot' name='.' onClick={handleClick}>.</button>
                    <button name='0' onClick={handleClick}>0</button>
                    <button id='clear' onClick={Clear}>AC</button>
                    <button id='result' onClick={Result}>Result </button>
                </div>
            </div>
        </>






    )
}

export default Calculator
