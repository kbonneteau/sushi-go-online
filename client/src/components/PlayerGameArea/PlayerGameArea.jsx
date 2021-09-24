import './PlayerGameArea.scss';
import PlayerHand from '../PlayerHand/PlayerHand';
import SelectCard from '../SelectCard/SelectCard';


const PlayerGameArea = ({ player, handleCardSelection, selectedCard, handleCardCommit }) => {
    return (
        <>
            <section className="player-area">
                <h2 className="player-area__title">Player Hand</h2>
                <p className="player-area__action-description">
                    Select a card to play and pass your hand to the next player
                </p>
                <PlayerHand 
                    playerCards={player.cardsInHand} 
                    selectedCard={selectedCard} 
                    handleCardSelection={handleCardSelection}
                />
            </section>
            <SelectCard handleCardCommit={handleCardCommit} />
        </>
    );
};

export default PlayerGameArea;