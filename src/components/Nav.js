import React from 'react';
import { NavLink } from "react-router-dom";
import "../index.css"

export default function Nav() {
    
    return (
      <nav id="nav">
        <h3> Welcome to African Dishes</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/DisplayDish">Display</NavLink>
        <NavLink to="/AddDish">Add</NavLink>
      </nav>
    );

}