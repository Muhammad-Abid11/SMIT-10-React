import React, { useState } from 'react'

function Class2() {
    const [name, setName] = useState("Osama SMIT")
    // [stateKaName,set_KrneWalyKName]=useState("Default Value")
    let text = "Moye Moye!"

    const reverse = () => {
        text = text.split("").reverse().join("") // when variable when it update it will not render on DOM
        let name2 = name.split("").reverse().join("")
        setName(name2)
    }


    const reverse2 = (param) => {
        console.log("param pass", param)
    }
    return (
        <div>
            Class2
            <h1>{text}</h1>
            <button onClick={reverse}>Click Me</button>
            <button onClick={() => reverse2("Hi")}>Click Me 2</button>


            <h1>{name}</h1>
            {/* <button onClick={reverse()}>Click Me</button>   <---with() ta k start me run nhi ho*/}
        </div>
    )
}


// State are directly immutable,direct change kren to wo display nhi hoga

export default Class2