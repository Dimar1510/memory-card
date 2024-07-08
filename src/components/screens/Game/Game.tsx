import { useRef, useState } from "react";
import { IMyCard } from "src/app/types";
import Card from "src/components/Card/Card";
import Dialog from "src/components/Dialog/Dialog";
import "./Game.scss";
import BackButton from "src/components/ui/Buttons/BackButton";
import React from "react";

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
  const ref = useRef<HTMLDialogElement>(null);

  function shuffle(array: IMyCard[]) {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
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
          const gameOverDialog = ref.current;
          gameOverDialog?.showModal();
          gameOverDialog?.addEventListener("cancel", (event) => {
            event.preventDefault();
          });
        }
        await timeOut(200);
        handleSetClass("grid");
      } else {
        handleSetStatus("lost");
        const gameOverDialog = ref.current;
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
    <div className="game screen">
      <div className="header">
        <BackButton handleChangeScreen={handleChangeScreen} />
        <div className="score">
          <div>Score: {score}</div>
          <div>High score: {highScore}</div>
        </div>
      </div>
      <div className="field">
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
        <Dialog
          status={status}
          ref={ref}
          handleChangeScreen={handleChangeScreen}
        />
      </div>
    </div>
  );
};

export default Game;
