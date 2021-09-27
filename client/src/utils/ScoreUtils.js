/**
 * Takes in an array of played cards. Groups and counts the like-cards, and returns an array of grouped cards with counts.
 * @param {array} playedCards 
 * @returns {array} of grouped cards and their values.
 */
const countUniqueCards = playedCards => {
    let cardTypes = {};

    playedCards.forEach(card => {
        const { id } = card;

        if(id in cardTypes) {
            cardTypes[id].count++ 
        } else {
            cardTypes = {
                ...cardTypes,
                [id]: {
                    ...card,
                    count: 1
                }
            }
        }
    })
    return Object.values(cardTypes);
}


/**
 * Calculates the total value of all dumpling cards played.
 * Value designation is [1, 3, 6, 10, 15]
 * Pattern is previous value + the current card number in the total number of cards
 * 
 * @param {object} card containing the total number of dumpling cards
 * @return {*} calculated value
 */
const dumpling = (card) => {
    let value = 0;
    for(let i = 1; i <= card.count; i++){
        value += i;
        if(value === 15) break;
    };
    return value;
}


/**
 * Calculates the total value of all tempura cards played.
 * Value designation is 2 cards = 5 points
 * 
 * @param {object} card containing the total number of tempura cards
 * @returns {*} calculated value
 */
const tempura = (card) => {
    const totalPairs = parseInt(card.count / 2);
    return totalPairs * 5;
}

/**
 * Calculates the total value of all sashimi cards played.
 * Value designation is 3 cards = 10 points
 * As there are only 5 sashimi cards in the deck, the highest possible score is 10
 * 
 * @param {object} card containing the total number of sashimi cards
 * @returns {*} calculated value
 */
const sashimi = (card) => {
    return parseInt(card.count / 3) * 10;
}

/**
 * Calculates the total value of the nigiri cards played.
 * Values are:
 *  - squid = 3 points
 *  - salmon = 2 points
 *  - egg = 1 points
 * 
 * @param {object} card containing the total number of sashimi cards
 * @returns {*} calculated value
 */
const nigiri = (card) => {
    return Number(card.value) * card.count;
}

/**
 * Calculates the adjusted point values for wasabi played
 * Value of wasabi = 0, but multiplies the next wasabi played by 3
 * 
 * Deduct by value of nigiri as nigiri scores will be added regardless of wasabi play
 * 
 * @param {object} player 
 * @param {object} card 
 */
const wasabi = (player, card) => {
    let totalValue = 0;
    let valueToDeduct = 0;
    const nigiri = player.cardsPlayed.filter(card => card.card === 'nigiri');
    for(let i = 0; i < card.count; i++) {
        if(nigiri[i] === undefined) break;
        totalValue += (Number(nigiri[i].value) * 3)
        valueToDeduct += Number(nigiri[i].value)
    }
    totalValue -= valueToDeduct;
    return totalValue;
}

/** CHOPSTICKS FUNCTIONALITY NOT IMPLEMENTED. PLAYERS GET AUTO-ZERO
 * If a player ends up with chopsticks in their final playedCards, they earn 0 points for the card.
 * 
 */
const chopsticks = () => {
    return 0;
}

/**
 * Calculates the number of rolls based on how many maki were on the card.
 * No score awarded for maki yet
 * @param {object} card 
 * @returns 
 */
const countMaki = (card) => {
    const rollCount = card.count * card.numberOfRolls;
    return rollCount;
}

/**
 * Returns count of pudding.
 * No score awarded for pudding yet
 * @param {object} card 
 * @returns 
 */
const countPudding = (card) => {
    return card.count;
}


/**
 * Takes in a string containing the name of the card type and returns a function to use;
 * @param {string} cardType 
 * @returns {function} a calculater function based on card type
 */
const determineCalculatorFunction = cardType => {
    switch(cardType) {
        case 'dumpling':
            return dumpling;
        case 'tempura':
            return tempura;
        case 'sashimi':
            return sashimi;
        case 'nigiri':
            return nigiri;
        case 'wasabi':
            return wasabi;
        case 'chopsticks':
            return chopsticks;
        case 'maki':
            return countMaki;
        case 'pudding':
            return countPudding;
        default:
            break;
    }
}

/**
 * Calculates a player's score, and number of maki & pudding played.
 * @param {object} player 
 * @returns {object} player with score, makiCount and puddingCount
 */
export const calculateScore = (player) => {
    console.log('calculate score :: player', player.playerPosition)
    const countedCardsOfEachType = countUniqueCards(player.cardsPlayed)
    // Tracking variables
    let score = 0;
    let makiCards = 0;
    let puddingCards = 0;

    countedCardsOfEachType.forEach(cardTypeCounted => {
        const calculator = determineCalculatorFunction(cardTypeCounted.card)
        if(cardTypeCounted.card === 'wasabi') {
            return score += calculator(player, cardTypeCounted);
        }
        if(cardTypeCounted.card === 'maki'){
            return makiCards += calculator(cardTypeCounted);
        }
        if(cardTypeCounted.card === 'pudding'){
            return puddingCards += calculator(cardTypeCounted);
        }
        score += calculator(cardTypeCounted);
    });
    return {
        ...player,
        score: score,
        makiCount: makiCards,
        puddingCount: puddingCards
    }
};


/**
 * Finds the highest and lowest overall counts for the specified properties between all players.
 * 
 * @param {array} players 
 * @param {string} propertyName containing the name of the property to check
 * @returns {object} with the highest number and lowest number
 */
const compareCounts = (players, propertyName) => {
    let highestNumber = 0;
    let lowestNumber = players[0][propertyName];
    players.forEach(player => {

        if(player[propertyName] > highestNumber){
            highestNumber = player[propertyName]
        }
        if (player[propertyName] < lowestNumber){
            lowestNumber = player[propertyName]
        }
    })

    return { highestNumber, lowestNumber }
}

/**
 * Finds the first and second highest overall counts of maki between all players.
 * 
 * @param {array} players 
 * @returns {object} with the highest and second highest maki counts
 */
const makiCounts = (players) => {
    let highestNumber = 0;
    let secondHighestNumber = players[0].makiCount;
    players.forEach(player => {

        if(player.makiCount > highestNumber){
            return highestNumber = player.makiCount
        }
        // If it's not the highest number, is it the second highest number?
        if (player.makiCount > secondHighestNumber){
            secondHighestNumber = player.makiCount
        }
    })

    return { highestNumber, secondHighestNumber }
}

/**
 * Calculates any bonus points (or point loss) for players and increments/decrements their score
 * 
 * @param {array} players array of players
 * @param {object} puddingResults containing highest and lowest pudding count numbers
 * @param {object} makiResults containing first & second place numbers
 * @returns {array} of updated players
 */
const awardBonusPoints = (players, puddingResults, makiResults) => {
    players.forEach(player => {
        console.log(`player ${player.playerPosition} score before`, player.score)
        if(player.puddingCount === puddingResults.highestNumber) {
            console.log('player pudding is highest')
            player.score += 3;
        }
        if(player.puddingCount === puddingResults.lowestNumber) {
            console.log('player pudding is lowest')
            player.score -= 3;
        }
        if(player.makiCount === makiResults.highestNumber) {
            console.log('player maki is highest')
            player.score += 6;
        }
        if(player.makiCount === makiResults.secondHighestNumber) {
            console.log('player maki is second highest')
            player.score += 3;
        }
        console.log(`player ${player.playerPosition} score after`, player.score)
    })
    return players;
}

/**
 * Takes a look at all players and awards them bonus points based on the cards they played throughout the game.
 * 
 * @param {array} players 
 * @returns {array} of players with bonus points awarded to their overall scores
 */
export const calculateBonusPoints = (players) => {
    const puddingResults = compareCounts(players, 'puddingCount');
    const makiResults = makiCounts(players);

    return awardBonusPoints(players, puddingResults, makiResults);
};