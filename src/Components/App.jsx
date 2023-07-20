import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./_App.scss";
import Home from "../Pages/Home/Home";
import Apropos from "../Pages/Apropos/Apropos";
import Error from "../Pages/Error/Error";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Housing from "../Pages/Housing/Housing";
import { Url } from "../Pages/Home/Url";

export default function App() {
  // state
  const [availablesIds, setAvailablesIds] = useState([])
  const location = useLocation()
  // Comportement
  useEffect(() => {
    async function fetchId() {
      try {
        const reponse = await fetch(Url);
        const data = await reponse.json();
        const ids = data.map((item) => item.id)
        setAvailablesIds(ids);
      } catch (err) {
        console.log("error ", err);
        
      }
    }
    fetchId();
  }, []);

  // Vérifier si l'ID dans l'URL fait partie des IDs disponibles
  const isIdValid = availablesIds.includes(location.pathname.split("/").pop());

  return (
    <div className="container-global">
      <div className="container-header-main">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={isIdValid ? <Housing /> : <Navigate to="/Error " />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
