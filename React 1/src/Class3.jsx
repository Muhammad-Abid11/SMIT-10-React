import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import bulbOff from './assets/bulbOff.jpg'
import bulbOn from './assets/bulbOn.jpg'

export default function Class3() {
    const [show, setShow] = useState(true)
    const [bulb, setbulb] = useState(true)

    const url = () => {

    }
    console.log(show)
    return (
        <div>
            <h1>Class3</h1>
            <img src={reactLogo} alt="react-logo" width="300px" />
            <button onClick={() => { setShow(false) }}>Hide Me 1st </button>

            {show && <img src={reactLogo} alt="react-logo" width="300px" />}
            <button onClick={() => { setShow(!show) }}>Hide Me 2nd </button>
            {/* Refactoring */}

            <button onClick={() => { setbulb(!bulb) }}>Bulb On </button>
            {bulb ? <img src={bulbOn} width="300px" /> : <img src={bulbOff} width="300px" />}

            <img src={bulb ? bulbOn : bulbOff} width="300px" />
        </div>
    )
}


/*
Falsy Values
1.false
2.undefined
3.NaN
4.null
5."" khali string false hota hai
6.0
*/

// 1 && 2 && 3 && 4 && 5 && 0

// 1 && 2 && 3 && 4 && 5 && 6 && "hey"

// 1 && 2 && 3 && 4 && 5 && "0"


// && || binary operator
// ? : ternary operator