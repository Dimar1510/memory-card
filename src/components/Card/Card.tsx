import Tilt from "react-parallax-tilt";
import React from "react";
import { IMyCard } from "src/app/types";
import "./Card.scss";

interface IClickCard extends IMyCard {
  onClick: () => void;
}

const Card: React.FC<IClickCard> = ({ name, imgURL, onClick }) => {
  return (
    <Tilt tiltReverse={true} className="tilt" scale={1}>
      <button className="card" onClick={onClick}>
        <div className="face">
          <img src={imgURL} alt={name} className="image" loading="lazy" />
        </div>
        <div className="back"></div>
      </button>
    </Tilt>
  );
};

export default Card;
