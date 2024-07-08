import lose from "src/assets/images/lose.png";
import win from "src/assets/images/win.png";
import { forwardRef } from "react";
import BackButton from "../ui/Buttons/BackButton";
import RestartButton from "../ui/Buttons/RestartButton";
import React from "react";
import "./Dialog.scss";

interface Props {
  status: string;
  handleChangeScreen: (screen: string) => void;
}

type Ref = HTMLDialogElement;

const Dialog = forwardRef<Ref, Props>(function Dialog(
  { handleChangeScreen, status },
  ref
) {
  return (
    <dialog
      ref={ref}
      className="dialog game-over"
      style={
        status === "win"
          ? { boxShadow: "1px 1px 10px 5px var(--clr-gold)" }
          : { boxShadow: "1px 1px 10px 5px maroon" }
      }
    >
      <div className="wrapper">
        <div className="image">
          <img
            src={status === "win" ? win : lose}
            className="img"
            alt="card"
            loading="lazy"
          />
        </div>
        <div className="content">
          <h2 className="header">
            {status === "win" && "You win!"}
            {status === "lost" && "You lose!"}
          </h2>

          <div className="buttons">
            <RestartButton handleChangeScreen={handleChangeScreen} />
            <BackButton handleChangeScreen={handleChangeScreen} />
          </div>
        </div>
      </div>
    </dialog>
  );
});

export default Dialog;
