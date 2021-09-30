import './PlayerResults.scss';

const PlayerResults = ({ results, standing }) => {
    return (
        <li className="player-results">
            <p className="player-results__place">{standing}</p>
            <div className="player-results__icon-container">
                <img className="player-results__icon" src={results.icon} alt="Player icon" />
            </div>
            {results.playerPosition === 1 
                ? <h4 className="player-results__player-name-title">You</h4>
                : <h4 className="player-results__player-name-title">Player {results.playerPosition}</h4>
            }
            <p className="player-results__player-points">{results.score} points</p>
        </li>
    );
};

export default PlayerResults;