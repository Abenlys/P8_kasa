import React from "react";
import "./_TitleLocation.scss";

export default function TitleLocation({ title, location }) {
  return (
    <div className="container-titlelocation">
      <h1 className="container-titlelocation__title">{title}</h1>
      <p className="container-titlelocation__location">{location}</p>
    </div>
  );
}
