import logo from "src/assets/images/logo.png";
import "./Start.scss";
import React from "react";
import { IScreenProps } from "src/app/types";
import MenuButton from "src/components/ui/Buttons/MenuButton";
import { Footer } from "src/components/Footer/Footer";

const Start: React.FC<IScreenProps> = ({
  handleChangeScreen,
  handleSetSize,
}) => {
  return (
    <>
      <div className="start screen">
        <img className="logo" src={logo} alt="HS logo" />
        <h1>Memory game</h1>
        <div className="buttons">
          <MenuButton
            handleSetSize={handleSetSize}
            handleChangeScreen={handleChangeScreen}
            level="Easy"
            size={5}
          />
          <MenuButton
            handleSetSize={handleSetSize}
            handleChangeScreen={handleChangeScreen}
            level="Medium"
            size={8}
          />
          <MenuButton
            handleSetSize={handleSetSize}
            handleChangeScreen={handleChangeScreen}
            level="Hard"
            size={12}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Start;
