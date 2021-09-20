import './PlayerCard.scss';

const PlayerCard = () => {
    return (
        <article className="player-card">
            <header className="player-card__card-icons">
                <img className="player-card__top-icon" src="https://via.placeholder.com/50x50" alt="" />
                <img className="player-card__top-icon" src="https://via.placeholder.com/50x50" alt="" />
                <img className="player-card__top-icon" src="https://via.placeholder.com/50x50" alt="" />
            </header>
            <div className="player-card__main-card-container">
                <img className="player-card__main-icon" src="https://via.placeholder.com/100x100" alt="" />
            </div>
            <footer className="player-card__type-box">
                <h3 className="player-card__type-title">Pudding</h3>
                {/* <p className="player-card__point-value">1 3 6 10 15</p> */}
                <p className="player-card__point-value">Most 6 Least -6</p>
            </footer>
        </article>
    );
};

export default PlayerCard;