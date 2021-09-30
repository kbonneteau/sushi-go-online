import './OpponentCardsModal.scss';
import { useState } from 'react';
import OpponentIcon from '../OpponentIcon/OpponentIcon';
import ModalIcon from '../ModalIcon/ModalIcon';
import { countCards } from '../../utils/GameUtils';

const OpponentCardsModal = ({ id, opponent }) => {
    const [ hidden, setHidden ] = useState(false);
    // hidden state toggled when user icon is clicked
    const handleModalToggle = () => setHidden(!hidden);

    const cards = countCards(opponent.cardsPlayed);

    return (
        <article className="opponent-modal">
            <div className={hidden ? 'opponent-modal__hidden' : 'opponent-modal__visible'}>
                <h3 className="opponent-modal__player-name">Player {id}'s Played Cards</h3>
                <ul className="opponent-modal__played-list">
                    {cards.map((card, i) => (
                        <li key={i} className="opponent-modal__played-item">
                            <ModalIcon image={card.icon} count={card.count} />
                        </li>
                    ))}
                </ul>
            </div>
            <OpponentIcon id={id} icon={opponent.icon} handleModalToggle={handleModalToggle} />
        </article>
    );
}

export default OpponentCardsModal;