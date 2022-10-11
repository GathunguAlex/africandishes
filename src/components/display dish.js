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
  
console.log(data);
