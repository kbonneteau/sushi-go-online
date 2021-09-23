import './PlayerModal.scss';
import { useState } from 'react';
import PlayerIcon from '../PlayerIcon/PlayerIcon';
import ModalIcon from '../ModalIcon/ModalIcon';

// dummy data
const cards = [
    {icon: 'https://via.placeholder.com/50x50', count: 3},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
    {icon: 'https://via.placeholder.com/50x50', count: 1},
    {icon: 'https://via.placeholder.com/50x50', count: 2},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
    {icon: 'https://via.placeholder.com/50x50', count: 1},
    {icon: 'https://via.placeholder.com/50x50', count: 0},
]


const PlayerModal = ({ playedCards }) => {
    const [ hidden, setHidden ] = useState(false);
    // hidden state toggled when user icon is clicked
    const handleModalToggle = () => setHidden(!hidden);

    return (
        <article className="player-modal">
            <div className={'player-modal__visible'}>
            {/* <div className={hidden ? 'player-modal__hidden' : 'player-modal__visible'}> */}
                <h3 className="player-modal__player-name">Your Played Cards</h3>
                <ul className="player-modal__cards-list">
                    {cards.map((card, i) => (
                        <li key={i} className="player-modal__item">
                            <ModalIcon image={card.icon} count={card.count} />
                        </li>
                    ))}
                </ul>
            </div>
            <PlayerIcon handleModalToggle={handleModalToggle} />
        </article>
    );
};

export default PlayerModal;