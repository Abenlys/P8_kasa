import ErrorIllustration from "../../Assets/404.svg";
import React from "react";
import "./_Error.scss";
import { Link } from "react-router-dom";

export default function Error() {
// Problème scroll vertical page erreur
  return (
    <div>
      <div className="ErrorWrapper">
        <img className="Illustration" src={ErrorIllustration} alt="404" />
        <h1 className="ErrorTitle">
          Oups! La page que vous demandez n'existe pas.
        </h1>
        <Link className="ErrorSubTitle" to="/">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </div>
  );
}
