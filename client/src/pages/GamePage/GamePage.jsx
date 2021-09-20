import './GamePage.scss';
import MenuBoard from '../../components/MenuBoard/MenuBoard';

const GamePage = () => {
    // Modal popup with a cardflip animation?
    // User can pull up "cards played modal to see the cards on the board"
    return (
        <main className="game-area">
            <MenuBoard />
        </main>
    );
};

export default GamePage;