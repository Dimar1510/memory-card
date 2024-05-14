import { useState } from "react";
import Card from "./Card";
import '../styles/Game.css'
import Dialog from "./Dialog";

function Game({initialCardList, handleChangeScreen}) {

    const [cardList, setCardList] = useState(initialCardList)
    const [clickedCards, setClickedCards] = useState([])
    const [status, setStatus] = useState('game')
    const score = clickedCards.length
    
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

    function handleCardClick(card) {
        if (status !== 'game') return
        if (!clickedCards.find(id => id === card.id)) {
            if (score < cardList.length - 1) {
                handleShuffleList()
                handleChangeClickedCards(card.id)
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

    return (  
        <div className="game-screen">
            <div className="game-header">
                <h1>Game</h1>
            </div>
            <div className="instructions">Click each card only once!</div>
            <div className="grid">
                {cardList.map(card => {
                    console.log(card.name)
                    return (
                        <Card 
                            imgURL={card.imgURL} 
                            name={card.name} 
                            key={card.id}
                            onClick = {() => handleCardClick(card)}
                        />
                    )
                })}
                
            </div>
            <Dialog score={score} status={status} handleChangeScreen={handleChangeScreen}/>
        </div>
    );
}

export default Game;
