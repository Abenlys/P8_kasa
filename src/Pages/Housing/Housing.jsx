import React from "react";
import { useParams } from "react-router";
import "./_Housing.scss";

export default function Housing() {
  // fonction react-router-dom
  const { id } = useParams();
  // state

  // comportement

  //render

  return (
    <div>
      <p>Housing - ID: {id}</p>
      
    </div>
  );
}
