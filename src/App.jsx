import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Van from "./Pages/Vans";
import Layout from "./Component/Layout";
import VansDetail from "./Pages/vansDetail";
import Dashbord from "./Pages/HOST/Dashbord";
import Income from "./Pages/HOST/INCOME.JSX";
import Reviews from "./Pages/HOST/Reviews";
import HostLayout from "./Component/HostLayout";
import HostVan from "./Pages/HOST/HostVan";
import HostVanDetail from "./Pages/HOST/HostVanDetail";
import HostVansDetailsLayout from "./Component/HostVansDetailsLayout";
import Details from "./Pages/HOST/Details";
import Pricing from "./Pages/HOST/Pricing";
import Pohoto from "./Pages/HOST/Photos";
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

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashbord />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="hostVan" element={<HostVan />} />
              <Route path="hostVan/:id" element={<HostVanDetail />}>
                <Route index element={<Details />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="photos" element={<Pohoto />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
