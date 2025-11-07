import './ExpanceTraker.css'
import { useState } from 'react'

function ExpanceTraker(){
    const [Newexp,setNewExp]=useState("");
    const [Newexpam,setNewexpam]=useState("");
    const [T_exp,setT_exp]=useState({});
    const [display,setdisplay]=useState(false);
    const [exp_no,setexp_no]=useState(false);

    function handeladd(){
        if(Newexp===""){
            alert("Enter your expance...");
        }
        if(Newexpam===""||isNaN(Newexpam)){
            alert("Enter the expance's amount...");
        }
        if(Newexp!=""&&Newexpam!=""){
            setT_exp({...T_exp,[Newexp]:Newexpam});
            setdisplay(true);
            setNewExp("");
            setNewexpam("");
        }

    }

    function handelDel(k){
        const copy = {...T_exp};
        delete copy[k];
        setT_exp(copy);
        if(Object.entries(T_exp).length === 1){
            setexp_no(true);
        }
    }
    
    return(
        <>
        <div className="header">Expanse Traker</div>
        <div className="addbox">
            <div className="add_heading">Enter new expance:</div>
            <div className="add">
                <input type="text" placeholder='Expance ?' id='expance' value={Newexp} onChange={(e)=>{setNewExp(e.target.value)}} />
                <input type="Number" placeholder='Amount ?' id='amount' value={Newexpam} onChange={(e)=>{setNewexpam(e.target.value)}}/>
                <button id='add_btn'onClick={handeladd}>Add</button>
            </div>
        </div>
            {
                display?
        <div className="display">{
                Object.keys(T_exp).map(key=>(
                    <div id='dis_row' key={key}>
                    <div id='exp_box'>
                        {key}
                    </div>
                    <div id='am_box'>
                        {T_exp[key]}
                    </div>
                    <button id='del' onClick={()=>handelDel(key)}>Delete</button>
                    </div>
                ))}
                <div className="nothing_to_dis">{exp_no?<div id='ntd'>There is no expances added by you!</div>:null}</div>
        </div>:null
            }

        </>
    )
}

export default ExpanceTraker