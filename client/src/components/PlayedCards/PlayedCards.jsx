import './PlayedCards.scss';
import PlayerModal from '../PlayerModal/PlayerModal';
import OpponentPlayingArea from '../OpponentPlayingArea/OpponentPlayingArea';

const PlayedCards = ({ player, opponents }) => {
    return (
        <section className="played-cards-area">
            <PlayerModal playedCards={player.cardsPlayed} icon={player.icon} />
            <OpponentPlayingArea opponents={opponents} />
        </section>
    );
};

export default PlayedCards;