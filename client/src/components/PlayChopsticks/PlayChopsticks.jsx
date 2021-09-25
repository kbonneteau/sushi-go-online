import './PlayChopsticks.scss';

const PlayChopsticks = ({ handlePlayChopsticks, useChopsticks }) => {
    return (
        <>  
            {useChopsticks
                ? null
                : (<button onClick={handlePlayChopsticks} className="play-chopsticks">
                        Play Chopsticks
                    </button>)
            }
        </>
    );
};

export default PlayChopsticks;