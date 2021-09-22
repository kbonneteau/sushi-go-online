import './Card.scss';
import { useState, useEffect } from 'react';

const Card = ({ card, selectedCard, handleCardSelection }) => {
    const [ selected, setSelected ] = useState(false);

    const handleCardSelect = (clickedId) => {
        console.log('Clicked! :: card, ID:', clickedId)
        handleCardSelection(clickedId)
        setSelected(!selected);
    }
    
    useEffect(() => {
        console.log("effect triggered")
        if(selected && selectedCard !== card.id) {
            setSelected(false)
        }
    });
    console.log(selectedCard)
    // console.log('card',card)
    return (
        // <article className="selected">
        <article onClick={() => handleCardSelect(card.id)}>
            <div className={selected ? `player-card ${card.card} selected` : `player-card ${card.card}`}>
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
            </div>
        </article>
    );
};

export default Card;