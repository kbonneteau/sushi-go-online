import './PlayerHand.scss';
import { useEffect, createRef } from 'react';
import Card from '../Card/Card.jsx';


const PlayerHand = ({ playerCards, selectedCard, handleCardSelection }) => {
    const cardContainer = createRef();

    useEffect(() => {
        return animateConveyorBelt(cardContainer.current);
    }, [playerCards,])

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