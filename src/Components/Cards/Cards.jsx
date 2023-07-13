import React, { useEffect, useState } from "react";
import "./_Cards.scss";
import { Url } from "../../Pages/Home/Url";
import Card from "./Card/Card";

export default function Cards() {
  // State
  const [error, setError] = useState(false);
  const [locationList, setLocationlist] = useState([]);

  // Comportement
  useEffect(() => {
    async function fetchLogements() {
      try {
        const reponse = await fetch(Url);
        const data = await reponse.json();
        setLocationlist(data);
      } catch (err) {
        console.log("error ", err);
        setError(true);
      }
    }
    fetchLogements();
  }, []);

  if (error) {
    return <span>Oups il y a eu un problème</span>;
  }

  // Render

  return (
    <div className="container-card">
      {locationList.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}
