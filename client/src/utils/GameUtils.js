/*
    On page load & turn start:
        - player 2
        - player 3
        - player 4
    will all make decisions about which card in their hand that they play.

    Each player will commit their decision in state.

    These commits will stay in state
*/

import { DiceRoll } from 'rpg-dice-roller';


const GameLogic = {
    initializeRound: computerCardCommit => computerCardCommit ? false : true,

    /**
     * 
     * @param {number} computerName indicating the computer player position
     * @param {array} computerHand array of card objects currently in the computer's hand
     */
    computerTurn: (computerHand) => {
        const maxNumberOfSides = computerHand.length;
        const selectedCard = new DiceRoll(`1d${maxNumberOfSides}`);
        
        return selectedCard.total - 1;
    },

    allComputersCommitCards: (arrayOfComputers) => {
        let committedCards = {};
        arrayOfComputers.forEach(computer => {
            const { playerPosition } = computer;
            return committedCards = {
                ...committedCards,
                playerPosition,
                selectedCard: computerTurn(computer.cardsInHands)
            }
        });
    
        return committedCards;
    }

}


export default GameLogic;