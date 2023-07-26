import React from "react";
import LacMontagne from "../../Assets/lac_montagne.svg";
import "./_Apropos.scss";
import { AccordionData } from "../../Components/Accordion/Accordiondata.js";
import AccordionItems from "../../Components/Accordion/Accordionitems.jsx";
import Banner from "../../Components/Banner/Banner";

export default function Apropos() {
  return (
    <div>
      <Banner>
        <img className="banner-picture" src={LacMontagne} alt="LacMontagne" />
      </Banner>
      <div className="accordion">
        {AccordionData.map((item) => (
          <AccordionItems
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
