import React from "react";
import Banner from "../../Components/Banner/Banner";
import CoteRocheuse from "../../Assets/cote_rocheuse.svg";
import Cards from "../../Components/Cards/Cards";
import "./_Home.scss";

export default function Home() {
  return (
    <div className="home">
      <Banner>
        <img
          className="banner-picture"
          src={CoteRocheuse}
          alt="Cote rocheuse"
        />
        <p className="banner-text">Chez vous, <span>partout et ailleurs</span></p>
      </Banner>
      <Cards />
    </div>
  );
}
