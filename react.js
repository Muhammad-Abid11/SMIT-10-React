// https://www.youtube.com/watch?v=U9sDK8zTJ8Y
// 1)----------------x-------------

// pwa--> progressive web application
// robots.txt  for SEO

// node-modules place where all dependances that used for WEB-Pack

// 2)----------------x-------------

// React Components  -->
// 1.Class Component (by using class keyword of JS)
// 2.functional Component(by using function keyword)

//in return we write--> JSX = JS + XML(XML is not a HTML but it's like a structure)

// 3)----------------x-------------Difference btw "useState" and "normal variables"

// for varible update value ye down
// wala react pe kam nhi kryga ,q k easa update krne sy
// react k internally ye update hojayega laken
// react pe show nhi hoga.q k render phir nhi run hua too  

let name1 = "Tony Stark";
return (
    <div>
        <h1>Hello,{name1}</h1>

        <button onClick={() => {
            name1 = "XYZ"
        }}>Update Name</button>
    </div>
)

//too  we use "useState" for variable to update its state.
// down work kryga "react" pe q k "useState" state k update k bad
// re-render hota hai

import { useState } from "react";
// let name2 = "Tony Stark";
const [name2, setName] = useState("Tony Stark")
return (
    <div>
        <h1>Hello,{name2}</h1>
        <button onClick={() => {
            setName("Sameer") //it will change the "name2" variable value
            // name2="Sameer" //not works because of some rules of "React"
        }}>Update Name</button>
    </div>
)

// 4)----------------x------------- "useState" return "array"

// const [name2, setName] = useState("Tony Stark")
//why we use "[]" in upper-side because its a syntax by "react"
// and also its a "array desturetuce" methode

// let me explain--> "useState" return an array which
// which 1st return is "variable" that contain data
// which 2nd return is "modifier function" of that variable

// so we also break it for more deeply understand
// const [name2, setName] = useState("Tony Stark")//---->"a"
const arr = useState("Tony Stark")
const name3 = arr[0]
const setName3 = arr[0]

//this will also work same if we replace equation "a"

// 5)----------------x-------------
/*

 const [name2, setName] = useState("Tony Stark")
 kiya zaror hai "setName" hi use kryen "name" k
 k "modifier function" banany k liye
 NH! .ye 1 convention jo variable usko update k liye ushi k name k sath "set" lagado
 e.g

 const [father, setFather] = useState("Abid")
 const [payment, setPayment] = useState(123123)

 */

// 6)----------------x-------------

/*
 const country=PK
 <Header country={country}/> //state-passed to "Header-Component"


 const Header = (props) => { //state-received as "Props" in "Header-Component"
    // or
    // const Header = ({country}) => { //like object destructure
    return ({
    < div >
        { props.country }
        // {country} // so direct use
    </div >
    })
 }

 */


// 7)----------------x------------- default export /normal export

/*
IN XYZ.jsx down two function

const Name1 = (name) => {
    console.log("Name-->", name)

}
export default Name1


// so import in another file like
import Name1 from "./XYZ.jsx"

*/

// -----------------------
/*
IN ABC.jsx down two function

export const Name = (name) => {
    console.log("Name-->", name)

}
export const Contact = (contact) => {
    console.log("Contact-->", contact)
}

// so import in another file like
import {Name,Contact} from "./ABC.jsx"
*/



// ----------------------- now move to project slider

// 0%4 1%4 2%4 3%4 4%4