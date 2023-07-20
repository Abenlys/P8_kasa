import React from "react";
import "./_Rating.scss";

export default function Rating({ rating }) {
  const totalStars = 5;
  const stars = [];
  for (let i = 0; i < totalStars; i++) {
    const starClass = i < rating ? "fa-solid fa-star red" : "fa-solid fa-star";
    stars.push(<i key={i} className={starClass} />);
  }

  return <div className="rating">{stars}</div>;
}
