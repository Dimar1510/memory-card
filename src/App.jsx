import { useState } from 'react'
import Game from './components/Game'
import Start from './components/Start.jsx'
import Loading from './components/Loading.jsx'
import video from './assets/images/loop.mp4'
import loading from './assets/images/loading.mp4'
import './App.css'
import './styles/Buttons.css'



function App() {
  const [screen, setScreen] = useState('start')
  const [cardList, setCardList] = useState([])
  const [size, setSize] = useState(null)
  const [highScore, setHighScore] = useState(0)

  function handleChangeScreen(screen, count) {
    setScreen(screen)
  }

  function handleChangeCardList(list) {
    const newList = [...list]
    setCardList(newList)
  }

  function handleSetSize(size) {
    setSize(size)
  }

  function handleSetHighScore() {
    setHighScore(highScore => highScore + 1)
  }

  return (
    <>


      {screen === 'start' && (
        <>
          <video autoPlay muted loop id='myVideo' playsInline>
            <source src={video} type='video/mp4'/>
          </video>
          <Start
            handleChangeScreen = {handleChangeScreen}
            handleChangeCardList = {handleChangeCardList} 
            handleSetSize = {handleSetSize}
          />
        </>

        )
      }
      {screen === 'game' && (
        <Game
          handleChangeScreen = {handleChangeScreen} 
          initialCardList = {cardList}
          highScore = {highScore}
          handleSetHighScore = {handleSetHighScore} 
        />
        )
      }
      {screen === 'loading' && (
        <>
          <video autoPlay muted loop id='myVideo' playsInline>
            <source src={loading} type='video/mp4'/>
          </video>
          <Loading
            handleChangeScreen = {handleChangeScreen} 
            handleChangeCardList = {handleChangeCardList} 
            size = {size}
          />
        </>
        )
      }

    </>
  )
}


export default App
