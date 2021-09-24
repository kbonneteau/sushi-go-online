import { DiceRoll } from 'rpg-dice-roller';




export const findPlayer = arrayOfPlayers => arrayOfPlayers.find(player => player.playerPosition === 1);

export const findOpponents = arrayOfPlayers => arrayOfPlayers.filter(player => player.playerPosition !== 1);



/**
 * Dice roll is used to select a card from the computer's hand
 * @param {number} computerName indicating the computer player position
 * @param {array} array of card objects currently in the computer's hand
 */
export const computerTurn = (computerHand) => {
    const maxNumberOfSides = computerHand.length;
    const selectedCard = new DiceRoll(`1d${maxNumberOfSides}`);
    return computerHand[selectedCard.total - 1];
}


export const setPlayedCards = (player, opponents, playerCommittedCard, opponentCommittedCards) => {
    player.cardsPlayed = [...player.cardsPlayed, playerCommittedCard];
    const allPlayers = [player];
    // Loop through each opponent and find the played card associated with them. 
    // Update their hand, and push to the allPlayers array.
    opponents.forEach(opponent => {
        const playedCard = opponentCommittedCards.find(opponentCard => opponentCard.playerPosition === opponent.playerPosition);
        opponent.cardsPlayed = [...opponent.cardsPlayed, playedCard.selectedCard];
        allPlayers.push(opponent);
    })

    return allPlayers;
}

/**
 * Each computer takes a turn and commits a card from their hand.
 * @param {array} arrayOfComputers contains a list of computer objects with the current cards in their hands.
 * @return {array} of computers with a specific card selected
 */
export const allComputersCommitCards = arrayOfComputers => {
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


export const countCards = opponentCards => {
    // console.log('count cards :: game logic')
    console.log(opponentCards)
    let cardTypes = {};
    opponentCards.forEach(card => {
        const { id } = card;
        console.log(id)
        if(id in cardTypes) {
            cardTypes[id].count++ 
        } else {
            cardTypes = {
                ...cardTypes,
                [id]: {
                    icon: card.image.icon,
                    count: 1
                }
            }
        }
    })

    return Object.values(cardTypes);
    console.log('cardtypes',Object.values(cardTypes))

    // I need to track the unique id present for each card.
    // I need to iterate the count for each unique id.
    // I need to return an array of objects for each unique ID
    // OR can I just do a for.. in loop on opponent cards modal
    // opponent.playedCards.filter
}