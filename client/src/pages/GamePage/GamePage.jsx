import './GamePage.scss';
import MenuBoard from '../../components/MenuBoard/MenuBoard';
import PlayerGameArea from '../../components/PlayerGameArea/PlayerGameArea';
import PlayedCards from '../../components/PlayedCards/PlayedCards';
// import SelectCard from '../../components/SelectCard/SelectCard';

// Should this component be stateful?
const GamePage = () => {
    // Modal popup with a cardflip animation?
    // User can pull up "cards played modal to see the cards on the board"
    
    // On component mount, make axios call for game data.
    // New game will load fresh game session
    // resume game will load previous data.
    return (
        <main className="game-area">
            <div className="game-area__game-component-container">
                <div className="game-area__menu-container">
                    <h1 className="game-area__title">Menu</h1>
                    <MenuBoard />
                </div>
                <PlayedCards />
            </div>
            {/* Pass current hands to this component, and pass player hand to player game area component? */}
            <div className="game-area__player-interaction-container">
                <PlayerGameArea />
                {/* <SelectCard /> */}
            </div> 
        </main>
    );
};

export default GamePage;