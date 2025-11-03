import './Quizapp.css'
import Quizhtml from './Quizhtml'
import Quizcss from './Quizcss'
import Quizjs from './Quizjs'
import Quizreact from './Quizreact'
import { useState } from 'react'

function Quizapp(){
    const [html,setHtml] = useState(false);
    const [css,setCss] = useState(false);
    const [js,setJs] = useState(false);
    const [react,setReact] = useState(false);

    function handleStartQuiz(e){
        if(e.target.name === "html"){
            setHtml(true);
            setCss(false);
            setReact(false);
            setJs(false);
        }
        else if(e.target.name==="css"){
            setCss(true);
            setHtml(false);
            setJs(false);
            setReact(false);
        }
        else if(e.target.name==="js"){
            setJs(true)
            setCss(false);
            setHtml(false);
            setReact(false);
        }
        else{
            setReact(true)
            setCss(false);
            setHtml(false);
            setJs(false);
        }
    }


    return(
        <>
        <div className="header">Quizapp</div>
        <div className="quiz_main">
            <div className="div1">
                <div className="quiz_box">
                <div id="h4_div"><h4>HTML Quiz</h4></div>
                <button name='html' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            <div className="quiz_box">
                <div id="h4_div"><h4>CSS Quiz</h4></div>
                <button name='css' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            </div>
            <div className="div2">
                <div className="quiz_box">
                    <div id="h4_div"><h4>Javascript Quiz</h4></div>
                <button name='js' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            <div className="quiz_box">
                <div id="h4_div"><h4>React Quiz</h4></div>
                <button name='react' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            </div>
        </div>
        {html?<Quizhtml/>:null}
        {css?<Quizcss/>:null}
        {js?<Quizjs/>:null}
        {react?<Quizreact/>:null}
        </>
    )
}

export default Quizapp