import './PlayerHand.scss';
// import { useState, useEffect } from 'react';
import Card from '../Card/Card.jsx';
import useStore from '../../store';


const PlayerHand = ({ selectedCard, handleCardSelection }) => {
    const playerCards = useStore(state => state.player).cardsInHand
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