import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Van from "./Pages/Vans";
import Layout from "./Component/Layout";
import VansDetail from "./Pages/vansDetail";
import "../server";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="van" element={<Van />} />
            <Route path="van/:id" element={<VansDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
