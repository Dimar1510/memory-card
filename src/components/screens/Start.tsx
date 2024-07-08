import logo from "../../assets/images/logo.png";
import "../../styles/Start.css";
import React from "react";

interface IScreenProps {
  handleChangeScreen: (screen: string) => void;
  handleSetSize: (size: number) => void;
}

const Start: React.FC<IScreenProps> = ({
  handleChangeScreen,
  handleSetSize,
}) => {
  return (
    <div className="start-screen screen">
      <img className="logo" src={logo} alt="HS logo" />
      <h1>Memory game</h1>
      <div className="buttons">
        <button
          className="btn-menu"
          onClick={async () => {
            handleSetSize(5);
            handleChangeScreen("loading");
          }}
        >
          Easy
        </button>

        <button
          className="btn-menu"
          onClick={async () => {
            handleSetSize(8);
            handleChangeScreen("loading");
          }}
        >
          Medium
        </button>
        <button
          className="btn-menu"
          onClick={async () => {
            handleSetSize(12);
            handleChangeScreen("loading");
          }}
        >
          Hard
        </button>
      </div>
    </div>
  );
};

export default Start;
