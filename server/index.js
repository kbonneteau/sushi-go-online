const express = require("express");
const session = require("express-session");
const cors = require("cors");
const helmet = require("helmet");
const logger = require("morgan");
const gameRoutes = require("./routes/games");
const menuRoutes = require("./routes/menus");
const cardRoutes = require("./routes/cards");
const sessionRestoration = require('./middleware/findSession');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;


// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
// const corsOptions = {
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
// }

// Required middleware
app.use(express.json());
app.use(helmet());
app.use(logger("dev"));
app.use(express.static('public'));
// app.use(cors(corsOptions));
app.use(cors());

app.use('/game', sessionRestoration, gameRoutes);
app.use('/menu', menuRoutes);
app.use('/cards', cardRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));