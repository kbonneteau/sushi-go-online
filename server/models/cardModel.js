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


module.exports = {
    readCards,
    constructPlayingCard
}