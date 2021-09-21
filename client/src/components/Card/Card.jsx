import './Card.scss';

const Card = ({ card }) => {
    return (
        <article className={`player-card ${card.card}`}>
            <header className="player-card__card-icons">
                {card.card === "maki"
                    ? [...Array(card.numberOfRolls)].map((_roll, index) => (<img key={index} className="player-card__top-icon" 
                        src={card.image.icon} alt="" />))
                    : <img className="player-card__top-icon" src={card.image.icon} alt="" /> }
            </header>
            <div className="player-card__main-card-container">
                <img className="player-card__main-icon" src={card.image.main} alt="" />
            </div>
            <footer className="player-card__type-box">
                <h3 className="player-card__type-title">{card.subType}</h3>
                {/* <p className="player-card__point-value">1 3 6 10 15</p> */}
                <p className="player-card__point-value">{card.value}</p>
            </footer>
        </article>
    );
};

export default Card;