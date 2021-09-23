import './GamePage.scss';
import MenuBoard from '../../components/MenuBoard/MenuBoard';
import PlayerGameArea from '../../components/PlayerGameArea/PlayerGameArea';
import PlayedCards from '../../components/PlayedCards/PlayedCards';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';
import { useState, useEffect } from 'react';

const GamePage = ({ match }) => {
    // Modal popup with a cardflip animation?
    // User can pull up "cards played modal to see the cards on the board"

    const [ playerCommit, setPlayerCommit ] = useState(false);
    const [ roundStart, setRoundStart ] = useState(false);
    const [ computerCommit, setComputerCommit ] = useState(null);

    // If computers do not have cards committed in state, roundStart = true



    const [ player, setPlayer ] = useState(null);
    const [ opponents, setOpponents ] = useState(null);

    useEffect(() => {
        axios.get(API_BASE_URL + API_GAME + `/${match.params.gameId}`)
            .then(res => {
                console.log(res.data.players[0].playerPosition);
                setPlayer(res.data.players.find(player => player.playerPosition === 1));
                setOpponents(res.data.players.filter(player => player.playerPosition !== 1));
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <main className="game-area">
            <div className="game-area__game-component-container">
                <div className="game-area__menu-container">
                    <h1 className="game-area__title">Menu</h1>
                    <MenuBoard />
                </div>
                {player && opponents
                    ? <PlayedCards player={player} opponents={opponents} />
                    : null
                }
                
            </div>
            {/* Pass current hands to this component, and pass player hand to player game area component? */}
            <div className="game-area__player-interaction-container">
                {player 
                    ? <PlayerGameArea player={player} />
                    : null
                }
                {/* <SelectCard /> */}
            </div> 
        </main>
    );
};

export default GamePage;