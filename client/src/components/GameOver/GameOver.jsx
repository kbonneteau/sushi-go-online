import './GameOver.scss';
import PlayerResults from '../PlayerResults/PlayerResults';
import PlayerResultsFirst from '../PlayerResultsFirst/PlayerResultsFirst';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';
// import win2 from '../../assets/images/win2.gif';
import win from '../../assets/images/win.webp';
import lose from '../../assets/images/lose.gif';


const GameOver = ({ results }) => {
    const history = useHistory();
    const params = useParams();

    const handleGameOver = () => {
        axios.delete(API_BASE_URL + API_GAME + `/${params.gameId}`)
            .then(() => localStorage.removeItem('jwtToken'))
            .catch(console.log)
        console.log('destroy session')
        history.push(`/`);
    }

    const determinePlayerScore = () => {
        if(results[0].playerPosition === 1){
            return win;
        }
        return lose;
    }

    return (
        <div className="game-over">
            <img className="game-over__hero-image" src={determinePlayerScore()} alt="" />
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