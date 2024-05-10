// Todo List
import React, { useState } from 'react'

export default function Class4() {
    // const list = ["abc"] 
    const [list, setList] = useState([]);
    const [inputText, setInputText] = useState("");//for input blank use its state
    const [editBtn, setEditBtn] = useState(false);
    const [editIndex, setEditIndex] = useState();

    const updatedText = (e) => {
        //input sy value get krlo
        //updated 'value' ko global me save kr get krlo
        const value = e.target.value
        // console.log("value-->", value)
        setInputText(value)
    }

    const addItem = () => {
        //kia krna hai : INPUT ki value array me ajaye
        // console.log("value from setInputText-->", inputText)

        // const tempList = []; //extra also work
        // tempList.push(...list, inputText) // extra also work
        const tempList = [...list, inputText];
        setList(tempList)
        setInputText("")//to clear input field
    }

    const deleteItem = (index) => {
        const tempList = [...list]; //list ki copy q k state is immutable
        tempList.splice(index, 1)//index pe jao or 1 delete krdo
        setList(tempList)

    }

    const editItem = (index) => {
        //jb edit pe click ho wo whn sy hat jaye or input pe ajaye
        //or jb update pe click hoto array me wapas ajaye
        setEditBtn(true)

        // const editText = list.slice(index, index + 1)
        // or
        const editText = list[index]//sir
        setInputText(editText)//inputField me jo value delete hoye hai wo rakh do
        setEditIndex(index)// q k jo value edit hoye update ho kr wapas apni jagah pe jaye
    }

    const UpdateItem = () => {
        const tempList = [...list];
        // tempList.splice(editIndex, 1, inputText) //jb upper slice use ho to 1 element delete kr "newElement" add kro
        // or
        setEditBtn(false)
        tempList[editIndex] = inputText //sir
        setList(tempList)
        setInputText("")
    }
    return (
        <div>
            <h1>Class 4 Todo List</h1>

            <input value={inputText} type="Enter Any Item" onChange={updatedText} />
            {editBtn ? <button onClick={UpdateItem}>Update Item</button> : <button onClick={addItem}>Add Item</button>}

            <ul>
                {list.map((list, i) => {
                    return <li key={i}
                        style={{ backgroundColor: i === editIndex ? 'red' : 'white' }}
                    >
                        {list}
                        <button onClick={() => editItem(i)}>Edit</button>
                        <button onClick={() => deleteItem(i)}>Delete</button>
                    </li>
                })}
            </ul>
        </div >
    )
}
