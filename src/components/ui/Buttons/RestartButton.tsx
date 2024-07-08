import React from "react";

const RestartButton = ({
  handleChangeScreen,
}: {
  handleChangeScreen: (screen: string) => void;
}) => {
  return (
    <button
      className="button menu__button"
      onClick={async () => {
        handleChangeScreen("loading");
      }}
    >
      Restart
    </button>
  );
};

export default RestartButton;
