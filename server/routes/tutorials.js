const router = require("express").Router();
const fs = require("fs");
const tutorialData = './data/tutorials.json';
// const Controller = require('../controllers/gameController');

// add filter middleware before game controller to sanitize harmful characters?
router.get("/", (req, res) => {
    const readTips = () => JSON.parse(fs.readFileSync(tutorialData));
    res.status(200).json(readTips())
})

module.exports = router;