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
        <article className="played-modal">
            <div className={hidden ? 'played-modal__hidden' : 'played-modal__visible'}>
                <h3 className="played-modal__player-name">Player {id}'s Played Cards</h3>
                <ul className="played-modal__played-list">
                    {cards.map((card, i) => (
                        <li key={i} className="played-modal__played-item">
                            <ModalIcon image={card.icon} count={card.count} />
                        </li>
                    ))}
                </ul>
            </div>
            <OpponentIcon id={id} handleModalToggle={handleModalToggle} />
        </article>
    );
}

export default OpponentCardsModal;