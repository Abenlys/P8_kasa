import React from "react";
import "./_Carroussel.scss";
import ArrowLeft from "../../Assets/arrow_left.png";
import ArrowRight from "../../Assets/arrow_right.png";

export default function Carroussel({ props }) {
    console.log(props)
  return (
    <div className="container-carroussel">
      <img className="arrow arrow_left" src={ArrowLeft} alt="arrow_left" />
      <img className="arrow arrow_right" src={ArrowRight} alt="arrow_right" />
      <img className="container-carroussel__img" src={props.pics[0]} alt={props.title} />
      <p className="container-carroussel__slides-counter"></p>


    </div>
  );
}
