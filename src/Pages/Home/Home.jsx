import React from "react";
import Banner from "../../Components/Banner/Banner";
import CoteRocheuse from "../../Assets/cote_rocheuse.svg";
import Cards from "../../Components/Cards/Cards";

export default function Home() {
  return (
    <div>
      <Banner>
        <img
          className="banner-picture"
          src={CoteRocheuse}
          alt="Cote rocheuse"
        />
        <p className="banner-text">Chez vous, partout et ailleurs</p>
      </Banner>
      <Cards />
    </div>
  );
}
