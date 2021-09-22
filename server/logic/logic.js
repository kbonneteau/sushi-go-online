const Deck = require('card-deck');
const cardData = '../data/cards.json';
const cardModel = require('../models/cardModel');
// const cardData = './data/cards.json';

// console.log(cardModel.readCards())
console.log("Starting logic file")




const constructDeck = () => {
    console.log('start :: constructDeck')
    return new Deck(cardModel.constructArrayOfCards());
}

const deck = constructDeck()

deck.shuffle()

console.log('drawing new card')
let newCard = deck.draw();
console.log(newCard);
console.log(`there are ${deck.remaining()} cards remaining`)

console.log('drawing new card')
newCard = deck.draw();
console.log(newCard);
console.log(`there are ${deck.remaining()} cards remaining`)

console.log('drawing new card')
newCard = deck.draw();
console.log(newCard);
console.log(`there are ${deck.remaining()} cards remaining`)

// console.log(deck)