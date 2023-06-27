import React from "react";
import { Routes, Route } from "react-router-dom";
import "./_App.scss";
import Home from "../Pages/Home/Home";
import Apropos from "../Pages/Apropos/Apropos";
import Error from "../Pages/Error/Error";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


export default function App() {
  return (
    <div className="container-global">
      <div className="container-header-main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement" element={<logement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
