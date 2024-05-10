import React from 'react'

export default function Score(props) {
    console.log(props)
    return (
        <div>Score of {props.name}
            <button onClick={() => props.changeName("Name from Child")}>Change Name</button>
        </div >
    )
}
