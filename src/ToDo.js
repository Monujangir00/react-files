import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
// import { render } from 'react-dom';

function ToDo() {
  let [Inputvalue, setInputvalue] = useState("");
  let [data, setdata] = useState([]);
  let [isediting, setisediting] = useState(false);
  
  

  function print(e) {
    e.preventDefault()
    if (isediting === false) {
      setdata([...data, Inputvalue])
    }
    else {
      data[isediting] = Inputvalue;
      setdata(data)
      setisediting(false)
    }
  }

  function deletes (e, idToDelete){
    
    e.preventDefault()
    setdata(data.filter((data, index) => { return index !== idToDelete }))
    
  }
  function edits(e, idToEdit) {
    e.preventDefault()
    setInputvalue(data[idToEdit])
    setisediting(idToEdit)
  }
  function checked(e, idToChecked) {
    e.preventDefault();
    
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
           <a href='/' onClick={(e)=> edits(e, index)}><EditIcon /></a>
           <a href='/' onClick={(e)=> checked(e, index)}><CheckIcon /></a>
         </li>)
        })}
      </ul>
    </>
        
   
      )
}

export default ToDo




