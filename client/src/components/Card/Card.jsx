import './Card.scss';
import { useState, useEffect } from 'react';

const Card = ({ card, selectedCard, handleCardSelection }) => {
    const [ selected, setSelected ] = useState(false);

    /**
     * Sends the card details to parent component (GamePage). 
     * Sets selected state to true when the card is clicked, and false if the same card is clicked.
     * @param {object} card 
     */
    const handleCardSelect = (card) => {
        handleCardSelection(card)
        setSelected(!selected);
    }
    
    useEffect(() => {
        // If a different card is selected (data fed in by props), this card will be unselected.
        if(selected && selectedCard.id !== card.id) {
            setSelected(false)
        }
    }, [selected, selectedCard, card.id]);
    
    return (
        <article onClick={() => handleCardSelect(card)}>
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
                    <p className="player-card__point-value">{card.value}</p>
                </footer>

            </div>
        </article>
    );
};

export default Card;