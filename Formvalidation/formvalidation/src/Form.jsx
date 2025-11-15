import { useState } from "react";
import './Form.css'
import { useReducer } from "react";

function Form(){
    const initialState ={
        name : "",
        rolno : "",
        email : "",
        dob : "",
        password : ""
    }

    function reducer(state,action){
        return{
            ...state,
            [action.field] : action.value
        }        
    }
    const [state,dispatch]=useReducer(reducer,initialState);


    const [nameValid,setNameValid]=useState(false);
    const [rollnoValid,setRollnoValid]=useState(false);
    const [emailValid,setEmailValid]=useState(false);
    const [dobValid,setDOBValid]=useState(false);
    const [passwordValid,setPasswordValid]=useState(false);
    const [display,setDisplay]=useState(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z\s]{2,40}$/;
    const rollnoRegex = /^\d{14}$/;
    const dobRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
    const passwordRegex = /^\d{6}$/; 
    
    function handelChange(e){

        dispatch({
            field : e.target.name,
            value : e.target.value
        });

        if(e.target.name==="name"){
            let value = e.target.value;
            let valid = nameRegex.test(value);
            setNameValid(valid);
        }
        if(e.target.name==="email"){
            let value = e.target.value;
            let valid = emailRegex.test(value);
            setEmailValid(valid);
        }
        if(e.target.name==="dob"){
            let value = e.target.value;
            let valid = dobRegex.test(value);
            setDOBValid(valid);
        }
        if(e.target.name==="rollno"){
            let value = e.target.value;
            let valid = rollnoRegex.test(value);
            setRollnoValid(valid);
        }
        if(e.target.name==="password"){
            let value = e.target.value;
            let valid = passwordRegex.test(value);
            setPasswordValid(valid);
        }
    }

    function handelSubmit(e){
        e.preventDefault();
        if(!nameValid){
            alert("Enter the minimum 2 charaters in name!");}
        if(!rollnoValid){
            alert("Enter valid rollno of 14 digits!");}
        if(!emailValid){
            alert("Enter valid email!");}
        if(!dobValid){
            alert("Enter valid DOB!");}
        if(!passwordValid){
            alert("Enter 6 digit valid password!")}

        if(nameValid&&rollnoValid&&emailValid&&dobValid&&passwordValid){
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
                    <input type="text" name="name" id="name" placeholder="Enter Your Name.." value={state.name} onChange={handelChange} required/>
                    <label id="rollno">Roll No.:</label>
                    <input type="number" name="rollno" id="rollno" placeholder="Enter Your 14 digit rollno.." value={state.rollno} onChange={handelChange}/>
                    <label id="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter Your Email.." value={state.email} onChange={handelChange}/>
                    <label id="dob">Date Of Birth:</label>
                    <input type="date" name="dob" id="dob" placeholder="Enter Your DOB.." value={state.dob} onChange={handelChange}/>
                    <label id="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter Your 6 digit Password.." value={state.password} onChange={handelChange}/>
                    <div className="btn"><button type="submit" onClick={handelSubmit}>Submit</button></div>
                </form>
            </div>
        </div>
        {display?
        <div className="display">
            <h4>Your Details:</h4>
            <div id="display_box">
                <div><span>Name: </span>{state.name}</div>
                <div><span>Rollno.: </span>{state.rollno}</div>
                <div><span>Email: </span>{state.email}</div>
                <div><span>Date Of Birth: </span>{state.dob}</div>
                <div><span>Password: </span>{state.password}</div>
            </div>
        </div>
        :null}
        </>
    )
}

export default Form;