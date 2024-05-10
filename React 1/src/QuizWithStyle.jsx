import './quiz.css';
import React, { useEffect, useState } from 'react'

function Quiz() {

    // -------------
    const [questions, setQuestions] = useState([]);
    let [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [editIndex, setEditIndex] = useState();


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
        setEditIndex("")

    }
    const restart = () => {
        setCurrentIndex(0)
        setScore(0)
    }

    const OnChangeSelected = (e, i) => {
        const innerText = e.target.innerText;
        setSelectedOption(innerText)
        setEditIndex(i)
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

    // -------------

    return (
        <div className="container">
            <div id='container-body' style={{ display: isLastQuestion ? 'none' : '' }}>
                <div id="title">
                    <h2>Awesome Quiz Application</h2>
                    <span>
                        <h4 id='timeBox'>Time Left <span id='CountBox'>08</span></h4>
                    </span>
                </div>
                <div id='question-container'>
                    <h2>{currentIndex + 1}. {questions[currentIndex].question.text}</h2>
                    <div>
                        {questions[currentIndex].options.map((data, i) => {
                            return <h5 className='options' key={i}
                                style={{ backgroundColor: i === editIndex ? ' #3498db' : '' }}
                                onClick={(e) => OnChangeSelected(e, i)}

                            >{data}
                            </h5>
                        })}
                    </div>
                </div>
                <div id='btn'>
                    <button id='nextBtn' onClick={next} disabled={!selectedOption}>Next</button>
                </div>

            </div>

            <div style={{ display: isLastQuestion ? '' : 'none' }}>
                <h1 >
                    Result {score}
                </h1>
                <button onClick={restart}>Restart</button>
            </div>


        </div >
    );
}

export default Quiz;
