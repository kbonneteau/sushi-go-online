import './OpponentPlayingArea.scss';
import OpponentCardsModal from '../OpponentCardsModal/OpponentCardsModal';

const OpponentPlayingArea = ({ opponents }) => {
    return (
        <div className="opponent-area">
            {opponents.map(opponent => (
                <OpponentCardsModal 
                    key={opponent.playerPosition} 
                    opponent={opponent}
                    id={opponent.playerPosition} 
                />)
            )}
        </div>
    );
};

export default OpponentPlayingArea;