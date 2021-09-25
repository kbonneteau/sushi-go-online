import { DiceRoll } from 'rpg-dice-roller';


/**
 * Finds all computer opponents (any player that is not player 1)
 * @param {array} arrayOfPlayers all players in the game
 * @returns {object} containing the player object
 */
export const findPlayer = arrayOfPlayers => arrayOfPlayers.find(player => player.playerPosition === 1);

/**
 * Finds all computer opponents (any player that is not player 1)
 * @param {array} arrayOfPlayers all players in the game
 * @returns {array} of objects containing all opponents
 */
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

/**
 * Updates the all players in the game to reflect:
 *  - the cards each player has played
 *  - the remaining cards in their hands.
 * 
 * @param {object} player the main player in the game
 * @param {array} opponents all opponents the player is facing
 * @param {object} playerCommittedCard the card selected by the player
 * @param {array} opponentCommittedCards objects containing the opponent played cards & the corresponding opponent
 * @returns {array} of all players and their updates hands + played cards
 */
export const setPlayedCards = (player, opponents, playerCommittedCard, opponentCommittedCards) => {
    player = removePlayedCardsFromHands(player, playerCommittedCard);
    player.cardsPlayed = [...player.cardsPlayed, playerCommittedCard];
    const allPlayers = [player];
    // Loop through each opponent and find the played card associated with them. 
    // Update their hand, and push to the allPlayers array.
    opponents.forEach(opponent => {
        const playedCard = opponentCommittedCards.find(opponentCard => opponentCard.playerPosition === opponent.playerPosition);
        opponent = removePlayedCardsFromHands(opponent, playedCard.selectedCard);
        opponent.cardsPlayed = [...opponent.cardsPlayed, playedCard.selectedCard];
        allPlayers.push(opponent);
    })
    console.log("All players", allPlayers)
    return allPlayers;
}

/**
 * Finds and removes the card played by the user from their active hand.
 * @param {object} player one of the players on the board
 * @param {object} playedCard the card played by the user during a round
 * @returns {object} player containing all the previous attributes, plus the played card removed from their current hand.
 */
export const removePlayedCardsFromHands = (player, playedCard ) => {
    const foundIndex = player.cardsInHand.findIndex(card => card.id === playedCard.id);
    // console.log('Player:', player.playerPosition)
    // console.log('found index', foundIndex)
    const filteredHand = player.cardsInHand.filter((_card, i) => i !== foundIndex)
    return {
        ...player,
        cardsInHand: filteredHand
    };
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

/**
 * Takes in an array of opponent cards played.  Loops through the array of cards to count all the matching types.
 * A tracking object is used to keep count of the card types, and is converted to an array for the front-end to map through.
 * @param {array} opponentCards array of opponent's played cards
 * @returns {array} of objects containing the cart icon and card count.
 */
export const countCards = opponentCards => {
    let cardTypes = {};
    opponentCards.forEach(card => {
        const { id } = card;
        const maki = 'maki'

        // If it's a maki, show the total count of all maki cards, not the number of each different maki card (i.e. x3 maki)
        if( 
            id === '239bd62a-37e3-4f5d-9c04-a6dbbe7e2e7f' ||
            id === '91c99c9d-cbdd-4be2-bc60-0b6172e12fe4' ||
            id === '0f6753a9-be5e-4814-a755-b6c63a2a8d36'
        ) {
            cardTypes[maki] 
                ? cardTypes[maki].count ++
                : cardTypes = {
                    ...cardTypes,
                    [maki]: {
                        icon: card.image.icon,
                        count: 1
                    }
                };
        } else if(id in cardTypes) {
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
}