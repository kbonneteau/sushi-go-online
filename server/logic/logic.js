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


const dealCardsToPlayers = (deck, players, maxCards) => {
    console.log('start :: dealing cards to players')
    deck.shuffle();
    for(let i = 0; i < maxCards; i++) {
        players.forEach(player => {
            player.cardsInHand.push(deck.draw())
        })
    }
    return players;
}





console.log(dealCardsToPlayers(deck, constructPlayers(), 7)[0]);