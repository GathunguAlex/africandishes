import React, { useState } from "react"
import { Link,Routes,Route } from "react-router-dom";



export default function AddDish() {
  const [food, setFood] = useState({ name: "", description: "" });;
  

  function handleSubmit(e) {
    e.preventDefault();
    
    setFood({ name: "", description: "" });

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(food),
    })
      .then((r) => r.json())
      .then((newFood) => console.log(newFood));

  };

  function handleChange(event) {
    setFood({
      ...food,
      [event.target.name]: event.target.value
    });
}


  return (
    <form >
      <div>
        <label>food</label>
        <input onChange={handleChange}type="text" name="name" />
      </div>
      
      <div>
        <label>description</label>
        <input
          onChange={handleChange}
          
          type="text"
          name="description"
        />
      </div>
      <Link to={"./DisplayDish.js"}><button onDoubleClick={() => {
  
      
        <Routes>
          <Route path="./DisplayDish.js" />
        </Routes>
      }}

        onClick={handleSubmit}  type="button" >Add Food</button>
      </Link>
      </form>
  );
}