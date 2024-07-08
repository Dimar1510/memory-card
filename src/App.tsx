import { useState } from "react";
import video from "./assets/video/loop.mp4";
import loading from "./assets/video/loading.mp4";
import { IMyCard } from "./app/types";
import "./App.scss";
import Game from "./components/screens/Game/Game";
import Start from "./components/screens/Start/Start";
import Loading from "./components/screens/Loading/Loading";
import React from "react";

function App() {
  const [screen, setScreen] = useState("start");
  const [cardList, setCardList] = useState<IMyCard[]>();
  const [size, setSize] = useState<number>(5);
  const [highScore, setHighScore] = useState(0);

  function handleChangeScreen(screen: string) {
    setScreen(screen);
  }

  function handleChangeCardList(list: Set<IMyCard>) {
    const newList = [...list];
    setCardList(newList);
  }

  function handleSetSize(size: number) {
    setSize(size);
  }

  function handleSetHighScore() {
    setHighScore((highScore) => highScore + 1);
  }

  return (
    <>
      {screen === "start" && (
        <>
          <video autoPlay muted loop id="myVideo" playsInline>
            <source src={video} type="video/mp4" />
          </video>
          <Start
            handleChangeScreen={handleChangeScreen}
            handleSetSize={handleSetSize}
          />
        </>
      )}
      {screen === "game" && (
        <Game
          handleChangeScreen={handleChangeScreen}
          initialCardList={cardList}
          highScore={highScore}
          handleSetHighScore={handleSetHighScore}
        />
      )}
      {screen === "loading" && (
        <>
          <video autoPlay muted loop id="myVideo" playsInline>
            <source src={loading} type="video/mp4" />
          </video>
          <Loading
            handleChangeScreen={handleChangeScreen}
            handleChangeCardList={handleChangeCardList}
            size={size}
          />
        </>
      )}
    </>
  );
}

export default App;
