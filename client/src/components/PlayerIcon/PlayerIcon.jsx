import './PlayerIcon.scss';

const PlayerIcon = ({ icon, handleModalToggle }) => {
    return (
        <div className="player-icon">
            <img onClick={handleModalToggle} className="player-icon__image" src={icon} alt="colourful chess piece player icon" />
        </div>
    );
};

export default PlayerIcon;