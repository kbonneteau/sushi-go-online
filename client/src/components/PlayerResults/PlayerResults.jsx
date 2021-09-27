import './PlayerResults.scss';

const PlayerResults = ({ results, standing }) => {
    return (
        <li className="player-results">
            <p>{standing}</p>
            <h4 className="player-results__player-name">Player {results.playerPosition}</h4>
            <p className="player-results__player-points">{results.score} points</p>
        </li>
    );
};

export default PlayerResults;