import create from 'zustand';

const useStore = create((set) => ({
        player: null,
        setPlayer: (player) => set((state) => ({player})),

        // const [ opponents, setOpponents ] = useState(null);

        // const [ selectedCard, setSelectedCard ] = useState({});
        selectedCard: {},
        setSelectedCard: (selectedCard) => set((state) => ({selectedCard}))

        // people: [''],
        // addPerson: (person) => set((state) => ({ people: [...state.people, person]}))
}))

export default useStore;



/*

    const [ playerCommit, setPlayerCommit ] = useState(false);
    const [ roundStart, setRoundStart ] = useState(false);
    // If computers do not have cards committed in state, roundStart = true
    

    
    const [ opponentSelectedCard, setOpponentSelectedCard ] = useState(null);
    const [ chopsticksPlayed, setChopsticksPlayed ] = useState(false);
    const [ useChopsticks, setUseChopsticks ] = useState(false);


*/