import './GamePage.scss';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL, API_GAME } from '../../utils/ApiUtils';
import MenuBoard from '../../components/MenuBoard/MenuBoard';
import PlayerGameArea from '../../components/PlayerGameArea/PlayerGameArea';
import PlayedCards from '../../components/PlayedCards/PlayedCards';
import GameOver from '../../components/GameOver/GameOver';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import * as GameLogic from '../../utils/GameUtils';


const GamePage = ({ match }) => {
    const history = useHistory();
    // STATE INITIALIZATION
    // State related to the overall game
    const [ endRound, setEndRound ] = useState(false);
    const [ roundCount, setRoundCount ] = useState(1);
    const [ gameOver, setGameOver] = useState(false)
    const [ results, setResults ] = useState([])

    // State related to modal rendering
    const [ error, setError ] = useState(false)

    // State related to players and opponents
    const [ player, setPlayer ] = useState(null);
    const [ selectedCard, setSelectedCard ] = useState({});
    const [ playerCommit, setPlayerCommit ] = useState(false);
    const [ opponents, setOpponents ] = useState(null);
    const [ opponentSelectedCard, setOpponentSelectedCard ] = useState(null);

    /**
     * Sets a card into state when a card is clicked.
     * @param {object} clickedCard 
     */
    const handleCardSelection = clickedCard => {
        clickedCard.id === selectedCard.id 
            ? setSelectedCard({})
            : setSelectedCard(clickedCard);
    }

    /**
     * Checks if a card is selected on card commit. If yes, set commit to true.
     */
    const handleCardCommit = () => { 
        if(selectedCard.id !== undefined) {
            setPlayerCommit(true)
        } 
    }

    /**
     * Parses through an array containing all players and sets a player and all opponents into state.
     * @param {array} arrayOfPlayers 
     */
    const setPlayers = arrayOfPlayers => {
        setPlayer(GameLogic.findPlayer(arrayOfPlayers));
        setOpponents(GameLogic.findOpponents(arrayOfPlayers));
    }

    /**
     * Removes the saved jwt token from local storage and redirects the user to the home page.
     */
    const handleModalClose = () => {
        history.push('/');
        localStorage.removeItem('jwtToken');
    };

    useEffect(() => {
        // If there aren't any players, make an axios request to get the data.
        if(!opponents && !player){
        axios.get(API_BASE_URL + API_GAME + `/${match.params.gameId}`)
            .then(res => {
                setPlayers(res.data.players);
            })
            .catch(() => {
                setError(true);
            })
        }

        // if there are opponents, but they haven't selected a card, make a selection.
        if(opponents && !opponentSelectedCard) {
            // Don't attempt a selection if there are no cards left.
            if(opponents[1].cardsInHand.length > 0) {
                setOpponentSelectedCard(GameLogic.allComputersCommitCards(opponents))
            }
        }

        // At the end of a round, update the back-end data.
        if(endRound) {
            // Update the round cound
            let updatedRoundCount = roundCount + 1;
            setRoundCount(updatedRoundCount)
            axios.put(API_BASE_URL + API_GAME + `/${match.params.gameId}`, {
                roundCount: updatedRoundCount,
                player: player,
                opponents: opponents
            })
                .then()
                .catch(err => console.log(err.message))
            // Reset the round in state
            setEndRound(false);
        }

        // If a player exists but no longer has cards in their hand, trigger game end & score calculations.
        if(player && player.cardsInHand.length === 0) {
            let allPlayers = [player]
            opponents.forEach(opponent => allPlayers = [...allPlayers, opponent])
            setGameOver(true)
            setResults(GameLogic.determineWinner(allPlayers));
        }

        // If card is committed, set the played cards for all players, and exchange hands with the next player.
        if(playerCommit) {
            const playersWithCards = GameLogic.setPlayedCards(player, opponents, selectedCard, opponentSelectedCard);
            setPlayers(playersWithCards);

            // Infinite loop triggered without this
            setPlayerCommit(false);

            // This resolved the issue with computer async card setting (I think??)
            setOpponentSelectedCard(null)
            setSelectedCard({})
            setEndRound(true);
        }

    }, [
        opponents, 
        player, 
        match.params.gameId, 
        opponentSelectedCard, 
        endRound, 
        selectedCard, 
        playerCommit, 
        roundCount, 
        error
    ])

    if(error) return <ErrorModal handleModalClose={handleModalClose} page='game' />

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
                </div>
            </main>
            
            {gameOver 
                ?  (<div className="game-area__game-over-container">
                        <GameOver results={results} />
                    </div>) 
                : null
            }
        </>
    );
};

export default GamePage;