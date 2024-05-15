import Tilt from 'react-parallax-tilt';
import '../styles/Card.css'

function Card({name, imgURL, onClick}) {
    return (  
        <Tilt
            tiltReverse={true}

            className='tilt'
            scale={1}>
            <button 
                className="card"
                onClick={onClick}
            >   
                <div className="card-face">
                    <img src={imgURL} alt={name} className="card-img" />
                </div>
                <div className="card-back">
                    
                </div>
            </button>
         </Tilt>
    );
}

export default Card;