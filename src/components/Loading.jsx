import { useEffect } from "react";
import fetchCards from "../fetch";

function Loading({handleChangeCardList, handleChangeScreen, size}) {
  
  useEffect(() => {
      fetchCards(size).then(cardList => {
        handleChangeCardList(cardList)
        handleChangeScreen('game')
      })
  }, [])

  return (
      <div className="loading-screen screen">
        <h1 className="loading">Loading...</h1>
      </div>
  )
}

export default Loading;