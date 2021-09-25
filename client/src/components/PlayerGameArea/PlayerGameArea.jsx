import './PlayerGameArea.scss';
import PlayerHand from '../PlayerHand/PlayerHand';
import SelectCard from '../SelectCard/SelectCard';
import PlayChopsticks from '../PlayChopsticks/PlayChopsticks';


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
            <div className="player-area__player-action-container">
                <SelectCard handleCardCommit={handleCardCommit} />
                <PlayChopsticks />
            </div>
        </>
    );
};

export default PlayerGameArea;