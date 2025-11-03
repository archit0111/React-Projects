import './Quiz.css'
import { useState } from 'react';

function Quizcss(){
     const [Ans,setAns] = useState({});
     const [Result,setResult] = useState(false);
     const [correct,setcorrect] = useState(0);
     const [incorrect,setincorrect] = useState(0);
     const [Wrongans,setWrongans] = useState([]);
     

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
            ["Cascading Style Sheets", "Creative Style Syntax", "Computer Styled Sheets", "Coded Style System"],
            ["color", "font-color", "text-color", "background-color"],
            ["/* comment */", "<!-- comment -->", "// comment", "# comment"],
            ["#main", ".main", "main", "*main"],
            ["font-size", "text-style", "size", "font-weight"],
            ["static", "relative", "absolute", "fixed"],
            ["margin", "padding", "border", "spacing"],
            ["Relative is based on its normal position, absolute is based on nearest positioned ancestor", "Both are same", "Relative is for top only", "Absolute moves with scroll"],
            ["Stacking order of positioned elements", "Font size", "Opacity", "Display type"],
            ["Media Queries", "Flexbox", "Grid", "Variables"]
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
        Object.keys(Ans).map((Element,i,key)=>{
            key={i}
            if(correctAnswers[i] === (Ans[key])){
                setcorrect(correct=>correct+1);
            }
            else{
                setincorrect(incorrect=>incorrect+1);
                setWrongans(...Wrongans, i);
            }
        })
        
     }


    return(
        <>
        <div id="question">
            {Questions.map((q,i) => (
                <div key={i}>
                    <div id="ques"><p id="q">Q{i+1}.</p>{q}</div>
                    <ul className="option_list">
                        {options[i].map((opt,o)=>(
                        <li id="option" key={o}><input type="radio" onClick={handelAns} className="ans_selected" name={i+1} value={o}/>
                            <p id="op">{opt}</p></li>
                    ))}
                    </ul>
                </div>
            ))
            }
            </div>
            <div id='result_btn'><button onClick={handelResults}>Show Result</button></div>
            {Result && <><div id='result'>
                <div id="correct">Your correct Answers:{correct}</div>
                <div id="incorrect">Your incorrect Answers:{incorrect}</div>
                </div>
                </>}
        </>
    )
}

export default Quizcss