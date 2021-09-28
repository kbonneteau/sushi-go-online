import './GameHUD.scss';
import SelectCard from '../SelectCard/SelectCard';

const GameHUD = ({ handleCardCommit, selectedCard }) => {
    return (
        <section className="game-hud">
            <div className="game-hud__title-container">
                <h2 className="game-hud__title">Your turn</h2>
            </div>

            <SelectCard handleCardCommit={handleCardCommit} selectedCard={selectedCard} />
        </section>
    );
};

export default GameHUD;