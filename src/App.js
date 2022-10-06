import React from "react";
import "./App.css";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/Login/login";
import Subscribe from "./components/Pages/test/Test";

import Privacy from "./components/Pages/Privacy/Privacy";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="/PrivacyPolicy" element={<Privacy />} />
      </Routes>
    </div>
  );
}

export default App;
