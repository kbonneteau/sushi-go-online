import './PlayerHand.scss';
import { useEffect, createRef } from 'react';
import Card from '../Card/Card.jsx';


const PlayerHand = ({ playerCards, selectedCard, handleCardSelection }) => {
    const cardContainer = createRef();

    useEffect(() => {
        // On every change to playerCards prop, animate the conveyor belt.
        return animateConveyorBelt(cardContainer.current);
    }, [playerCards])

    /**
     * Applies the "card-slide-in" class, and removes it after 500ms
     * @param {virtualDOM object} cardContainer 
     */
    const animateConveyorBelt = (cardContainer) => {
        cardContainer.className = "player-hand card-slide-in";

        setTimeout(() => {
            cardContainer.className = "player-hand"
        }, 500)
    };
    
    return (
        <article ref={cardContainer} className="player-hand">
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