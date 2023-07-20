import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./_Housing.scss";
import Carroussel from "../../Components/Carroussel/Carroussel";
import TitleLocation from "../../Components/TitleLocation/TitleLocation";
import Host from "../../Components/Host/Host";
import "./_Housing.scss";
import Tags from "../../Components/Tags/Tags";
import Rating from "../../Components/Rating/Rating";
import Description from "../../Components/Description/Description";

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
    console.log(accomodation);
    return (
      <div className="housing">
        <Carroussel
          props={{
            title: accomodation[0].description,
            pics: accomodation[0].pictures,
          }}
        />
        <div className="housing__titlehost">
          <TitleLocation
            title={accomodation[0].title}
            location={accomodation[0].location}
          />
          <Host
            hostname={accomodation[0].host.name}
            hostpicture={accomodation[0].host.picture}
          />
        </div>
        <div className="housing__tagsrating">
          <Tags tags={accomodation[0].tags} />
          <Rating rating={accomodation[0].rating} />
        </div>
        <div className="housing__descripequip">
          <Description
            descrip={accomodation[0].description}
            equip={accomodation[0].equipments}
          />
        </div>
      </div>
    );
  }
}
