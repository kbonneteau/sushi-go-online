const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const gameRoutes = require("./routes/games");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Required middleware
app.use(express.json());
app.use(helmet());
app.use(logger("dev"));
app.use(cors());

app.use('/game', gameRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));