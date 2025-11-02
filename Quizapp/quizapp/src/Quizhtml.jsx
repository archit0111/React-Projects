import './Quiz.css'

function Quizhtml(){
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
          ["Hyper Text Markup Language", "High Text Making Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], // Q1
          ["<a>", "<link>", "<href>", "<url>"], // Q2
          ["<img src='image.jpg'>", "<image>image.jpg</image>", "<pic>image.jpg</pic>", "<img>image.jpg</img>"], // Q3
          ["target", "link", "href", "ref"], // Q4
          ["<style>", "<css>", "<script>", "<design>"], // Q5
          ["<article>", "<section>", "<div>", "<header>"], // Q6
          ["To define metadata about the HTML document", "To create links", "To include CSS files", "To display an image"], // Q7
          ["<ol>", "<ul>", "<dl>", "<li>"], // Q8
          ["Give them the same name attribute", "Give them different IDs", "Wrap them in a <fieldset>", "Use <input type='group'>"], // Q9
          ["localStorage", "sessionStorage", "cookieStorage", "webStorage"]
     ]


    return(
        <>
        <div id="question">
            {Questions.map((q,i) => (
                <>
                    <div key={i} id="ques">{q}</div>
                    {options[i].map((opt,i)=>(
                        <div id="option">{opt}</div>
                    ))}
                </>
            ))
            }
            </div>
        </>
    )
}

export default Quizhtml