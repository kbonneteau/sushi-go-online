const menuModel = require("../models/menuModel");

let menuController = {
    /**
     * Grabs data related to the menu type specified by the client. Returns the menu to the user
    */
    getSingleMenu: (req, res) => {
        const menu = menuModel.readMenus().find(menu => menu.menuType === req.params.menuType);
        menu ? res.status(200).json(menu) : res.status(404).json({ error: "Unable to find a menu with the provided name." });
    }
}

module.exports = menuController;