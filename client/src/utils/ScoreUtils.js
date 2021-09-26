// const cardsPlayed = [
//     {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'}, 
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: '9e6f0639-684a-4f8e-aeba-2b3fec1fde44', card: 'pudding', subType: 'pudding', image: {}, value: 'Most 6 Least -6'},
//     {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: '91c99c9d-cbdd-4be2-bc60-0b6172e12fe4', card: 'maki', subType: 'maki', numberOfRolls: 2, image: {}, }
// ]

// const cardsPlayed = [
//     {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
//     {id: '9258c02c-aaf9-40a8-a1e1-3c22146f9631', card: 'tempura', subType: 'tempura', image: {}, value: 'x2=5'},
//     {id: 'eff09179-fba1-4f7c-9341-53862ed7b5e6', card: 'nigiri', subType: 'squid', image: {}, value: '3'},
//     {id: '9e6f0639-684a-4f8e-aeba-2b3fec1fde44', card: 'pudding', subType: 'pudding', image: {}, value: 'Most 6 Least -6'},
//     {id: '239bd62a-37e3-4f5d-9c04-a6dbbe7e2e7f', card: 'maki', subType: 'maki', numberOfRolls: 1, image: {}, },
//     {id: '9258c02c-aaf9-40a8-a1e1-3c22146f9631', card: 'tempura', subType: 'tempura', image: {}, value: 'x2=5'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
// ]

// const cardsPlayed = [
//     {id: '0f6753a9-be5e-4814-a755-b6c63a2a8d36', card: 'maki', subType: 'maki', numberOfRolls: 3, image: {}, },
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: 'd8c9152f-dc9b-411c-943d-7d7a9222810e', card: 'sashimi', subType: 'sashimi', image: {}, value: 'x3=10'},
//     {id: 'f679a865-d08c-4752-adf1-6c4863a15ea9', card: 'nigiri', subType: 'egg', image: {}, value: '1'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: 'd8c9152f-dc9b-411c-943d-7d7a9222810e', card: 'sashimi', subType: 'sashimi', image: {}, value: 'x3=10'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'}
// ]

const cardsPlayed = [
    {id: 'eff09179-fba1-4f7c-9341-53862ed7b5e6', card: 'nigiri', subType: 'squid', image: {}, value: '3'},
    {id: 'f679a865-d08c-4752-adf1-6c4863a15ea9', card: 'nigiri', subType: 'egg', image: {}, value: '1'},
    {id: '3891e65a-3be8-49d7-880a-1058bf69b1f3', card: 'nigiri', subType: 'salmon', image: {}, value: '2'},
    {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
    {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
    // {id: '9e6f0639-684a-4f8e-aeba-2b3fec1fde44', card: 'pudding', subType: 'pudding', image: {}, value: 'Most 6 Least -6'},
    {id: '0f6753a9-be5e-4814-a755-b6c63a2a8d36', card: 'maki', subType: 'maki', numberOfRolls: 3, image: {}, },
    {id: 'f679a865-d08c-4752-adf1-6c4863a15ea9', card: 'nigiri', subType: 'egg', image: {}, value: '1'},
    // {id: 'd8c9152f-dc9b-411c-943d-7d7a9222810e', card: 'sashimi', subType: 'sashimi', image: {}, value: 'x3=10'}
]

const player =  {
    playerPosition: 4,
    cardsInHand: [],
    cardsPlayed: cardsPlayed
}


const countNigiri = () => {

}


const countUniqueCards = playedCards => {
    let cardTypes = {};

    playedCards.forEach(card => {
        const { id } = card;
        const maki = 'maki';
        const nigiri = 'nigiri';

        // if( 
        //     id === '239bd62a-37e3-4f5d-9c04-a6dbbe7e2e7f' ||
        //     id === '91c99c9d-cbdd-4be2-bc60-0b6172e12fe4' ||
        //     id === '0f6753a9-be5e-4814-a755-b6c63a2a8d36'
        // ) {
        //     cardTypes[maki] 
        //         ? cardTypes[maki].count ++
        //         : cardTypes = {
        //             ...cardTypes,
        //             [maki]: {
        //                 icon: card.image.icon,
        //                 count: 1
        //             }
        //         };

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

    // return cardTypes;
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
    console.log('dumpling score is', value)
}


/**
 * Calculates the total value of all tempura cards played.
 * Value designation is 2 cards = 5 points
 * 
 * @param {object} card containing the total number of tempura cards
 * @returns {*} calculated value
 */
const tempura = (card) => {
    let value = 0;
    const totalPairs = parseInt(card.count / 2);
    if(totalPairs < 1) {
        return console.log('tempura score is', value);
        // return value;
    }
    value = totalPairs * 5;

    console.log('tempura score is', value)
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
    let value = parseInt(card.count / 3) * 10;
    console.log('sashimi score is', value)
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
    let value = Number(card.value) * card.count;
    // console.log(card)
    console.log('nigiri score is', value)
}

/**
 * Calculates the adjusted point values for wasabi played
 * Value of wasabi = 0, but multiplies the next wasabi played by 3
 * 
 * @param {object} player 
 * @param {object} card 
 */
const wasabi = (player, card) => {
    let totalValue = 0;
    let valueToDeduct = 0;
    const nigiri = player.cardsPlayed.filter(card => card.card === 'nigiri');
    for(let i = 0; i < card.count; i++) {
        totalValue += (Number(nigiri[i].value) * 3)
        valueToDeduct += Number(nigiri[i].value)
    }
    totalValue -= valueToDeduct;
    console.log('wasabi score is', totalValue)
}

const chopsticks = () => {
    value = 0;
    console.log('chopsticks score is', value)
}

const maki = () => {
    console.log('hello from maki!')
}

const pudding = () => {
    console.log('hello from pudding!')
}



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
            return maki;
        case 'pudding':
            return pudding;
        default:
            return console.log;
    }
}


const calculateScore = (player) => {
    console.log('calculate score :: player', player.playerPosition)
    const countedCardsOfEachType = countUniqueCards(player.cardsPlayed)
    // console.log(countedCardsOfEachType)
    let score;

    countedCardsOfEachType.forEach(cardTypeCounted => {
        const calculator = determineCalculatorFunction(cardTypeCounted.card)
        // console.log(cardTypeCounted)
        if(cardTypeCounted.card === 'wasabi') {
            calculator(player, cardTypeCounted)
        }
        // calculator(cardTypeCounted);
    });

    // for(const cardType in countedCardsOfEachType) {
    //     console.log(cardType)
    // }
};

const calculateBonusPoints = (player) => {

};

calculateScore(player);



/*

Calculate total score:
Where n = number of cards in playedCards


Calculate all points for nigiri.
Call wasabi within this? OR minus the value of of the nigiri found in wasabi from total points
wasabi(n)

Slice array to remove everything before wasabi?
First nigiri found, score times 3
Return { points: x, indexOfNigiri: (this won’t work with slice)/ ogValueOfNigiriFound: x }
Index of nigiri + index of wasabi === index of nigiri in original array?
chopsticks()

pudding()

maki([array of maki played], allPlayerPlayedHands)

Count maki for each player
Add points for applicable player who has highest number (6)
Add point for player with second highest number (3)
End of game calculation

*/