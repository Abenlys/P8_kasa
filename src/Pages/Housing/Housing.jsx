import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./_Housing.scss";
import Carroussel from "../../Components/Carroussel/Carroussel";

export default function Housing() {
  // fonction react-router-dom
  const { id } = useParams();
  // state
  const [accomodation, setAccomodation] = useState(null);
  const [error, setError] = useState(false);
  // comportement
  useEffect(() => {
    async function fetchAccomodation() {
      try {
        const reponse = await fetch("../Datas/Data.json");
        const data = await reponse.json();
        const dataselected = data.filter((location) => location.id === id);
        setAccomodation(dataselected);
      } catch (err) {
        console.log("error", err);
        setError(true);
      }
    }
    fetchAccomodation();
  }, [id]);
  if (error) {
    return <span>Oups il y a eu un problème</span>;
  } 
  //render

  if (accomodation !== null) {
    console.log(accomodation)
    return (
    
        <div className="container-housing">
          <Carroussel  props={{title: accomodation[0].description, pics: accomodation[0].pictures}}/>
        </div>
      );
  }

}
