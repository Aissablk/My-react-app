import { useState } from 'react';
import { sculptureList } from './Data.js';

export default function Profile(){
    const[prof,setprof] =useState(0)
    function HandlState(){
        setprof(prof+1)

    }
    let sculpture = sculptureList[prof]
 return(
    <div>
        <button onClick={HandlState}/> Click heere to show more 
        <h1>
            {sculpture.name}
        </h1> 
        <i>
            {sculpture.artist}
        </i>
        <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      /> 
    </div>
 )
}