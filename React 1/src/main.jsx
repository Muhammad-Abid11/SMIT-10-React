import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import TaskApp2 from './TaskApp2.jsx';
import Carousel from './Carousel.jsx';
import './index.css' //due to Carousel I off it
import Class2 from './Class2.jsx';
import Class3 from './Class3.jsx'
import TaskApp3 from './TaskApp3.jsx';
import Class4 from './Class4Todo.jsx';
import Class5 from './Class5QuizApp.jsx';
import TaskQuizApp from './TaskApp5Quiz.jsx';
// import Quiz from './QuizWithStyle.jsx'; //ye off krogy to fb wala work kryga
import PComponent from './Class6PComponent.jsx';
import TaskApp6Fb from './TaskApp6Fb.jsx';
import Router from './config/router.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    {/* <TaskApp2 /> */}
    {/* <Carousel /> */}
    {/* <Class2 /> */}
    {/* <Class3 /> */}
    {/* <TaskApp3 /> */}
    {/* <Class4 /> */}
    {/* <Class5 /> */}
    <TaskQuizApp />
    {/* <Quiz> */}{/* is pe CSS sahi sy nhi lg rha yhn ap new-react me copy kr k use kren */}
    {/* <PComponent /> */}
    {/* <TaskApp6Fb /> */}
    {/* <Router /> */}


  </>
)
