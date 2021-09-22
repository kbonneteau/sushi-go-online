const Deck = require('card-deck');
const cardData = '../data/cards.json';
const cardModel = require('../models/cardModel');
// const cardData = './data/cards.json';

// console.log(cardModel.readCards())
console.log("Starting logic file")


/**
 * Constructs an array of all playing cards, with all details required by the game already added to the cards
 * @returns {array} of all playing cards
 */
const constructArrayOfCards = () => {
    console.log('start :: constructArrayOfCards')
    const cards = [];
    cardModel.readCards().forEach(cardType => {
        const numberOfCards = cardType.numberInDeck;
        [...Array(numberOfCards)].forEach(_card => cards.push(cardModel.constructPlayingCard(cardType)));
    })
    console.log('There are this many cards in the array:', cards.length)
    return cards;
}



const constructDeck = () => {
    console.log('start :: constructDeck')
    return new Deck(constructArrayOfCards());
}

const deck = constructDeck()

console.log(deck)