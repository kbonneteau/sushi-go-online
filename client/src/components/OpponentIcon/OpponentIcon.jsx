import './OpponentIcon.scss';

const OpponentIcon = ({ handleMouseOver, handleMouseLeave, id }) => {
    return (
        <div className="opponent-icon">
            <img className="opponent-icon__image" src="https://via.placeholder.com/96x96" alt="" 
                onMouseEnter={() => handleMouseOver(id)}
            />
            {/* <h3 className="opponent-icon__player-name">Player {id}</h3> */}
        </div>
    );
};

export default OpponentIcon;