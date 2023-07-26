import React from "react";
import "./_App.scss";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Router from "../Router/Router";


export default function App() {


  return (
    <div className="container-global">
      <div className="container-header-main">
        <Navbar />
        <Router />
      </div>
      <Footer />
    </div>
  );
}

