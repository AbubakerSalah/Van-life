import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Van from "./Pages/Van";
import Layout from "./Component/Layout";

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="van" element={<Van />} />
          </Route>
        </Routes>
          
      </BrowserRouter>
    </>
  );
}

export default App;
