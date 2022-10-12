import React,{useState,useEffect} from 'react'

export default function Display() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("http://localhost:3000/food")
          .then((res) => res.json())
          .then(setData);
    }, []);
    console.log(data);
}
  
{
    foods.map(food =>
        <tr key={food.id}>
            <td>{food.food}</td>
            <td>{food.image}</td>
            <td> {food.description}</td>
        </tr>
    )
}