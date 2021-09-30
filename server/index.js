const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const gameRoutes = require("./routes/games");
const menuRoutes = require("./routes/menus");
const cardRoutes = require("./routes/cards");
const tutorialRoutes = require("./routes/tutorials");
const sessionRestoration = require('./middleware/findSession');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Required middleware
app.use(express.json());
app.use(helmet());
app.use(logger("dev"));
app.use(express.static('public'));
app.use(cors());

app.use('/game', sessionRestoration, gameRoutes);
app.use('/menu', menuRoutes);
app.use('/cards', cardRoutes);
app.use('/tutorial', tutorialRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));