const fs = require('fs');
const Deck = require('card-deck');
const cardData = '../data/cards.json';
// const cardData = './data/cards.json';
const { v4: uuid } = require('uuid');

/**
 * Read all cards in persistent storage.
 * @returns {array} of data in storage.
 */
const readCards = () => JSON.parse(fs.readFileSync(cardData));

const constructPlayingCard = cardData => {
    return {
        id: cardData.id,
        card: cardData.card,
        subType: cardData.subType,
        numberOfRolls: cardData.numberOfRolls,
        image: {
            icon: cardData.image.icon,
            main: cardData.image.main
        },
        value: cardData.value
    }
};


/**
 * Constructs an array of all playing cards, with all details required by the game already added to the cards
 * @returns {array} of all playing cards
 */
 const constructArrayOfCards = () => {
    console.log('start :: constructArrayOfCards')
    const cards = [];
    readCards().forEach(cardType => {
        const numberOfCards = cardType.numberInDeck;
        [...Array(numberOfCards)].forEach(_card => cards.push(constructPlayingCard(cardType)));
    })
    console.log('There are this many cards in the array:', cards.length)
    return cards;
}


module.exports = {
    readCards,
    constructPlayingCard,
    constructArrayOfCards
}