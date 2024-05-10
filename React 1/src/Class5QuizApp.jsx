import React, { useEffect, useState } from 'react'

export default function Class5() {
    const [questions, setQuestions] = useState([]);
    const [questionOptions, setQuestionOptions] = useState([]);
    const [result, setResult] = useState(true);
    let [currentIndex, setCurrentIndex] = useState(0);
    const [showEffect, setShowEffect] = useState(false)//used for useEffect 3rd use

    //useEffect k 3 kam hen 
    //1st Initial:
    //Purpose: Component shru hotay hi koi kam karwana
    //e.g : API call krwana ho, ya aur koye initial logical kam krwana ho
    // kb chalega: 1st "render" k bad chalyga

    useEffect(() => {
        getDataFromApi()
    }, [])
    //[] <- Dependence List
    //[] <- agar ye khali hai mtlb ye Initial time pe chalna hai or 1 bar call hoga 

    // https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple


    /*     //2nd Updation:
            Purpose: jb bhi kisi state ya props me change karna ho
            for e.g: look below in customBtn component
            syntax
            useEffect(()=>{
    
            },[state_ka_name,props_k_update pe])
     */

    /*     //3rd UnMount: 
        // Purpose jb koi component khtm hone wala ho us sy pehly koi kam krwana ho
        //e.g koi bhi listener remove karwana ho
        
            useEffect(()=>{
                return ()=>{
        
                }
            },[])
         */

    const getDataFromApi = async () => {
        const res = await fetch('https://the-trivia-api.com/v2/questions');
        const data = await res.json();
        setQuestions(data);

        const arr = [data[currentIndex].correctAnswer, ...data[currentIndex].incorrectAnswers]
        const shuffledOptions = shuffle(arr)
        setQuestionOptions(shuffledOptions)


    }

    const next = () => {
        setCurrentIndex(currentIndex + 1)

        // Note:
        //currentIndex me 1 add to hogya laken nichy wo is function sy out k bad implement hoga.
        //jbhi nichy bhi humne currentIndex + 1 use kiya hai
        // mera
        const arr = [questions[currentIndex + 1].correctAnswer, ...questions[currentIndex + 1].incorrectAnswers]
        const shuffledOptions = shuffle(arr)
        setQuestionOptions(shuffledOptions)

        // setCurrentIndex(currentIndex++) // it increase after 2 tap so dont use it 
    }
    const restart = () => {
        setCurrentIndex(0)
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


    // early return 
    if (!questions.length) {

        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }

    function toggle() { //just for state update behaviour
        console.log("Result before update", result)//true
        setResult(!result)
        console.log("Result after update", result)//true yhn bhi q k state async 
        // nature ye bad me update hoga ya is function k bad hoga
    }

    console.log('question option', questionOptions)
    const isLastQuestion = currentIndex === questions.length - 1


    return (
        <div>
            <button onClick={() => setShowEffect(!showEffect)}>Show Effect3</button>
            {showEffect
                &&
                <button >
                    <Effect3 />
                </button>
            }

            <h1>Class5</h1>
            <h1>Quiz Application</h1>
            <h4>{currentIndex + 1}. {questions[currentIndex].question.text}</h4>

            <ul>
                {questionOptions.map((data, i) => {
                    return <li key={i}>
                        <label for={data}>
                            <input type="radio"
                                id={data} value={data} name="options" />
                            {data}
                        </label>
                    </li>
                })}
            </ul>
            {isLastQuestion ?
                <button onClick={restart}>Restart</button>
                :
                <button onClick={next}>Next</button>
            }
            <button onClick={toggle}>Toggle</button>

        </div>
    )
}




// component Unmount 3rd use of "useEffect"

function Effect3() {
    useEffect(() => {
        const Click = () => console.log("Clicked!")
        document.addEventListener(("click"), Click)//.addEventListener kehta hai function body banao phir usy use kro q k agar apko removeElementListener lagana ho too issue nhi ho 
        return () => { //return me wo kam kro jb ye componant khtam hojaye 
            //jesa yhn humne upper eventListener lagaya hai. to jb ye component khatm ho 
            //to ye event bhi khtm hojaye is liye hum is return me rakhengy
            //return me rakhi hoye chez jb component unMount(Khtm hoga tb work kryga)
            console.log("CLICKED KHATAM Component Good-Bye")
            document.removeEventListener("click", Click)
        }
    }, [])
    return (
        <div><h1>useEffect 3rd use case</h1>
            <h3>Component Show</h3></div>
    )
}


/* 
1st rakat me sada me 1 tasbi
2nd me rakat me bhi tasbi 1
3rd me pehly subhanallah subhanallah subhanallah
4th itiyat dorod prhengy dua nhi prhengy

*/