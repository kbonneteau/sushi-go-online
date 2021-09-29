import './SelectCard.scss';

const SelectCard = ({ handleCardCommit, selectedCard }) => {
    return (
        <button onClick={handleCardCommit} 
            className={selectedCard.id !== undefined ? "select-card select-card--selected" : "select-card"}
        >
            Play Selected Card
        </button>
    );
};

export default SelectCard;