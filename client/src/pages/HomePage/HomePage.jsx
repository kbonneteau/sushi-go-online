import './HomePage.scss';
import { useState, useEffect } from 'react';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import HeroParallax from '../../components/HeroParallax/HeroParallax';

const HomePage = () => {
    const [ error, setError ] = useState(false)
    const handleError = () => setError(true)
    const handleModalClose = () => setError(false)

    return (
        <main className="home">
            <HeroParallax handleError={handleError} />
            {error ? <ErrorModal handleModalClose={handleModalClose} /> : null}
        </main>
    );
};

export default HomePage;