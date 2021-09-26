const cardsPlayed = [
    {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'}, 
    {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
    {id: '9e6f0639-684a-4f8e-aeba-2b3fec1fde44', card: 'pudding', subType: 'pudding', image: {}, value: 'Most 6 Least -6'},
    {id: '96a3d5ae-fbc2-4591-a879-0557a83d69cf', card: 'wasabi', subType: 'wasabi', image: {}, value: 'Next nigiri x3'},
    {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
    {id: 'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', card: 'dumpling', subType: 'dumpling', image: {}, value: '1 3 6 10 15'},
    {id: '91c99c9d-cbdd-4be2-bc60-0b6172e12fe4', card: 'maki', subType: 'maki', numberOfRolls: 2, image: {}, }
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

    return Object.values(cardTypes);
}

const dumpling = () => {

}

const calculateScore = (player) => {
    console.log('calculate score :: player', player.playerPosition)
    const countedCardsOfEachType = countUniqueCards(player.cardsPlayed)
    console.log(countedCardsOfEachType)
};

const calculateBonusPoints = (player) => {

};

calculateScore(player);






/*

Calculate total score:
Where n = number of cards in playedCards

dumpling(n)

tempura(n)

sashimi(n)

nigiri(n)

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