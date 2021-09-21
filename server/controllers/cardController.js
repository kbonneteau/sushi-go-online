const cardModel = require("../models/cardModel");

let cardController = {
    /**
     * Grabs data related to the card type specified by the client. Returns the card to the user
    */
    getPlayingCards: (_req, res) => {
        const playingCards = cardModel.readCards()
            .map(card => {
                return cardModel.constructPlayingCard(card)
            });

        playingCards 
            ? res.status(200).json(playingCards) 
            : res.status(404).json({ message: "No cards founds"} );
    }


}

module.exports = cardController;