import React from 'react'




function Pizzadata() {

    const data = [
        {
          name: "Focaccia",
          ingredients: "Bread with italian olive oil and rosemary",
          price: 6,
          photoName: "focaccia.jpg",
          soldOut: false
        },
        {
          name: "Pizza Margherita",
          ingredients: "Tomato and mozarella",
          price: 10,
          photoName: "margherita.jpg",
          soldOut: false
        },
        {
          name: "Pizza Spinaci",
          ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
          price: 12,
          photoName: "spinaci.jpg",
          soldOut: false
        },
        {
          name: "Pizza Funghi",
          ingredients: "Tomato, mozarella, mushrooms, and onion",
          price: 12,
          photoName: "funghi.jpg",
          soldOut: false
        },
        {
          name: "Pizza Salamino",
          ingredients: "Tomato, mozarella, and pepperoni",
          price: 15,
          photoName: "salamino.jpg",
          soldOut: true
        },
        {
          name: "Pizza Prosciutto",
          ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
          price: 18,
          photoName: "prosciutto.jpg",
          soldOut: false
        }
    ];
    
    

   
      
    
      
  return (
      <>
          <div>
              <h3 style={{ textAlign: 'center' }} >Our Menu</h3><br />
              {data.map((e) => {
                  return <>
                  <div    style={{display: "flex"}}>
                          <img style={{height: "150px"}} src={e.photoName} alt="" />
                          <div style={{padding: "20px"}}>
                      <h1>{e.name}</h1>
                      <p>{e.ingredients}</p>
                      <p> {(e.soldOut === false)?("$"+e.price):"Soldout"}</p>
                        </div>
                      
                      
                  </div></>
              }
                )}
          </div>
      </>
  )
}

export default Pizzadata
