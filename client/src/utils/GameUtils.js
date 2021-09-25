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
    player = removePlayedCardsFromHands(player, playerCommittedCard);
    player.cardsPlayed = [...player.cardsPlayed, playerCommittedCard];
    const allPlayers = [player];
    console.log('setPlayedCards :: ',player)
    // Loop through each opponent and find the played card associated with them. 
    // Update their hand, and push to the allPlayers array.
    opponents.forEach(opponent => {
        const playedCard = opponentCommittedCards.find(opponentCard => opponentCard.playerPosition === opponent.playerPosition);
        // console.log('opponent selected card', playedCard)
        opponent = removePlayedCardsFromHands(opponent, playedCard.selectedCard);
        opponent.cardsPlayed = [...opponent.cardsPlayed, playedCard.selectedCard];
        console.log('setPlayedCards :: ',opponent)
        allPlayers.push(opponent);
    })
    console.log("All players", allPlayers)
    return allPlayers;
}

export const removePlayedCardsFromHands = (player, playedCard ) => {
    console.log('Player:', player.playerPosition)
    // console.log('Hand before:', player)
    const foundIndex = player.cardsInHand.findIndex(card => {
        // console.log('find index', playedCard.id, '===', card.id)
        // if(card.id !== playedCard.id) {
        //     console.error("no matching index")
        // }
        return card.id === playedCard.id
    });
    console.log('found index', foundIndex)
    const filteredHand = player.cardsInHand.filter((_card, i) => i !== foundIndex)
    // console.log('Hand after:', player)
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


export const countCards = opponentCards => {
    // console.log('count cards :: game logic')
    // console.log(opponentCards)
    let cardTypes = {};
    opponentCards.forEach(card => {
        const { id } = card;
        const maki = 'maki'
        // console.log(id)

        // If it's a maki, show the count of maki cards, not the number of maki they have
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
    // console.log('cardtypes',Object.values(cardTypes))

    // I need to track the unique id present for each card.
    // I need to iterate the count for each unique id.
    // I need to return an array of objects for each unique ID
    // OR can I just do a for.. in loop on opponent cards modal
    // opponent.playedCards.filter
}