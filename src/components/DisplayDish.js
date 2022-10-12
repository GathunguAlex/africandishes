import React,{useState,useEffect} from 'react'

export default function Display() {
    
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("http://localhost:3000/foods")
          .then((res) => res.json())
          .then((data) => setData(data));
    }, []);
    console.log(data);
return data.map((food) => (
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">food</th>
        <th scope="col">description</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        {/* <th scope="row">1</th> */}
        <td>{food.id}</td>
        <td>{food.name}</td>
        <td>{food.description}</td>
      </tr>
     
    </tbody>
  </table>
));
}
