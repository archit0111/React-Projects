import './Quiz.css'
import { useState } from 'react';

function Quizjs(){
    const [Ans,setAns] = useState({});
    const [Result,setResult] = useState(false);
    const [correct,setcorrect] = useState(0);
    const [incorrect,setincorrect] = useState(0);
    const [Wrongans,setWrongans] = useState([]);
    const correctAnswers = [1, 4, 2, 1, 3, 1, 2, 3, 4, 2];


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
        ["print()", "echo()", "log.console()", "console.log()"],
        ["null", "object", "undefined", "number"],
        ["===", "==", "=", "=>"],
        ["4", "NaN", "'22'", "error"],
        ["It refers to the current execution context", "It always refers to window", "It refers to parent object only", "It has no meaning"],
        ["A function inside a function", "A function that remembers its lexical scope even when executed outside", "A method to close programs", "A callback"],
        ["Boolean", "Number", "String", "Character"],
        ["To stop loops", "To define promises", "To debug code", "To handle asynchronous operations more easily"],
        ["JSON.stringify()", "JSON.parse()", "parse.JSON()", "JSON.convert()"]
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
        <div id="question">
            {Questions.map((q,i) => (
                <div key={i}>
                    <div id="ques"><p id="q">Q{i+1}.</p>{q}</div>
                    <ul className="option_list">
                        {options[i].map((opt,o)=>(
                        <li id="option" key={o}><input type="radio" onClick={handelAns} className="ans_selected" name={i+1} value={o+1}/>
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