import React from "react";
import { IScreenProps } from "../../../app/types";
import "./Buttons.scss";

interface IMenuButton extends IScreenProps {
  size: number;
  level: "Easy" | "Medium" | "Hard";
}

const MenuButton: React.FC<IMenuButton> = ({
  handleChangeScreen,
  handleSetSize,
  level,
  size,
}) => {
  return (
    <button
      className="button menu__button"
      onClick={async () => {
        handleSetSize(size);
        handleChangeScreen("loading");
      }}
    >
      {level}
    </button>
  );
};

export default MenuButton;
