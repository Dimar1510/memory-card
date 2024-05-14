import { useState } from "react";
import Card from "./Card";
import '../styles/Game.css'
import Dialog from "./Dialog";

function Game({initialCardList, handleChangeScreen, highScore, handleSetHighScore}) {

    const [cardList, setCardList] = useState(initialCardList)
    const [clickedCards, setClickedCards] = useState([])
    const [status, setStatus] = useState('game')
    const score = clickedCards.length
    const [className, setClassName] = useState('grid')

    function shuffle(array) {
        let currentIndex = array.length;
        while (currentIndex != 0) {
          let randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function handleShuffleList() {
        const newList = [...shuffle(cardList)]
        setCardList(newList)
    }

    function handleChangeClickedCards(id) {
        const newClickedCards = [...clickedCards, id]
        setClickedCards(newClickedCards)
    }

    function handleSetStatus(status) {
        setStatus(status)
    }

    // const updateHighScore = () => {handleSetHighScore}

    function handleCardClick(card) {
        if (status !== 'game') return
        if (!clickedCards.find(id => id === card.id)) {
            if (score < cardList.length - 1) {
                handleShuffleList()
                handleChangeClickedCards(card.id)
                score >= highScore && handleSetHighScore()
            } else {
                handleChangeClickedCards(card.id)
                handleSetStatus('win')
                const gameOverDialog = document.querySelector(".game-over");
                gameOverDialog.showModal();
            }
        } else {
            handleSetStatus('lost')
            const gameOverDialog = document.querySelector(".game-over");
            gameOverDialog.showModal();
        }
    }

    function handleSetClass(className) {
        setClassName(className)
    }

    function timeOut(time) {   
        return new Promise((resolve) => setTimeout(resolve, time))
    }

    return (  
        <div className="game-screen screen">
            <div className="game-header">
                <button className="btn-back" onClick={()=>handleChangeScreen('start')}>Back</button>
                <div className="score">
                    <div>Score: {score}</div>
                    <div>High score: {highScore}</div>
                </div>
            </div>
            <div className="div game-field">
                <div className="instructions">Click each card only once!</div>
                <div className={className}>
                    {cardList.map(card => {
                       
                        return (
                            <Card 
                                imgURL={card.imgURL} 
                                name={card.name} 
                                key={card.id}
                                onClick={async () => {
                                    handleSetClass('grid back')
                                    await timeOut(800)
                                    handleCardClick(card)
                                    await timeOut(200)
                                    handleSetClass('grid')
                                }}
                            />
                        )
                    })}
                    
                </div>
                <p className="count">{clickedCards.length+1}/{cardList.length}</p>
                <Dialog score={score} status={status} handleChangeScreen={handleChangeScreen}/>
            </div>
        </div>
    );
}

export default Game;
