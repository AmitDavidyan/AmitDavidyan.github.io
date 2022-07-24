import "./App.css";
import React, { useState, useEffect } from "react";
import Main from "./components/main/Main";
import Welcome from "./components/homeP/Welcome";
import { Route, Routes, Link, Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Welcome />
      <Main />
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
