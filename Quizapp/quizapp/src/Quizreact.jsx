import './Quiz.css'

function Quizreact(){
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
        ["Building user interfaces", "Database management", "Server routing", "Stateful APIs"],
        ["Facebook", "Google", "Microsoft", "Twitter"],
        ["A syntax extension that looks like HTML but works in JavaScript", "A JSON format", "A CSS framework", "A React hook"],
        ["function MyComp() { return <div>Hello</div>; }", "createComponent('MyComp')", "component MyComp()", "renderComponent()"],
        ["useState()", "useEffect()", "useRef()", "useContext()"],
        ["To perform side effects like data fetching or DOM manipulation", "To define components", "To change state directly", "To handle errors"],
        ["A lightweight copy of real DOM that React uses for fast updates", "An HTML element", "A JavaScript object", "A server-side DOM"],
        ["Using props", "Using state", "Using context", "Using return"],
        ["componentDidMount()", "useEffect()", "render()", "constructor()"],
        ["A complete rewrite of React’s core algorithm for better rendering", "A debugging tool", "A React version name", "A data layer"]
    ];

    return(
        <>
        <div id="question">
            {Questions.map((q,i) => (
                <>
                    <div key={i} id="ques"><p id="q">Q{i}.</p>{q}</div>
                    <ul className="option_list">
                        {options[i].map((opt)=>(
                        <li id="option"><input type="radio" className="ans_selected" name={i} value={opt}/>
                            <p id="op">{opt}</p></li>
                    ))}
                    </ul>
                </>
            ))
            }
            </div>
        </>
    )
}

export default Quizreact