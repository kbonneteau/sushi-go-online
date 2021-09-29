import './HomeHero.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';

const HomeHero = ({ handleError, handleTutorialClick }) => {
    const history = useHistory();

    const handleNewGame = () => {
        console.log(API_BASE_URL + API_GAME);
        axios.post(API_BASE_URL + API_GAME)
            .then((res) => {
                console.log('New game please');
                localStorage.setItem('jwtToken', res.data.token)
                history.push(`/game/${res.data.newGame.gameId}`);
            })
            .catch(() => {
                console.log('An error occurred. Please try again.')
            })
    }
    
    const handleResumeGame = () => {
        console.log('Resume game')
        console.log(localStorage.getItem('jwtToken'))
        axios
            .get(API_BASE_URL + API_GAME, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
                }
            })
            .then((res) => {
                history.push(`/game/${res.data.gameId}`);
            })
            // Create an error modal if the user needs to start a new game
            .catch(handleError)
    }

    return (
        <section className="hero">
            <div className="hero__content-container">
                <h1 className="hero__title">Sushi Go! Online</h1>
                <div className="hero__game-description-container">
                <p className="hero__game-description hero__game-description--subtext">
                    Based on the classic pick-and-pass tabletop board game.
                </p>
                <p className="hero__game-description">
                    Sushi Go! Online brings your favourite mouth-watering sushi conveyor game to a computer near you.
                </p>

                </div>
                <div className="hero__cta-container">
                    <p className="hero__call-to-action">Want to play a game?</p>
                    <button className="hero__learn-game" onClick={handleTutorialClick} >How to Play</button>
                    <div className="hero__game-buttons-container">
                        <button className="hero__play-game" onClick={handleNewGame}>New Game</button>
                        <button className="hero__play-game" onClick={handleResumeGame}>Resume Game</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;