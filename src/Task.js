import { useState } from "react";


function Task() {
    let Countries =[
        {
            Country : "India",
            code : "id",
            State : ["Delhi", "Mumbai" , "Rajasthan"]
        },
        {
            Country : "USA",
            code : "us",
            State : ["California", "Texas" , "Florida"]
        },
        {
            Country : "Sri Lanka",
            code : "sl",
            State : ["Jaffna", "Kilinochchi" , "Mannar"]
        },
        {
            Country : "England",
            code : "El",
            State : ["London", "Manchester" , "birmingham"]
        }
    ]

    let [Country, setCountry] = useState([Countries[0].value])
    let selectedid = 0;

    function State(){
        const countryCode= document.getElementById("country").value;
        let NewCode = (Countries.filter((desh) => { return desh.Country === countryCode }))
        setCountry(NewCode[0].State)
        
    }
  return (
 <>
    <select id="country" onChange={State} >
        <option value="Select Counrty" selected disabled>Select Counrty</option>
        {Countries.map(states => <option key={states.code}>{states.Country}</option>)}
    </select>
    <select defaultValue={selectedid}>
    {Country.map((desh, index)  => {return <option key={index}>{desh}</option>})}
    </select>
    
 </>
  )
}


export default Task