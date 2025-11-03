import './Quiz.css'
import { useState } from 'react';

function Quizjs(){
    const [Ans,setAns] = useState({});
    const [Result,setResult] = useState(false);
    const [correct,setcorrect] = useState(0);
    const [incorrect,setincorrect] = useState(0);
    const [Wrongans,setWrongans] = useState([]);

    const Questions = [
        "Which keyword is used to declare a variable in JavaScript?",
        "Which method is used to print messages to the console?",
        "What is the output of typeof null?",
        "Which symbol is used for strict equality comparison?",
        "What will `console.log(2 + '2')` print?",
        "What does the 'this' keyword refer to in JavaScript?",
        "What is a closure in JavaScript?",
        "Which of the following is NOT a JavaScript data type?",
        "What is the purpose of async and await?",
        "Which method converts a JSON string into an object?"
    ];
    const options = [
        ["var", "int", "string", "num"],
        ["console.log()", "print()", "echo()", "log.console()"],
        ["object", "null", "undefined", "number"],
        ["===", "==", "=", "=>"],
        ["'22'", "4", "NaN", "error"],
        ["It refers to the current execution context", "It always refers to window", "It refers to parent object only", "It has no meaning"],
        ["A function that remembers its lexical scope even when executed outside", "A function inside a function", "A method to close programs", "A callback"],
        ["Boolean", "Number", "String", "Character"],
        ["To handle asynchronous operations more easily", "To stop loops", "To define promises", "To debug code"],
        ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "JSON.convert()"]
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

export default Quizjs