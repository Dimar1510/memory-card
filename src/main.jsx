import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import fetchCards from './fetch.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// async function getCards() {
//   const cards = await fetchCards(5)
//   console.log(cards)
// }

// getCards()




