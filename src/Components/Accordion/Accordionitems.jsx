import React from "react";
import { useState } from "react";
import "./_Accordionitems.scss";

export default function AccordionItems({ title, description }) {
  const [isOpen, setIsOpen] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const content =
    Array.isArray(description) === true ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      description
    );


  return (
    <div className="items">
      <div className="title" onClick={toggle}>
        <h2>{title}</h2>
        <i className={`fa-solid fa-chevron-up ${isOpen ? "rotate" : ""}`}></i>
      </div>
      <div className={`content ${isOpen ? "show" : ""}`}>{content}</div>
    </div>
  );
}

