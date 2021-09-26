import './GamePage.scss';
import MenuBoard from '../../components/MenuBoard/MenuBoard';
import PlayerGameArea from '../../components/PlayerGameArea/PlayerGameArea';
import PlayedCards from '../../components/PlayedCards/PlayedCards';
import GameOver from '../../components/GameOver/GameOver';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';
import { useState, useEffect } from 'react';
import * as GameLogic from '../../utils/GameUtils';
// import { allComputersCommitCards, findPlayer, findOpponents, setPlayedCards } from '../../utils/GameUtils';


const GamePage = ({ match }) => {
    // Modal popup with a cardflip animation?
    // User can pull up "cards played modal to see the cards on the board"

    // const [ computerCommit, setComputerCommit ] = useState(null);
    const [ playerCommit, setPlayerCommit ] = useState(false);
    const [ roundStart, setRoundStart ] = useState(false);
    // If computers do not have cards committed in state, roundStart = true
    const [ selectedCard, setSelectedCard ] = useState({});
    const [ player, setPlayer ] = useState(null);
    const [ opponents, setOpponents ] = useState(null);
    const [ opponentSelectedCard, setOpponentSelectedCard ] = useState(null);
    const [ gameOver, setGameOver] = useState(false)

    const handleCardSelection = clickedCard => {
        clickedCard.id === selectedCard.id 
            ? setSelectedCard({})
            : setSelectedCard(clickedCard);
    }

    const handleCardCommit = () => { 
        if(selectedCard.id !== undefined) {
            setPlayerCommit(true)
        } else {
            console.log('this card is null')
        }
    }

    const setPlayers = arrayOfPlayers => {
        setPlayer(GameLogic.findPlayer(arrayOfPlayers));
        setOpponents(GameLogic.findOpponents(arrayOfPlayers));
    }

    useEffect(() => {
        // console.log('useEffect')
        // If there aren't any players, make an axios request to get the data.
        if(!opponents && !player){
        axios.get(API_BASE_URL + API_GAME + `/${match.params.gameId}`)
            .then(res => {
                // console.log("axios done, setting state")
                // console.log(res.data.players)
                setPlayers(res.data.players);
                // setPlayer(GameLogic.findPlayer(res.data.players));
                // setOpponents(GameLogic.findOpponents(res.data.players));
            })
            .catch(err => console.log(err.message))
        }

        // if there are opponents, but they haven't selected a card, make a selection.
        if(opponents && !opponentSelectedCard) {
            // Don't attempt a selection if there are no cards left.
            if(opponents[1].cardsInHand.length > 0) {
                setOpponentSelectedCard(GameLogic.allComputersCommitCards(opponents))
            }
        }


        // If the opponent has selected a card...
        // Can I filter update the opponents object here after each round instead of back-end.
        if(opponentSelectedCard) {
            // console.log('Now these cards are selected',opponentSelectedCard)
        }

        // If a card is selected, do something here.
        if(selectedCard.id !== undefined) {
            // console.log('player selected card ::',selectedCard)
        }

        // If a new round is starting, re-initialize the round data.
        if(roundStart) {
            setOpponentSelectedCard(null);
        }

        if(player && player.cardsInHand.length === 0) {
            console.log('game over!')
            setGameOver(true)
            GameLogic.determineWinner([player, opponents]);
        }

        // If card is committed, do something.
        if(playerCommit) {
            const allPlayers = [player, ...opponents]
            console.log('card commit ::')
            // Here, I want to
            //      - update played cards
            //      - pass hand to next player
            //      - receive a new hand
            const playersWithCards = GameLogic.setPlayedCards(player, opponents, selectedCard, opponentSelectedCard);
            setPlayers(playersWithCards);

            // Infinite loop triggered without this
            setPlayerCommit(false);
            // setRoundStart((prevRound) => {
            //     if(prevRound === true) return
            //     else return true;
            // })

            // This resolved the issue with computer async card setting (I think??)
            setOpponentSelectedCard(null)
            setSelectedCard({})
        }

    }, [opponents, player, match.params.gameId, opponentSelectedCard, roundStart, selectedCard, playerCommit])


    return (
        <>
            <main className={gameOver ? "game-area game-area--game-over" : "game-area"}>
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
                        ? <PlayerGameArea 
                            player={player} 
                            handleCardSelection={handleCardSelection} 
                            selectedCard={selectedCard}
                            handleCardCommit={handleCardCommit} 
                        />
                        : null
                    }
                    {/* <SelectCard /> */}
                </div> 
            </main>
            {gameOver 
                ?  (<div className="game-area__game-over-container">
                        <GameOver />
                    </div>) 
                : null
            }
        </>
    );
};

export default GamePage;