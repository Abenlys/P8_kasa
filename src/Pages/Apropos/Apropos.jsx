import React from "react";
import LacMontagne from "../../Assets/lac_montagne.svg";
import "./_Apropos.scss";
import { AccordionData } from "../../Components/Accordion/Accordiondata.js";
import AccordionItems from "../../Components/Accordion/Accordion.jsx";

export default function Apropos() {
  return (
    <div>
      <img className="LacMontagne" src={LacMontagne} alt="LacMontagne" />
      <div className="accordion">
        {AccordionData.map((item) => (
          <AccordionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
