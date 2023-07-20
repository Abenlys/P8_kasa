import React, { useState } from "react";
import "./_Description.scss";

export default function Description({ descrip, equip }) {
  // state
  const [descriptionOpened, setDescriptionOpened] = useState(false);
  const [equipmentsOpened, setEquipmentsOpened] = useState(false);

  // comportement
  const toggleDescription = () => {
    setDescriptionOpened(!descriptionOpened);
  };
  const toggleEquipments = () => {
    setEquipmentsOpened(!equipmentsOpened);
  };
  // render
  return (
    <div className="descrip-equip">
      <div className="descrip-equip__both">
        <div className="descrip-equip__both__title" onClick={toggleDescription}>
          <h2>Description</h2>
          <i
            className={`fa-solid fa-chevron-up ${
              descriptionOpened ? "rotate" : ""
            }`}
          ></i>
        </div>
        <div
          className={`contentaccomodation ${
            descriptionOpened ? "showaccomodation" : ""
          }`}
        >
          <p>{descrip}</p>
        </div>
      </div>
      <div className="descrip-equip__both">
        <div className="descrip-equip__both__title" onClick={toggleEquipments}>
          <h2>Equipements</h2>
          <i
            className={`fa-solid fa-chevron-up ${
              equipmentsOpened ? "rotate" : ""
            }`}
          ></i>
        </div>
        <div
          className={`contentaccomodation ${
            equipmentsOpened ? "showaccomodation" : ""
          }`}
        >
          {equip.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
