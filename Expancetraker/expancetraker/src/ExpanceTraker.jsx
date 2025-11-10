import './ExpanceTraker.css'
import { useState } from 'react'

function ExpanceTraker(){
    const [NewExpance,setNewExpance]=useState("");
    const [NewExpanceAmount,setNewExpanceAmount]=useState("");
    const [TotalExpance,setTotalExpance]=useState({});
    const [display,setdisplay]=useState(false);
    const [NumberOfExpances,setNumberOfExpances]=useState(false);

    function handeladd(){
        if(NewExpance===""){
            alert("Enter your expance...");
        }
        if(NewExpanceAmount===""||isNaN(NewExpanceAmount)){
            alert("Enter the expance's amount...");
        }
        if(NewExpance!=""&&NewExpanceAmount!=""){
            setTotalExpance({...TotalExpance,[NewExpance]:NewExpanceAmount});
            setdisplay(true);
            setNewExpance("");
            setNewExpanceAmount("");
        }

    }

    function handelDel(k){
        const copy = {...TotalExpance};
        delete copy[k];
        setT_exp(copy);
        if(Object.entries(TotalExpance).length === 1){
            setNumberOfExpances(true);
        }
    }
    
    return(
        <>
        <div className="header">Expanse Traker</div>
        <div className="addbox">
            <div className="add_heading">Enter new expance:</div>
            <div className="add">
                <input type="text" placeholder='Expance ?' id='expance' value={NewExpance} onChange={(e)=>{setNewExpance(e.target.value)}} />
                <input type="Number" placeholder='Amount ?' id='amount' value={NewExpanceAmount} onChange={(e)=>{setNewExpanceAmount(e.target.value)}}/>
                <button id='add_btn'onClick={handeladd}>Add</button>
            </div>
        </div>
            {
                display?
        <div className="display">{
                Object.keys(TotalExpance).map(key=>(
                    <div id='dis_row' key={key}>
                    <div id='exp_box'>
                        {key}
                    </div>
                    <div id='am_box'>
                        {TotalExpance[key]}
                    </div>
                    <button id='del' onClick={()=>handelDel(key)}>Delete</button>
                    </div>
                ))}
                <div className="nothing_to_dis">{NumberOfExpances?<div id='ntd'>There is no expances added by you!</div>:null}</div>
        </div>:null
            }

        </>
    )
}

export default ExpanceTraker