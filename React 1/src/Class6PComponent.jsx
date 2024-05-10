import React, { useState } from 'react'
import Dashboard from './views/Dashboard'
import ContactUs from './views/ContactUs'
import AboutUs from './views/AboutUs'
function PComponent() {
    /* 
    Components types in terms of Usage
    1. Screenwise Components (e.g AboutUs.js, Dashboard.js etc )
    2. Reuseable Components()

    export defaul kisi bhi name sy kro too chal jayega or import kisi bhi name sy hojayega 
    laken standard capital name
    
    Props: Parent sy child ko data dyna
    */
    const [screen, setScreen] = useState('dashboard')
    return (

        <div className="App">
            <h1>Welcome to Components!</h1>
            <h1>
                Parent-Component
            </h1>

            <div className='navigation-bar'>
                <button onClick={() => setScreen('dashboard')}>Dashboard</button>
                <button onClick={() => setScreen('contactUs')}>Contact Us</button>
                <button onClick={() => setScreen('aboutUs')}>About Us</button>
                <button onClick={() => setScreen("childa")}>ChildA</button>
            </div>

            {screen === 'dashboard' && <Dashboard />}
            {screen === 'contactUs' && <ContactUs />}
            {screen === 'aboutUs' && <AboutUs />}
            {screen === "childa" && <ChildA />}

        </div>
    )
}



function ChildA() {
    return (
        <>
            <h5>{"--->"}Hi I'm Child A of Parent Component</h5>
            <Custombtn name='Ali' />
        </>
    )
}

function Custombtn(props) {
    return (
        <>
            <button>{props.name}</button>
        </>
    )
}



export default PComponent



/*
08-01-24 
SPA like OLX
MPA like ebay


go tutorial 
step 1 npm i react-router-dom 
step 2 create folder "src"-->"config" -->"router.js"

*/