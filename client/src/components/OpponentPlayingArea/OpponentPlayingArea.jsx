import './OpponentPlayingArea.scss';
import OpponentCardsModal from '../OpponentCardsModal/OpponentCardsModal';

const OpponentPlayingArea = () => {
    return (
        <div className="opponent-area">
            <OpponentCardsModal id="2" />
            <OpponentCardsModal id="3" />
            <OpponentCardsModal id="4" />
        </div>
    );
};

export default OpponentPlayingArea;