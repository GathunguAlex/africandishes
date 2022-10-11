import React,{useState,useEffect} from 'react'

const [data,setData]=useState([])

function display() {
    return fetch("http://localhost:3000/food")
        .then(respond => respond.json())
    .then(data=>setData(data))

}
useEffect(display, [])
  
console.log(data);