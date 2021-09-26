import './PlayerHand.scss';
// import { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';


const PlayerHand = ({ playerCards, selectedCard, handleCardSelection, useChopsticks, handleMultiCardSelection, multiCardSelection }) => {
    return (
        <article className="player-hand">
            {playerCards.map((card, i) => (
                <Card key={i} card={card} 
                    selectedCard={selectedCard}
                    handleCardSelection={handleCardSelection}
                    handleMultiCardSelection={handleMultiCardSelection}
                    useChopsticks={useChopsticks}
                    multiCardSelection={multiCardSelection}
                />)
            )}
        </article>
    );
};

export default PlayerHand;