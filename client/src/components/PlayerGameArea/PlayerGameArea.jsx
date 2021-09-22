import './PlayerGameArea.scss';
import { useState } from 'react';
import PlayerHand from '../PlayerHand/PlayerHand';
import SelectCard from '../SelectCard/SelectCard';


const PlayerGameArea = () => {
    const [ selectedCard, setSelectedCard ] = useState(null);

    const handleCardSelection = (clickedId) => {
        clickedId === selectedCard 
            ? setSelectedCard(null)
            : setSelectedCard(clickedId);
    }

    return (
        <>
            <section className="player-area">
                <h2 className="player-area__title">Player Hand</h2>
                <p className="player-area__action-description">
                    Select a card to play and pass your hand to the next player
                </p>
                <PlayerHand selectedCard={selectedCard} handleCardSelection={handleCardSelection} />
            </section>
            <SelectCard selectedCard={selectedCard} />
        </>
    );
};

export default PlayerGameArea;