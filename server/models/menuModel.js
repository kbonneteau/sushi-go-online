const fs = require('fs');
const menuData = './data/menus.json';

/**
 * Read all games in persistent storage.
 * @returns {array} of data in storage.
 */
const readMenus = () => JSON.parse(fs.readFileSync(menuData));


module.exports = {
    readMenus
}