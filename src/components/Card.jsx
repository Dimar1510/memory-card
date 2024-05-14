import '../styles/Card.css'
function Card({name, imgURL, onClick}) {
    return (  
        <button 
            className="card"
            onClick={onClick}
        >
            <img src={imgURL} alt={name} className="card-img" />
        </button>
    );
}

export default Card;