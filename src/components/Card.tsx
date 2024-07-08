import Tilt from "react-parallax-tilt";
import "../styles/Card.css";
import React from "react";
import { IMyCard } from "../app/types";

interface IClickCard extends IMyCard {
  onClick: () => void;
}

const Card: React.FC<IClickCard> = ({ name, imgURL, onClick }) => {
  return (
    <Tilt tiltReverse={true} className="tilt" scale={1}>
      <button className="card" onClick={onClick}>
        <div className="card-face">
          <img src={imgURL} alt={name} className="card-img" loading="lazy" />
        </div>
        <div className="card-back"></div>
      </button>
    </Tilt>
  );
};

export default Card;
