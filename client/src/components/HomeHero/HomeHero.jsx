import './HomeHero.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeHero = () => {
    const handleNewGame = () => {
        console.log('New game please')
    }
    
    const handleResumeGame = () => {
        console.log('Resume game')
    }

    return (
        <section className="hero">
            <img className="hero__image" src="https://via.placeholder.com/400x400" alt="" />
            <div className="hero__content-container">
                <h1 className="hero__title">Sushi Go! Online</h1>
                <p className="hero__game-description">
                    Based on the classic pick-and-pass tabletop board game, Sushi Go! Online brings your favourite mouth-watering sushi conveyor game to a computer near you.
                    {/* Play with friends online, or play against various difficulties of computers. */}
                </p>
                <div className="hero__cta-container">
                    <p className="hero__call-to-action">
                        Want to play a game?
                    </p>
                    <Link className="hero__learn-game" to="/">How to Play</Link>
                    <button className="hero__play-game" onClick={handleNewGame}>New Game</button>
                    <button className="hero__play-game" onClick={handleResumeGame}>Resume Game</button>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;