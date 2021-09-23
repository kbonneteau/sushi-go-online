const Deck = require('card-deck');
const cardData = '../data/cards.json';
const cardModel = require('../models/cardModel');
// const cardData = './data/cards.json';

// console.log(cardModel.readCards())
console.log("Starting logic file")

let players = [
    {
        "playerPosition": 1,
        "cardsInHand": [],
        "cardsPlayed": []
    },
    {
        "playerPosition": 2,
        "cardsInHand": [],
        "cardsPlayed": []
    },
    {
        "playerPosition": 3,
        "cardsInHand": [],
        "cardsPlayed": []
    },
    {
        "playerPosition": 4,
        "cardsInHand": [],
        "cardsPlayed": []
    }
]


const constructDeck = () => {
    console.log('start :: constructDeck')
    return new Deck(cardModel.constructArrayOfCards());
}



const deck = constructDeck()

const dealCardsToPlayers = (deck, players, maxCards) => {
    // Shuffle the deck
    deck.shuffle();

    for(let i = 0; i < maxCards; i++) {

        players.forEach(player => {
            player.cardsInHand.push(deck.draw())
        })
    }

    console.log(`Player ${players[0].playerPosition} has the following cards`, players[0].cardsInHand);
    console.log(`Player ${players[1].playerPosition} has the following cards`, players[1].cardsInHand);
    console.log(`Player ${players[2].playerPosition} has the following cards`, players[2].cardsInHand);
    console.log(`Player ${players[3].playerPosition} has the following cards`, players[3].cardsInHand);
}





dealCardsToPlayers(deck, players, 7);