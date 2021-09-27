import './PlayerResultsFirst.scss';

const PlayerResultsFirst = ({ results, standing }) => {
    return (
        <li className="player-results player-results--first">
            <p className="player-results__place--first">{standing}</p>
            <img className="player-results__icon" src="https://via.placeholder.com/75x75" alt="" />
            <h4 className="player-results__player-name--first">Player {results.playerPosition}</h4>
            <p className="player-results__player-points--first">{results.score} points</p>
        </li>
    );
};

export default PlayerResultsFirst;