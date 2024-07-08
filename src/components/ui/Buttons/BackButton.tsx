import React from "react";

const BackButton = ({
  handleChangeScreen,
}: {
  handleChangeScreen: (screen: string) => void;
}) => {
  return (
    <button
      className="button button_back"
      onClick={() => handleChangeScreen("start")}
    >
      Back
    </button>
  );
};

export default BackButton;
