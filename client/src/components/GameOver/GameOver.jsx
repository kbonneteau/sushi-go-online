import './GameOver.scss';
import PlayerResults from '../PlayerResults/PlayerResults';
import { useHistory } from 'react-router-dom';
import win from '../../assets/images/win2.gif';
import win2 from '../../assets/images/win.webp';
import lose from '../../assets/images/lose.gif';


const GameOver = () => {
    const history = useHistory();
    const handleGameOver = () => {
        console.log('destroy session')
        history.push(`/`);
    }
    return (
        <div className="game-over">
            <img className="game-over__hero-image" src={lose} alt="" />
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