import './PlayerResults.scss';

const PlayerResults = ({ results, standing }) => {
    return (
        <li className="player-results">
            <p className="player-results__place">{standing}</p>
            <img className="player-results__icon" src="https://via.placeholder.com/75x75" alt="" />
            <h4 className="player-results__player-name-title">Player {results.playerPosition}</h4>
            <p className="player-results__player-points">{results.score} points</p>
        </li>
    );
};

export default PlayerResults;