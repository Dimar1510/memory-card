import { useState } from "react";
import Card from "../Card";
import "../../styles/Game.css";
import Dialog from "../Dialog";
import { IMyCard } from "../../app/types";

interface IScreenProps {
  handleChangeScreen: (screen: string) => void;
  initialCardList?: IMyCard[];
  highScore: number;
  handleSetHighScore: () => void;
}

const Game: React.FC<IScreenProps> = ({
  initialCardList,
  handleChangeScreen,
  highScore,
  handleSetHighScore,
}) => {
  const [cardList, setCardList] = useState(initialCardList);
  const [clickedCards, setClickedCards] = useState<number[]>([]);
  const [status, setStatus] = useState("game");
  const score = clickedCards.length;
  const [className, setClassName] = useState("grid");

  function shuffle(array: IMyCard[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  function handleShuffleList() {
    const newList = cardList && [...shuffle(cardList)];
    setCardList(newList);
  }

  function handleChangeClickedCards(id: number) {
    const newClickedCards = [...clickedCards, id];
    setClickedCards(newClickedCards);
  }

  function handleSetStatus(status: string) {
    setStatus(status);
  }

  async function handleCardClick(card: IMyCard) {
    if (status !== "game") return;
    if (cardList) {
      if (!clickedCards.find((id) => id === card.id)) {
        handleSetClass("grid back");
        await timeOut(800);
        if (score < cardList.length - 1) {
          handleShuffleList();
          handleChangeClickedCards(card.id);
          score >= highScore && handleSetHighScore();
        } else {
          handleChangeClickedCards(card.id);
          score >= highScore && handleSetHighScore();
          handleSetStatus("win");
          const gameOverDialog: HTMLDialogElement | null =
            document.querySelector(".game-over");
          gameOverDialog?.showModal();
          gameOverDialog?.addEventListener("cancel", (event) => {
            event.preventDefault();
          });
        }
        await timeOut(200);
        handleSetClass("grid");
      } else {
        handleSetStatus("lost");
        const gameOverDialog: HTMLDialogElement | null =
          document.querySelector(".game-over");
        gameOverDialog?.showModal();
        gameOverDialog?.addEventListener("cancel", (event) => {
          event.preventDefault();
        });
      }
    }
  }

  function handleSetClass(className: string) {
    setClassName(className);
  }

  function timeOut(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  return (
    <div className="game-screen screen">
      <div className="game-header">
        <button
          className="btn-back"
          onClick={() => handleChangeScreen("start")}
        >
          Back
        </button>
        <div className="score">
          <div>Score: {score}</div>
          <div>High score: {highScore}</div>
        </div>
      </div>
      <div className="div game-field">
        <div className="instructions">Click each card only once!</div>
        <div className={className}>
          {cardList?.map((card) => {
            return (
              <Card
                id={card.id}
                imgURL={card.imgURL}
                name={card.name}
                key={card.id}
                onClick={() => {
                  handleCardClick(card);
                }}
              />
            );
          })}
        </div>
        <p className="count">
          {score}/{cardList?.length}
        </p>
        <Dialog status={status} handleChangeScreen={handleChangeScreen} />
      </div>
    </div>
  );
};

export default Game;
