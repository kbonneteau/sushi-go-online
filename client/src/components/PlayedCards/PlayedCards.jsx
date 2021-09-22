import './PlayedCards.scss';
import PlayerModal from '../PlayerModal/PlayerModal';
import OpponentPlayingArea from '../OpponentPlayingArea/OpponentPlayingArea';

const PlayedCards = () => {
    return (
        <section className="played-cards-area">
            <PlayerModal />
            <OpponentPlayingArea />
        </section>
    );
};

export default PlayedCards;