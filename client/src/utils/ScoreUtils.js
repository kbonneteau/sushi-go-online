// const cardsPlayed = [
//     {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'}, 
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: '9e6f0639-684a-4f8e-aeba-2b3fec1fde44', card: 'pudding', subType: 'pudding', image: {}, value: 'Most 6 Least -6'},
//     {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
//     {id: '91c99c9d-cbdd-4be2-bc60-0b6172e12fe4', card: 'maki', subType: 'maki', numberOfRolls: 2, image: {}, }
// ]

const cardsPlayed = [
    {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
    {id: '9258c02c-aaf9-40a8-a1e1-3c22146f9631', card: 'tempura', subType: 'tempura', image: {}, value: 'x2=5'},
    {id: 'eff09179-fba1-4f7c-9341-53862ed7b5e6', card: 'nigiri', subType: 'squid', image: {}, value: '3'},
    {id: '9e6f0639-684a-4f8e-aeba-2b3fec1fde44', card: 'pudding', subType: 'pudding', image: {}, value: 'Most 6 Least -6'},
    {id: '239bd62a-37e3-4f5d-9c04-a6dbbe7e2e7f', card: 'maki', subType: 'maki', numberOfRolls: 1, image: {}, },
    {id: '9258c02c-aaf9-40a8-a1e1-3c22146f9631', card: 'tempura', subType: 'tempura', image: {}, value: 'x2=5'},
    {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
]

const player =  {
    playerPosition: 4,
    cardsInHand: [],
    cardsPlayed: cardsPlayed
}


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

    // return cardTypes;
    return Object.values(cardTypes);
}


/**
 * Calculates the total value of all dumpling cards played.
 * Value designation is [1, 3, 6, 10, 15]
 * Pattern is previous value + the current card number in the total number of cards
 * 
 * @param {number} cardCount number of dumpling cards
 * @return {*} calculated value
 */
const dumpling = (cardCount) => {
    let value = 0;
    for(let i = 1; i <= cardCount; i++){
        value += i;
        if(value === 15) break;
    };
    console.log('dumpling score is', value)
}


/**
 * Calculates the total value of all tempura cards played.
 * Value designation is 2 cards = 5 points
 * 
 * @param {number} cardCount number of tempura cards
 * @returns {*} calculated value
 */
const tempura = (cardCount) => {
    let value = 0;
    const totalPairs = parseInt(cardCount / 2);
    if(totalPairs < 1) {
        return console.log('tempura score is', value);
        // return value;
    }
    value = totalPairs * 5;

    console.log('tempura score is', value)
}

const sashimi = () => {
    console.log('hello from sashimi!')
}

const nigiri = () => {
    console.log('hello from nigiri!')
}

const wasabi = () => {
    console.log('hello from wasabi!')
}

const chopsticks = () => {
    console.log('hello from chopsticks!')
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
        calculator(cardTypeCounted.count);
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