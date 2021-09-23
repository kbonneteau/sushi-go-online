import './GamePage.scss';
import MenuBoard from '../../components/MenuBoard/MenuBoard';
import PlayerGameArea from '../../components/PlayerGameArea/PlayerGameArea';
import PlayedCards from '../../components/PlayedCards/PlayedCards';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';
import { useState, useEffect } from 'react';
import allComputersCommitCards from '../../utils/GameUtils';

const GamePage = ({ match }) => {
    // Modal popup with a cardflip animation?
    // User can pull up "cards played modal to see the cards on the board"

    // const [ playerCommit, setPlayerCommit ] = useState(false);
    const [ roundStart, setRoundStart ] = useState(false);
    // const [ computerCommit, setComputerCommit ] = useState(null);

    // If computers do not have cards committed in state, roundStart = true



    const [ player, setPlayer ] = useState(null);
    const [ opponents, setOpponents ] = useState(null);
    const [ opponentSelectedCard, setOpponentSelectedCard ] = useState(null);

    useEffect(() => {
        console.log('useEffect')
        // If there aren't any players, make an axios request to get the data.
        if(!opponents && !player){
        axios.get(API_BASE_URL + API_GAME + `/${match.params.gameId}`)
            .then(res => {
                console.log("axios done, setting state")
                setPlayer(res.data.players.find(player => player.playerPosition === 1));
                setOpponents(res.data.players.filter(player => player.playerPosition !== 1));
            })
            .catch(err => console.log(err.message))
        }

        // if there are opponents, but they haven't selected a card, make a selection.
        if(opponents && !opponentSelectedCard) {
            setOpponentSelectedCard(allComputersCommitCards(opponents))
        }


        // If the opponent has selected a card...
        // Can I filter update the opponents object here after each round instead of back-end.
        if(opponentSelectedCard) {
            console.log('Now these cards are selected',opponentSelectedCard)
        }

        // If a new round is starting, re-initialize the round data.
        if(roundStart) {
            setOpponentSelectedCard(null);
        }
    }, [opponents, player, match.params.gameId, opponentSelectedCard])


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