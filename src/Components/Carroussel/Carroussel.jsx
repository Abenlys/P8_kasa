import React, { useState } from "react";
import "./_Carroussel.scss";
import ArrowLeft from "../../Assets/arrow_left.png";
import ArrowRight from "../../Assets/arrow_right.png";

export default function Carroussel({ props }) {
  // State
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide((currentSlide) => (currentSlide + 1) % props.pics.length);
    console.log(props.pics.length);
  }

  function prevSlide() {
    setCurrentSlide(
      (currentSlide) =>
        (currentSlide - 1 + props.pics.length) % props.pics.length
    );
  }

  return (
    <div className="container-carroussel">
      <img
        className="arrow arrow_left"
        src={ArrowLeft}
        alt="arrow_left"
        onClick={prevSlide}
      />
      <img
        className="arrow arrow_right"
        src={ArrowRight}
        alt="arrow_right"
        onClick={nextSlide}
      />
      <img
        className="container-carroussel__img"
        src={props.pics[currentSlide]}
        alt={props.title}
      />
      <p className="container-carroussel__slides-counter">
        {currentSlide + 1}/{props.pics.length}
      </p>
    </div>
  );
}
