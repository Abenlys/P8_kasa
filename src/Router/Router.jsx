import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Apropos from "../Pages/Apropos/Apropos";
import Error from "../Pages/Error/Error";
import Housing from "../Pages/Housing/Housing";

export default function Router() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Housing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    
  );
}
