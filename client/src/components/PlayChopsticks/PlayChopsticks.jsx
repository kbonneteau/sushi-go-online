import './PlayChopsticks.scss';

const PlayChopsticks = ({ handlePlayChopsticks }) => {
    return (
        <button onClick={handlePlayChopsticks} className="play-chopsticks">
            Play Chopsticks
        </button>
    );
};

export default PlayChopsticks;