import React from "react";
import { useState } from "react";
import "./_Accordion.scss";

export default function AccordionItems({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="items">
      <div className="title" onClick={toggle}>
        <h2>{item.question}</h2>
        <i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
      </div>
      <div className={`content ${isOpen ? "show" : ""}`}>
      <div className={`textcontent ${isOpen ? "showtext" : ""}`}>{item.answer}</div>
      </div>
    </div>
  );
}

