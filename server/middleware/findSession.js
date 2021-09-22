const jwt = require('jsonwebtoken');
require("dotenv").config();

const findSession = (req, res, next) => {
    if(!req.headers.authorization) return next();

    const authToken = req.headers.authorization.split(" ")[1];
    jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(401).json({ message: "Error with token. Please start a new game." });

        req.decoded = decoded.game;
        next();
    });
}

module.exports = findSession;