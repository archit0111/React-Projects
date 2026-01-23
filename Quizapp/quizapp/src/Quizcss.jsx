import { ThemeContext } from './context/ThemeContext';
import './Quiz.css'
import { useState, useContext } from 'react';

function Quizcss(){
     const [Ans,setAns] = useState({});
     const [Result,setResult] = useState(false);
     const [correct,setcorrect] = useState(0);
     const [incorrect,setincorrect] = useState(0);
     const [Wrongans,setWrongans] = useState([]);
     const correctAnswers = [2,1,3,4,2,1,3,2,1,3]
     const {theme,settheme} =useContext(ThemeContext);
     

    const Questions = [
         "What does CSS stand for?",
         "Which property is used to change text color in CSS?",
         "Which of the following is the correct syntax for a CSS comment?",
         "How do you select an element with the ID 'main'?",
         "Which property controls the text size?",
         "What is the default position value of an HTML element?",
         "Which CSS property is used to create space between elements?",
         "What is the difference between relative and absolute positioning?",
         "What does the z-index property control?",
         "Which CSS feature allows creating reusable styles for specific conditions (like screen width)?"
        ];

        const options = [
            ["Creative Style Syntax", "Cascading Style Sheets", "Computer Styled Sheets", "Coded Style System"],
            ["color", "font-color", "text-color", "background-color"],
            ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
            [".main", "main", "*main", "#main"],
            ["text-style", "font-size", "size", "font-weight"],
            ["static", "relative", "absolute", "fixed"],
            ["padding", "border", "margin", "spacing"],
            ["Both are same", "Relative is based on its normal position, absolute is based on nearest positioned ancestor", "Relative is for top only", "Absolute moves with scroll"],
            ["Stacking order of positioned elements", "Font size", "Opacity", "Display type"],
            ["Flexbox", "Grid", "Media Queries", "Variables"]
        ];

        function handelAns(e){
        setAns(Ans=>({...Ans, [e.target.name] : e.target.value}))
     };

     function handelResults(){
        if(Object.keys(Ans).length > 1){
            showResults();
        }else{
            alert("Select answer of all the given Questions.");
        }
     }

     function showResults(){
        setResult(true);
        setcorrect(0);
        setincorrect(0);
        let c = 0;
        let inc = 0;
        let wrasn = [];

        Object.keys(Ans).forEach((key)=>{
            if(String(correctAnswers[Number(key)-1]) === String(Ans[key])){
                c++;
            }
            else{
                inc++;
                wrasn.push(Number(key));
            }
        })
        console.log("Q:Correct:", c);
        setcorrect(c);
        setincorrect(inc);
        setWrongans(wrasn);
        
     }


    return(
        <>
        <div id={theme === "Light"?"question":"question_dark"}>
            {Questions.map((q,i) => (
                <div key={i}>
                    <div id={theme === "Light"?"ques":"ques_dark"}><p id={theme === "Light"?"q":"q_dark"}>Q{i+1}.</p>{q}</div>
                    <ul className={theme === "Light"?"option_list":"option_list_dark"}>
                        {options[i].map((opt,o)=>(
                        <li id="option" key={o}><input type="radio" onClick={handelAns} className="ans_selected" name={i+1} value={o+1}/>
                            <p id={theme === "Light"?"op":"op_dark"}>{opt}</p></li>
                    ))}
                    </ul>
                </div>
            ))
            }
            </div>
            <div id='result_btn'><button className={theme === "Light"?"button":"button_dark"} onClick={handelResults}>Show Result</button></div>
            {Result && <><div id='result'>
                <div id="correct">Your correct Answers:{correct}</div>
                <div id="incorrect">Your incorrect Answers:{incorrect}</div>
                </div>
                </>}
        </>
    )
}

export default Quizcss