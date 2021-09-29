import './OpponentIcon.scss';

const OpponentIcon = ({ icon, handleModalToggle, id }) => {
    return (
        <div className="opponent-icon">
            <img className="opponent-icon__image" src={icon} alt="" 
                onClick={handleModalToggle}
            />
        </div>
    );
};

export default OpponentIcon;