import './GameOver.scss';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';
import PlayerResults from '../PlayerResults/PlayerResults';
import PlayerResultsFirst from '../PlayerResultsFirst/PlayerResultsFirst';
import win from '../../assets/images/win.webp';
import lose from '../../assets/images/lose.gif';

const GameOver = ({ results }) => {
    const history = useHistory();
    const params = useParams();

    /**
     * Makes axios call to API to delete the game from server data. Destroys JWT token held in local storage.
     * Returns the user back to the home page of the game.
     */
    const handleGameOver = () => {
        axios.delete(API_BASE_URL + API_GAME + `/${params.gameId}`)
            .then(() => localStorage.removeItem('jwtToken'))
            .catch(console.log)
        history.push(`/`);
    }

    /**
     * Determines if player 1 came in first place. If yes, render a happy gif. If not, render a sad gif.
     * @returns {string} containing path for image asset to use.
     */
    const determinePlayerScore = () => {
        if(results[0].playerPosition === 1){
            return win;
        }
        return lose;
    }

    return (
        <div className="game-over">
            <img className="game-over__hero-image" src={determinePlayerScore()} alt="animated sushi celebrating win or consoling loss" />
            <h2 className="game-over__title">Game Over</h2>

            <div className="game-over__results-container">
                <h3 className="game-over__results-title">Standings</h3>
                <ul className="game-over__results-list">
                    {results.map((playerResults, i) => (
                        i === 0 
                            ? <PlayerResultsFirst key={i} standing={i+1} results={playerResults}/> 
                            : <PlayerResults key={i} standing={i+1} results={playerResults} />
                        )
                    )}
                </ul>
            </div>
            
            <button onClick={handleGameOver} className="game-over__new-game">
                Home
            </button>
        </div>
    );
};

export default GameOver;