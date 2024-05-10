import React, { useEffect, useState } from 'react'
import FbPost from './components/FbPost'
import Score from './views/Score'

const staticData = {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
}

export default function TaskApp6Fb() {

    const [name, setName] = useState("Parent State")

    const changeName = (newName) => setName(newName)
    /*    useEffect(() => {
           fetchPost()
       }, [])
   
       const fetchPost = async () => {
           const res = await fetch("https://dummyjson.com/products")
           const data = await res.json()
           console.log(res)
   
       }
    */


    return (
        <div>
            <h1>TaskApp6Fb</h1>
            <FbPost />
            <Score name={name} changeName={changeName} />

            {/* 

Child sy parent ki state change krna

1. Create a function in Parent component(App.js) that will update the state
2. Pass that function into the component (Score.js) via props
3. Call the function from Child component (Score.js) on any event you want

*/}

        </div>
    )
}
