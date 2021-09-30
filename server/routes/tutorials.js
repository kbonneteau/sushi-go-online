const router = require("express").Router();
const fs = require("fs");
const tutorialData = './data/tutorials.json';

router.get("/", (req, res) => {
    const readTips = () => JSON.parse(fs.readFileSync(tutorialData));
    res.status(200).json(readTips())
})

module.exports = router;