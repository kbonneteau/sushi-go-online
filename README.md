# Sushi Go! Online

Sushi Go! Online is a digital recreation of the classic pick-and-pass tabletop board game. Sushi Go! Online is for anyone who loves the original game, or simply just likes sushi!

This was created as my capstone project for BrainStation: we were tasked to create a full-stack application in two weeks. This was the result of two weeks of planning, designing, executing, and **solving a whole bunch of mini white boarding challenges.**

![Alt text](server/public/images/screenshot.png?raw=true "Sushi Go Online")

## Rules of the Game

Sushi Go is a classic pick-and-pass game, in which:
- Multiple cards are dealt to players (this implementation deals 7 cards to players)
- Players will select a card from their hand, and pass the remaining cards to another player near them.
- Some cards have a higher value than other cards
- All players flip their selected card at the same time.

This continues until no cards remain.  All points are tallied at the end of the game. 

The player with the highest score at the end of the game wins.

Traditionally, the game consists of three rounds, however this implementation counts one round as the full game.  



## Tech Stack

- **React:** bootstrapped with create-react-app
- **Sass**
- **Node**
- **Express**
- **JWT Tokens** used concurrently with client-side persisting user sessions and fetching data from server-side

  
## Installation

If you want to play locally, follow these steps!


1. Clone or download this repo

2. Install required node_modules in both client and server folders.

### Server-Side

Install server-side dependencies

```bash
  cd server
  npm install
```

3. Set up environment variables in .env file to desired details.

```bash
    PORT=<PORT_NUMER>
    JWT_SECRET=<SECRET KEY>
```

4. Start the server

```bash
    npm start
```

### Client-Side

5. Install client dependencies

```bash
  cd ../client
  npm install
```

6. Start up the React application

```bash
    npm start
```

7. Start a new game!
## Acknowledgements

- Thank you to the amazing educators at BrainStation for all the insight and help received along the way.

_The game is a recreation of the original tabletop game.  All game-related information, card image assets, rules and overall concept belong to the original creators._