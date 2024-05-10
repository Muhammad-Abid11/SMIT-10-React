import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const name = "Abid"
  // boolean
  const isExist = true
  // object
  const stObj = {
    name: "Ali",
    roll: 134,
    sub: "Maths"
  }
  // array
  const sabzi = ["alu", "piyas", "tamator"]

  const carsList = [
    {
      name: "Audi",
      color: "Grey",
      model: 2100,
      feature: ["Power Window", "Power Sterring", "Luxury"]
    },
    {
      name: "Mehran",
      color: "Black",
      model: 2000,
      feature: ["low ", "Oil Consume", "Old Style"]
    },
    {
      name: "CIVIC",
      color: "RED",
      model: 2019,
      feature: ["user-friendly", "Normal Cost"]
    }
  ]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <br />
      <br />
      <table border="10">
        <tr>
          <th>Name</th>
          <th>Model</th>
          <th>Color</th>
          <th>Feature</th>
        </tr>

        {carsList.map((items) => {//carlist  
          return <tr>
            <td>{items.name}</td> {/* carlist k elements */}
            <td>{items.model}</td>
            <td>{items.color}</td>
            <td>
              <ul>
                {items.feature.map(function (featureItems) {//carlist-K->1st item-->feature-->per map-->Feature item agaye
                  // console.log("items-->", items)
                  return <li>{featureItems}</li>
                })}
              </ul>
            </td>
          </tr>
        })}
        <tr></tr>
      </table>
      <br />
      <br />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <h3>Variable--{name}
        <br />
        {isExist}{/*not display  */}
        {/* {stObj} */} {/*error  */}
        <br />
        <br />
        Object--
        {stObj.name}</h3>
      <br />
      <br />
      <p>all array--
        {sabzi}
      </p>


      <h1>array</h1>
      <ul>
        <div>
          {sabzi.map(function (items) {
            return <li>{items}</li>// ye array k items
          })}
        </div>
      </ul>
    </>
  )
}

export default App
