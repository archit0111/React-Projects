import './Quiz.css'

function Quizjs(){
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

export default Quizjs