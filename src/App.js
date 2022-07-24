import "./App.css";
import React, { useState, useEffect } from "react";
// import Main from "./components/main/Main";
// import Welcome from "./components/homeP/Welcome";
import { Route, Routes, Link, Router } from "react-router-dom";
// import Products from "./components/products";
import Header from "./components/Header/header";
import Products from "./components/products/products";
import Button from "./components/products/Button";
import items from "./components/products/data2.json";

const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons, setButtons] = useState(allCategories);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(items);
      return;
    }

    const filteredData = items.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <div>
      <Header />
      <Button button={buttons} filter={filter} />
      <Products menuItem={menuItem} />
    </div>
  );
}

export default App;

// <Router>
//         <Routes>
//           <Route path="" element={<Welcome />} />
//           <Route path="/Categories" element={<Main />} />
//         </Routes>
//       </Router>
