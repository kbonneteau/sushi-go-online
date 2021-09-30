import './PlayerGameArea.scss';
import PlayerHand from '../PlayerHand/PlayerHand';
import GameHUD from '../GameHUD/GameHUD';


const PlayerGameArea = ({ player, handleCardSelection, selectedCard, handleCardCommit }) => {
    return (
        <>
            <section className="player-area">
                <div className="player-area__context-container">
                    <h2 className="player-area__title">Your Hand</h2>
                    <p className="player-area__action-description">
                        Select a card to play and pass your hand to the next player
                    </p>
                </div>
                <PlayerHand 
                    playerCards={player.cardsInHand} 
                    selectedCard={selectedCard} 
                    handleCardSelection={handleCardSelection}
                />
            </section>
            <GameHUD handleCardCommit={handleCardCommit} selectedCard={selectedCard} />
        </>
    );
};

export default PlayerGameArea;