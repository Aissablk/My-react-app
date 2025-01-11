import { useState } from "react";

export default function Button(){
    const [count,setcount]=useState(0)

    function HandlState(){
        setcount(count+1) 
    }
    return(
        <div>
            <button onClick={HandlState}>
                this is {count} counter 

            </button>
        </div>
    )
}