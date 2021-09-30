import './PlayerResultsFirst.scss';

const PlayerResultsFirst = ({ results, standing }) => {
    return (
        <li className="player-results player-results--first">
            <p className="player-results__place--first">
                {standing}<sup className="player-results__super-script">st</sup>
            </p>
            <div className="player-results__icon-container">
                <img className="player-results__icon" src={results.icon} alt="Player icon" />
            </div>
            {results.playerPosition === 1 
                ? <h4 className="player-results__player-name--first">You</h4>
                : <h4 className="player-results__player-name--first">Player {results.playerPosition}</h4>}
            <p className="player-results__player-points--first">{results.score} points</p>
        </li>
    );
};

export default PlayerResultsFirst;