import './HomeHero.scss';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';

const HomeHero = () => {
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
                // Throw an error modal?
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
            .then(() => {
                console.log('you got in')
            })
            .catch(error => console.log(error))
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
                    <p className="hero__call-to-action">Want to play a game?</p>
                    <Link className="hero__learn-game" to="/">How to Play</Link>
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