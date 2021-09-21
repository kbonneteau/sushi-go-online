import './PlayerIcon.scss';

const PlayerIcon = ({ handleModalToggle }) => {
    return (
        <div className="player-icon">
            <img onClick={handleModalToggle} className="player-icon__image" src="https://via.placeholder.com/96x96" alt="" />
            {/* <h3 className="player-icon__player-name">You</h3> */}
        </div>
    );
};

export default PlayerIcon;