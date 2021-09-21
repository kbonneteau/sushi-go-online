import './GamePage.scss';
import MenuBoard from '../../components/MenuBoard/MenuBoard';
import PlayerGameArea from '../../components/PlayerGameArea/PlayerGameArea';
import OpponentPlayingArea from '../../components/OpponentPlayingArea/OpponentPlayingArea';

// Should this component be stateful?
const GamePage = () => {
    // Modal popup with a cardflip animation?
    // User can pull up "cards played modal to see the cards on the board"
    return (
        <main className="game-area">
            <div className="game-area__game-component-container">
                <MenuBoard />
                <OpponentPlayingArea />
            </div>
            {/* Pass current hands to this component, and pass player hand to player game area component? */}
            <PlayerGameArea />
        </main>
    );
};

export default GamePage;