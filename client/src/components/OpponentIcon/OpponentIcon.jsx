import './OpponentIcon.scss';

const OpponentIcon = ({ handleModalToggle, id }) => {
    return (
        <div className="opponent-icon">
            <img className="opponent-icon__image" src="https://via.placeholder.com/96x96" alt="" 
                onClick={handleModalToggle}
            />
        </div>
    );
};

export default OpponentIcon;