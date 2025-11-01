import './Counter.css'
import { useState } from 'react';

function Counter(){
    const [counter,setcounter]=useState(0);

    function handleClick(e){
        if(e.target.name==="increment"){
            setcounter(counter+1);
        }
        else{
            setcounter(counter-1);
        }
    }

    return(
        <>
        <div className="header">
           <h2 id="conter_heading">This is a Counter</h2>
        </div>
        <div className="counter_main">
           <div id="conter_display"><p id="count">{counter}</p></div>
           <div className="btnn">
            <div ><button id="btn_decrement" name='decrement' onClick={handleClick}>Decrement</button></div>
            <div ><button id="btn_incerement" name='increment' onClick={handleClick}>Increment</button></div>
           </div>
        </div>
        </>
    )
}

export default Counter