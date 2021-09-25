import './SelectCardAlt.scss';

const SelectCardAlt = ({ handleCardCommit }) => {
    return (
        <button onClick={handleCardCommit} className="select-card-alt">
            Play Selected Cards
        </button>
    );
};

export default SelectCardAlt;