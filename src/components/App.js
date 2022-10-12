import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Display from "./DisplayDish";
import AddDish from "./AddDish";
import RemoveDish from "./RemoveDish";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/DisplayDish" element={<Display />} />
        <Route path="/AddDish" element={<AddDish />} />
        <Route path="/RemoveDish" element={<RemoveDish />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </div>
  );
}

export default App;