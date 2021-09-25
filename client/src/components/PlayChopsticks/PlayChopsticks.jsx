import './PlayChopsticks.scss';

const PlayChopsticks = ({ handlePlayChopsticks }) => {
    return (
        <button onClick={() => console.log('clicked!')} className="play-chopsticks">
            Play Chopsticks
        </button>
    );
};

export default PlayChopsticks;