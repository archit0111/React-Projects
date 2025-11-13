import { useState } from "react";
import './Form.css'

function Form(){
    const [NameValid,setNameValid]=useState(false);
    const [RollnoValid,setRollnoValid]=useState(false);
    const [EmailValid,setEmailValid]=useState(false);
    const [DOBValid,setDOBValid]=useState(false);
    const [PasswordValid,setPasswordValid]=useState(false);

    const[Name,setName]=useState("");
    const[Rollno,setRollno]=useState();
    const[Email,setEmail]=useState("");
    const[DOB,setDOB]=useState();
    const[Password,setPassword]=useState();
    const[Display,setDisplay]=useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]{2,40}$/;
    const rollnoRegex = /^\d{14}$/;
    const dobRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    const passwordRegex = /^\d{6}$/; 
    
    function handelChange(e){
        if(e.target.name==="name"){
            let value = e.target.value;
            setName(value);
            let valid = nameRegex.test(value);
            setNameValid(valid);
        }
        if(e.target.name==="email"){
            let value = e.target.value;
            setEmail(value);
            let valid = emailRegex.test(value);
            setEmailValid(valid);
        }
        if(e.target.name==="dob"){
            let value = e.target.value;
            setDOB(e.target.value);
            let valid = dobRegex.test(value);
            setDOBValid(valid);
        }
        if(e.target.name==="rollno"){
            let value = e.target.value;
            setRollno(e.target.value);
            let valid = rollnoRegex.test(value);
            setRollnoValid(valid);
        }
        if(e.target.name==="password"){
            let value = e.target.value;
            setPassword(e.target.value);
            let valid = passwordRegex.test(value);
            setPasswordValid(valid);
        }
    }

    function handelSubmit(e){
        e.preventDefault();
        if(!NameValid){
            alert("Enter the minimum 2 charaters in name!");}
        if(!RollnoValid){
            alert("Enter valid rollno of 14 digits!");}
        if(!EmailValid){
            alert("Enter valid email!");}
        if(!DOBValid){
            alert("Enter valid DOB!");}
        if(!PasswordValid){
            alert("Enter 6 digit valid password!")}

        if(NameValid&&RollnoValid&&EmailValid&&DOBValid&&PasswordValid){
            setDisplay(true);
        }
                        
    }

    return(
        <>
        <h1>Form Verification</h1>
        <div className="main">
            <div className="inputs">
                <form action="get">
                    <label id="name">Name:</label>
                    <input type="text" name="name" id="name" placeholder="Enter Your Name.." value={Name} onChange={handelChange} required/>
                    <label id="rollno">Roll No.:</label>
                    <input type="number" name="rollno" id="rollno" placeholder="Enter Your 14 digit rollno.." value={Rollno} onChange={handelChange}/>
                    <label id="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email.." value={Email} onChange={handelChange}/>
                    <label id="dob">Date Of Birth:</label>
                    <input type="date" name="dob" id="dob" placeholder="Enter Your DOB.." value={DOB} onChange={handelChange}/>
                    <label id="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your 6 digit Password.." value={Password} onChange={handelChange}/>
                    <div className="btn"><button type="submit" onClick={handelSubmit}>Submit</button></div>
                </form>
            </div>
        </div>
        {Display?
        <div className="display">
            <h4>Your Details:</h4>
            <div id="display_box">
                <div><span>Name: </span>{Name}</div>
                <div><span>Rollno.: </span>{Rollno}</div>
                <div><span>Email: </span>{Email}</div>
                <div><span>Date Of Birth: </span>{DOB}</div>
                <div><span>Password: </span>{Password}</div>
            </div>
        </div>
        :null}
        </>
    )
}

export default Form;