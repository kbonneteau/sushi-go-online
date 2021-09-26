import './GameOver.scss';
import PlayerResults from '../PlayerResults/PlayerResults';
import { useHistory } from 'react-router-dom';

const GameOver = () => {
    const history = useHistory();
    const handleGameOver = () => {
        console.log('destroy session')
        history.push(`/`);
    }
    return (
        <div className="game-over">
            <img className="game-over__hero-image" src="https://via.placeholder.com/300x300" alt="" />
            <h2 className="game-over__title">Game Over</h2>
            <div className="game-over__results-container">
                <h3 className="game-over__results-title">Results</h3>
                <ul className="game-over__results-list">
                    {/* Players.map */}
                    <PlayerResults />
                </ul>
            </div>
            <button onClick={handleGameOver} className="game-over__new-game">
                Home
            </button>
        </div>
    );
};

export default GameOver;