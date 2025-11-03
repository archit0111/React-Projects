import './Quiz.css'

function Quizcss(){
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

export default Quizcss