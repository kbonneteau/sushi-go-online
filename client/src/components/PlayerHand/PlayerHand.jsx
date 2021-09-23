import './PlayerHand.scss';
// import { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';


const PlayerHand = ({ playerCards, selectedCard, handleCardSelection }) => {
    return (
        <article className="player-hand">
            {playerCards.map((card, i) => (
                <Card key={i} card={card} 
                    selectedCard={selectedCard}
                    handleCardSelection={handleCardSelection} 
                />)
            )}
        </article>
    );
};

export default PlayerHand;