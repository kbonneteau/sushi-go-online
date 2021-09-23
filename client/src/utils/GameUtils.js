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


const roundLogic = {
    initializeRound: computerCardCommit => computerCardCommit ? false : true,
}


/**
 * Dice roll is used to select a card from the computer's hand
 * @param {number} computerName indicating the computer player position
 * @param {array} array of card objects currently in the computer's hand
 */
 const computerTurn = (computerHand) => {
    const maxNumberOfSides = computerHand.length;
    const selectedCard = new DiceRoll(`1d${maxNumberOfSides}`);
    return computerHand[selectedCard.total - 1];
},


/**
 * Each computer takes a turn and commits a card from their hand.
 * @param {array} arrayOfComputers contains a list of computer objects with the current cards in their hands.
 * @return {array} of computers with a specific card selected
 */
allComputersCommitCards = arrayOfComputers => {
    let committedCards = [];
    arrayOfComputers.forEach(computer => {
        const { playerPosition } = computer;
        return committedCards.push({
            playerPosition,
            selectedCard: computerTurn(computer.cardsInHand)
        })
    });

    return committedCards;
}


export default allComputersCommitCards;