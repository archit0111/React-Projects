import './Quizapp.css'
import Quizhtml from './Quizhtml'
import Quizcss from './Quizcss'
import Quizjs from './Quizjs'
import Quizreact from './Quizreact'
import { useState } from 'react'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function Quizapp(){
    const [html,setHtml] = useState(false);
    const [css,setCss] = useState(false);
    const [js,setJs] = useState(false);
    const [react,setReact] = useState(false);
    const {theme, toggleTheme} = useContext(ThemeContext);

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


    function handelToggle(){
        toggleTheme();
        theme==="Light"?document.body.style.backgroundColor="black":document.body.style.backgroundColor="rgb(153 245 255)";
    }

    return(
        <>
        <div className={theme==="Light"?"header":"header_dark"}>QUIZAPP </div>
        <div id="btn_theme"><button id={theme==="Light"?"theme_btn":"theme_btn_dark"} onClick={handelToggle}>Switch Theme</button></div>
        <div className="quiz_main">
            <div className="div1">
                <div className={theme==="Light"?"quiz_box":"quiz_box_dark"}>
                <div id="h4_div"><h4 className={theme==="Light"?"h4":"h4_dark"}>HTML Quiz</h4></div>
                <button className={theme==="Light"?"btn":"btn_dark"} name='html' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            <div className={theme==="Light"?"quiz_box":"quiz_box_dark"}>
                <div id="h4_div"><h4 className={theme==="Light"?"h4":"h4_dark"}>CSS Quiz</h4></div>
                <button className={theme==="Light"?"btn":"btn_dark"} name='css' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            </div>
            <div className="div2">
                <div className={theme==="Light"?"quiz_box":"quiz_box_dark"}>
                    <div id="h4_div"><h4 className={theme==="Light"?"h4":"h4_dark"}>Javascript Quiz</h4></div>
                <button className={theme==="Light"?"btn":"btn_dark"} name='js' onClick={handleStartQuiz}>Start Quiz</button>
            </div>
            <div className={theme==="Light"?"quiz_box":"quiz_box_dark"}>
                <div id="h4_div"><h4 className={theme==="Light"?"h4":"h4_dark"}>React Quiz</h4></div>
                <button className={theme==="Light"?"btn":"btn_dark"} name='react' onClick={handleStartQuiz}>Start Quiz</button>
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