import './Quiz.css'
import { useState } from 'react';

function Quizreact(){
     const [Ans,setAns] = useState({});
     const [Result,setResult] = useState(false);
     const [correct,setcorrect] = useState(0);
     const [incorrect,setincorrect] = useState(0);
     const [Wrongans,setWrongans] = useState([]);
     const correctAnswers = [2,3,4,2,4,3,1,2,4,1];

    const Questions = [
        "What is React primarily used for?",
        "Who developed React?",
        "What is JSX?",
        "What is the correct syntax to create a React component?",
        "What hook is used for state management in functional components?",
        "What is the purpose of useEffect hook?",
        "What is virtual DOM in React?",
        "How do you pass data from parent to child component?",
        "Which method is used to handle side effects in class components?",
        "What is React Fiber?"
    ];

    const options = [
        ["Database management", "Building user interfaces", "Server routing", "Stateful APIs"],
        ["Google", "Microsoft", "Facebook", "Twitter"],
        ["A JSON format", "A CSS framework", "A React hook", "A syntax extension that looks like HTML but works in JavaScript"],
        ["createComponent('MyComp')", "function MyComp() { return <div>Hello</div>; }", "component MyComp()", "renderComponent()"],
        ["useEffect()", "useRef()", "useContext()", "useState()"],
        ["To define components", "To change state directly", "To perform side effects like data fetching or DOM manipulation", "To handle errors"],
        ["A lightweight copy of real DOM that React uses for fast updates", "An HTML element", "A JavaScript object", "A server-side DOM"],
        ["Using state", "Using props", "Using context", "Using return"],
        ["useEffect()", "render()", "constructor()", "componentDidMount()"],
        ["A complete rewrite of React’s core algorithm for better rendering", "A debugging tool", "A React version name", "A data layer"]
    ];

    function handelAns(e){
        setAns(Ans=>({...Ans, [e.target.name] : e.target.value}))
     };

     function handelResults(){
        if(Object.keys(Ans).length === 10){
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

export default Quizreact