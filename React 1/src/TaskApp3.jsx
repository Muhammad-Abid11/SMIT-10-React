import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import bulbOff from './assets/bulbOff.jpg'
import bulbOn from './assets/bulbOn.jpg'

export default function TaskApp3() {
    const [bulb, setbulb] = useState(true)
    // 1) Using states, render a text "Hello World", 
    // on clicking it, it should toggle to "Hello Pakistan", and vice versa!

    const [text, setText] = useState("Hello World")

    const handle = () => {
        // text === "Hello World" ? setText("Hello Pakistan") : setText("Hello World")
        setText(text === 'Hello World' ? 'Hello Pakistan' : 'Hello World');
    }
    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => { handle() }}>Press Me</button>
            <h1>Task 2</h1>
            <button onClick={() => { setbulb(true) }}>Bulb On </button>
            <button onClick={() => { setbulb(false) }}>Bulb off </button>
            {bulb ? <img src={bulbOn} width="300px" /> : <img src={bulbOff} width="300px" />}

        </div>
    )
}
