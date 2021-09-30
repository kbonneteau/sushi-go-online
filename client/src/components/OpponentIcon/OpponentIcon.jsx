import './OpponentIcon.scss';

const OpponentIcon = ({ icon, handleModalToggle }) => {
    return (
        <div className="opponent-icon">
            <img className="opponent-icon__image" src={icon} alt="colourful chess icon" 
                onClick={handleModalToggle}
            />
        </div>
    );
};

export default OpponentIcon;