import React from "react";
import "./_Card.scss";
import { Link } from "react-router-dom";

export default function Card({ logement }) {
  // state

  // Comportement

  // Render
  return (
    <Link to={`/logement/${logement.id} `} >
    <div className="card-organisation">
      <img
        className="card-organisation__image"
        src={logement.cover}
        alt={logement.cover}
      />
      <h2 className="card-organisation__title">{logement.title}</h2>
    </div>
    </Link>
  );
}
