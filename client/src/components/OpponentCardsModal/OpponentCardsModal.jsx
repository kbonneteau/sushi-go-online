import './OpponentCardsModal.scss';
import { useState } from 'react';
import OpponentIcon from '../OpponentIcon/OpponentIcon';
import ModalIcon from '../ModalIcon/ModalIcon';

const icon = "https://via.placeholder.com/96x96"

const OpponentCardsModal = ({ id }) => {
    const [ hidden, setHidden ] = useState(true);
    // hidden state toggled when hovering mouse over icon
    const handleMouseOver = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    return (
        <div className="played-modal">
            <div className={hidden ? 'played-modal__hidden' : 'played-modal__visible'}>
                <h3 className="played-modal__player-name">Player {id}</h3>
                <ModalIcon image={icon} count={1} />
            </div>
            <OpponentIcon id={id} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} />
        </div>
    );
}

export default OpponentCardsModal;