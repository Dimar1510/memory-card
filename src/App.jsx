import { useState } from 'react'
import Game from './components/Game'
import Start from './components/Start.jsx'
import Loading from './components/Loading.jsx'
import './App.css'



function App() {
  const [screen, setScreen] = useState('start')
  const [cardList, setCardList] = useState([])
  const [size, setSize] = useState(null)

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

  return (
    <>
      {screen === 'start' && (
        <Start
          handleChangeScreen = {handleChangeScreen}
          handleChangeCardList = {handleChangeCardList} 
          handleSetSize = {handleSetSize}
        />
        )
      }
      {screen === 'game' && (
        <Game
          handleChangeScreen = {handleChangeScreen} 
          handleChangeCardList = {handleChangeCardList}
          initialCardList = {cardList} 
        />
        )
      }
      {screen === 'loading' && (
        <Loading
          handleChangeScreen = {handleChangeScreen} 
          handleChangeCardList = {handleChangeCardList} 
          size = {size}
        />
        )
      }
      {/* <video autoPlay muted loop id='myVideo'>
        <source src={video} type='video/mp4'/>
      </video> */}
    </>
  )
}

export default App
