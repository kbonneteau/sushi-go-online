import './PlayedCards.scss';
import PlayerModal from '../PlayerModal/PlayerModal';
import OpponentPlayingArea from '../OpponentPlayingArea/OpponentPlayingArea';

const PlayedCards = () => {
    return (
        <section className="played-cards-area">
            <div className="played-cards-area__modal-container">
                <PlayerModal />
            </div>
            <OpponentPlayingArea />
        </section>
    );
};

export default PlayedCards;