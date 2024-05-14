import logo from '../assets/images/logo.png'
import '../styles/Start.css'
function Start({handleChangeScreen, handleSetSize}) {
    return (  
        <div className="start-screen">
            <img src={logo} alt="HS logo" />
            <h1>Hearthstone legendary memory game</h1>
            <div className="buttons">
            <button
                onClick={async() => {
                    handleSetSize(4)
                    handleChangeScreen('loading')
                }}
            >
                Easy
            </button>    

            <button
                onClick={async() => {
                    handleSetSize(8)
                    handleChangeScreen('loading')
                }}
            >
                Medium
            </button>   
            <button
                onClick={async() => {
                    handleSetSize(12)
                    handleChangeScreen('loading')
                }}
            >
                Hard
            </button>   
        </div>    
            </div>

        
    );
}

export default Start;