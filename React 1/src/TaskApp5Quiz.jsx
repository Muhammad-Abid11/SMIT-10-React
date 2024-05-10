// Class5QuizApp.jsx me  sir k method option ko render krna best hai
// mane alag kiya hai unhon ne map use kiya hai

import React, { useEffect, useState } from 'react'
import './index.css' //due to Carousel I off it

export default function TaskQuizApp() {
    const [questions, setQuestions] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);


    useEffect(() => {
        getDataFromApi()
    }, [])


    const getDataFromApi = async () => {
        const res = await fetch('https://the-trivia-api.com/v2/questions');
        const data = await res.json();

        //q k Correct and incorrect ans alag alg hen too
        //"data" pe map run kro or usme 1 new object kro "Options" k name k or usy suffle kr 
        // ushi "data" me kr k "State" me save krdo
        data.map((item) => {
            item.options = [item.correctAnswer, ...item.incorrectAnswers] //item me array banao "options" k name k or data rakho
            item.options = shuffle(item.options)    //usy shuffle krdo
        })
        setQuestions(data);// or ab data ko set krdo
    }

    const next = () => {
        // score
        questions[currentIndex].correctAnswer === selectedOption
            ?
            setScore(score + 1) : setScore(score + 0)

        // render question 
        setCurrentIndex(currentIndex + 1) //current index increase hoye laken nichy hamen phir bhi + lagana hoga 
        // q k "currentIndex" k state foran update nhi hota

        // clear input
        setSelectedOption("")
    }
    const restart = () => {
        setCurrentIndex(0)
        setScore(0)
    }

    const OnChangeSelected = (e) => {
        setSelectedOption(e.target.value)
    }

    const shuffle = (array) => {
        let currentIndes = array.length, randomIndex;
        while (currentIndes > 0) {
            randomIndex = Math.floor(Math.random() * currentIndes);
            currentIndes--;
            [array[currentIndes], array[randomIndex]] = [
                array[randomIndex], array[currentIndes]];
        }
        return array;
    }
    if (!questions.length) {

        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    const isLastQuestion = currentIndex === questions.length - 1
    console.log("score-->", questions[currentIndex].correctAnswer)
    console.log("score-->", score)
    return (
        <div >
            <h1>Quiz Application</h1>

            <div style={{ display: isLastQuestion ? 'none' : '' }}>
                <h4>{currentIndex + 1}. {questions[currentIndex].question.text}</h4>
                <ul>
                    {questions[currentIndex].options.map((data, i) => {
                        return <li key={i}>
                            <label for={data}>
                                <input type="radio"
                                    onChange={(e) => OnChangeSelected(e)}
                                    checked={selectedOption === data}//jesa hi value change condition false or tick remove
                                    id={data} value={data} name="options" />
                                {data}
                            </label>
                        </li>
                    })}
                </ul>
                <button onClick={next} disabled={!selectedOption}>Next</button>
                {/* disabled until any option selected */}
            </div>
            <div style={{ display: isLastQuestion ? '' : 'none' }}>
                <h1 >
                    Result {score}
                </h1>
                <button onClick={restart}>Restart</button>
            </div>
        </div>
    )
}




