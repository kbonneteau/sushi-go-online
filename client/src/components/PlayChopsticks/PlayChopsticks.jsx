import './PlayChopsticks.scss';
import SelectCard from '../SelectCard/SelectCard';

const PlayChopsticks = ({ handlePlayChopsticks, handleCardCommit }) => {
    return (
        <>
            {/* <SelectCard handleCardCommit={handleCardCommit} /> */}
            <button onClick={() => console.log('clicked!')} className="play-chopsticks">
                Play Chopsticks
            </button>
        </>
    );
};

export default PlayChopsticks;