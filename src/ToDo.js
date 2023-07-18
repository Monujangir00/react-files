import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

function ToDo() {
  let [Inputvalue, setInputvalue] = useState("");
  let [data, setdata] = useState([]);

  function print(e) {
    e.preventDefault()
    setdata([...data, Inputvalue])
  }

  function deletes (e, idToDelete){
    
    e.preventDefault()
    setdata(data.filter((data, index) => { return index !== idToDelete }))
    
  }
    
  return (

    <>
      
      <form onSubmit={print}>
        <input type="text" placeholder='Enter Your Tasks' value={Inputvalue} onChange={(e) => setInputvalue(e.target.value)} />
        
        <button>Submit Tasks</button>
      </form>
      <ul>
       { data.map((data, index) => {
        
         return (<li key={index}>{data}
           <a href='/' onClick={(e)=> deletes(e, index)}><DeleteIcon /></a>
         </li>)
        })}
      </ul>
    </>
        
   
      )
}

export default ToDo




