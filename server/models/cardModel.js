const fs = require('fs');
const cardData = './data/cards.json';

/**
 * Read all cards in persistent storage.
 * @returns {array} of data in storage.
 */
const readCards = () => JSON.parse(fs.readFileSync(cardData));


module.exports = {
    readCards
}