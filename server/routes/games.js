const router = require("express").Router();
const gameController = require('../controllers/gameController');

router.route("/") 
    .get((req, res) => {
    res.send("Hello from /game/ route");
})

module.exports = router;