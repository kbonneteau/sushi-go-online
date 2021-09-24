import './SelectCard.scss';

const SelectCard = ({ handleCardCommit }) => {
    return (
        <button onClick={handleCardCommit} className="select-card">
            Play Selected Card
        </button>
    );
};

export default SelectCard;