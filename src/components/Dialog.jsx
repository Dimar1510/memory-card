import '../styles/Dialog.css'
function Dialog({score, status, handleChangeScreen}) {
    return ( 
        <dialog className="game-over">
            <h2 className='dialog-header'>{
            status === 'win' && 'You win'}
            {status === 'lost' && 'You lost'
            }</h2>
            <button 
                className='btn-restart'
                onClick={async() => {
                    handleChangeScreen('loading')
                }}
            >Restart</button>
            <button className='btn-back' onClick={() => handleChangeScreen('start')}>Main menu</button>
        </dialog>
    );
}

export default Dialog;