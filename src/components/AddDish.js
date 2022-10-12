import React,{useState} from "react"
export default function AddDish({onSubmit}) {
  const [food, setFood] = useState({ name: "", description: "" });  ;
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(food);
    setFood({ name: "", description:""});

};  

  fetch("http://localhost:3000/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  })
    .then((r) => r.json())
    .then((newFood) => onSubmit(newFood));

  function handleChange(event) {
    setFood({
      ...food,
      [event.target.name]: event.target.value
    });
}


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>name</label>
        <input onChange={handleChange} value={food.name} type="text" name="food" />
      </div>
      <div>
        <label>image</label>
        <input onChange={handleChange} type="text" name="image" />
      </div>

      <div>
        <label>description</label>
        <input
          onChange={handleChange}
          value={food.description}
          type="text"
          name="description"
        />
      </div>
      <button type="button" >Add Food</button>
    </form>
  );
}