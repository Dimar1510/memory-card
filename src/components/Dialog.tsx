import "../styles/Dialog.css";
import lose from "../assets/images/lose.png";
import win from "../assets/images/win.png";
import React from "react";

interface Props {
  status: string;
  handleChangeScreen: (screen: string) => void;
}

const Dialog: React.FC<Props> = ({ status, handleChangeScreen }) => {
  return (
    <dialog
      className="game-over"
      style={
        status === "win"
          ? { boxShadow: "1px 1px 10px 5px var(--clr-gold)" }
          : { boxShadow: "1px 1px 10px 5px maroon" }
      }
    >
      <div className="dialog-wrapper">
        <div className="dialog-image">
          <img src={status === "win" ? win : lose} alt="card" />
        </div>
        <div className="dialog-content">
          <h2 className="dialog-header">
            {status === "win" && "You win!"}
            {status === "lost" && "You lose!"}
          </h2>

          <div className="buttons">
            <button
              className="btn-restart"
              onClick={async () => {
                handleChangeScreen("loading");
              }}
            >
              Restart
            </button>
            <button
              className="btn-back"
              onClick={() => handleChangeScreen("start")}
            >
              Main menu
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
