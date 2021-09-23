## Game Logic:

# Game definitions:

turn: one turn consists of a player selecting and committing a card. Each player gets one turn per round.
round: one round consists of all players completing a turn. There are four turns in one round.
game: the encapsulation of all turns and rounds. A game is considered over once all rounds have been completed.

# High-level game steps:

- A new game starts, and all players are dealt 7 cards from the top of the deck.

- At round start, computers can pick the card of their choosing.

- On “play selected card”, the remaining cards in each hand are passed to the next player:

* Player 1 hand goes to Player 2,
* Player 2 hand goes to Player 3,
* Player 3 hand goes to Player 4,
* Player 4 hand goes to Player 1.

- handleChopSticks play somehow???

- On “play selected card”, all player moves are collected and committed.

- Played cards section is updated to reflect which cards were played.

- Game stats are sent to back-end at round end to store the following for each player:

- Cards played

- Cards remaining

# Considerations for multiplayer
- Should this be an async-await operation? End round once all players have played card.
- Should a timer start at the beginning of the round/once the first player has selected a card?
- Once timer has elapsed, select a random card for the player.


# Deck methods:

buildDeck([array of custom cards])

shuffleDeck()

dealCardFromTop()

dealToAllPlayers(deck, [array of player hand objects], max)

Create loop for number of rounds of card deals. Iterate once for each round completed

In each round, Loop through all players

In each loop:  playerHand.push(dealCardFromTop( ))

Return arrayOfPlayerHands

# Player Hand
Each player object should have a hand assigned to them
Should contain:
Active cards
Played cards


## Determine Winner:

calculateScores
- Calculate everything that isn’t dependent on other players’ cards
- calculateBonusPoints
- Compare player played cards for
* Pudding
* Maki 
* Award bonus points to applicable players
- Compare scores (can we use a reduce for this bad boy?)
- Return winner

# Calculate total score:
Where n = number of cards in playedCards

dumpling(n)

tempura(n)

sashimi(n)

nigiri(n)
- Calculate all points for nigiri.
- Call wasabi within this? OR minus the value of of the nigiri found in wasabi from total points

wasabi(n)
- Slice array to remove everything before wasabi?
- First nigiri found, score times 3
- Return { points: x, indexOfNigiri: (this won’t work with slice)/ ogValueOfNigiriFound: x }
- Index of nigiri + index of wasabi === index of nigiri in original array?

chopsticks()

pudding()

maki([array of maki played], allPlayerPlayedHands)
- Count maki for each player
- Add points for applicable player who has highest number (6)
- Add point for player with second highest number (3)
- End of game calculation



## Computer AI:

computerTurn( computerName, computerHand ): How will computer turn be determined?

Dice roll for card number to select in the array.
Play the card for the dice roll made.

Hard: nice to have
Remember hands seen
Evaluate cards played
Evaluate best card
Based on game understanding game logic for calculating score:
Minus totals in 
