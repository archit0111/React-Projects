import './ExpanceTraker.css'
import { useState } from 'react'

function ExpanceTraker(){
    const [newExpance,setNewExpance]=useState("");
    const [newExpanceAmount,setNewExpanceAmount]=useState("");
    const [totalExpance,setTotalExpance]=useState({});
    const [display,setdisplay]=useState(false);
    const [numberOfExpances,setNumberOfExpances]=useState(false);

    function handeladd(){
        if(newExpance===""){
            alert("Enter your expance...");
        }
        if(newExpanceAmount===""||isNaN(newExpanceAmount)){
            alert("Enter the expance's amount...");
        }
        if(newExpance!=""&&newExpanceAmount!=""){
            setTotalExpance({...totalExpance,[newExpance]:newExpanceAmount});
            setdisplay(true);
            setNewExpance("");
            setNewExpanceAmount("");
        }

    }

    function handelDel(k){
        const copy = {...totalExpance};
        delete copy[k];
        setTotalExpance(copy);
        if(Object.entries(totalExpance).length === 1){
            setNumberOfExpances(true);
        }
    }
    
    return(
        <>
        <div className="header">Expanse Traker</div>
        <div className="addbox">
            <div className="add_heading">Enter new expance:</div>
            <div className="add">
                <input type="text" placeholder='Expance ?' id='expance' value={newExpance} onChange={(e)=>{setNewExpance(e.target.value)}} />
                <input type="Number" placeholder='Amount ?' id='amount' value={newExpanceAmount} onChange={(e)=>{setNewExpanceAmount(e.target.value)}}/>
                <button id='add_btn'onClick={handeladd}>Add</button>
            </div>
        </div>
            {
                display?
        <div className="display">{
                Object.keys(totalExpance).map(key=>(
                    <div id='dis_row' key={key}>
                    <div id='exp_box'>
                        {key}
                    </div>
                    <div id='am_box'>
                        {totalExpance[key]}
                    </div>
                    <button id='del' onClick={()=>handelDel(key)}>Delete</button>
                    </div>
                ))}
                <div className="nothing_to_dis">{numberOfExpances?<div id='ntd'>There is no expances added by you!</div>:null}</div>
        </div>:null
            }

        </>
    )
}

export default ExpanceTraker