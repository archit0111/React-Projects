import './Quiz.css'
import { useState } from 'react';

function Quizhtml(){
    const [Ans,setAns] = useState({});
    const [Result,setResult] = useState(false);
    const [correct,setcorrect] = useState(0);
    const [incorrect,setincorrect] = useState(0);
    const [Wrongans,setWrongans] = useState([]);
    const correctAnswers = [4, 4, 2, 1, 1, 2, 4, 3, 2, 1];

    const Questions = [
          "What does HTML stand for?",
          "Which HTML tag is used to create a hyperlink?",
          "What is the correct way to include an image in HTML?",
          "Which attribute specifies where to open the linked document in <a> tag?",
          "Which HTML tag is used to define inline styles?",
          "Which of the following is NOT a semantic HTML element?",
          "What is the purpose of the <meta> tag in HTML?",
          "How can you make a numbered list in HTML?",
          "What is the correct way to group a set of radio buttons in a form?",
          "Which HTML API is used for storing data locally in the browser?"
    ];
    const options =[
          ["High Text Making Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language", "Hyper Text Markup Language",], // Q1
          ["<url>", "<link>", "<href>","<a>"], // Q2
          ["<image>image.jpg</image>", "<img src='image.jpg'>", "<pic>image.jpg</pic>", "<img>image.jpg</img>"], // Q3
          ["target", "link", "href", "ref"], // Q4
          ["<style>", "<css>", "<script>", "<design>"], // Q5
          ["<article>", "<section>", "<div>", "<header>"], // Q6
          ["To create links", "To include CSS files", "To display an image", "To define metadata about the HTML document"], // Q7
          ["<ul>", "<dl>", "<ol>", "<li>"], // Q8
          ["Give them different IDs", "Give them the same name attribute", "Wrap them in a <fieldset>", "Use <input type='group'>"], // Q9
          ["localStorage", "sessionStorage", "cookieStorage", "webStorage"]
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

export default Quizhtml