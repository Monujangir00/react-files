import React, { useState } from "react";


function Counter() {

 
    let [counter, setcounter] = useState(0);

        
    
    return (
        <>
            <button onClick={() => {if(counter<10)setcounter(counter + 1)}}>Increment</button>
            <p>{counter}</p>
            <button onClick={() => {if(counter>0)setcounter(counter - 1)}}>Decrement </button>
        </>
    )
}


export default Counter