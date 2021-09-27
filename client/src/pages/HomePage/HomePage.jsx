import './HomePage.scss';
import { useState } from 'react'
import HomeHero from '../../components/HomeHero/HomeHero';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const HomePage = () => {
    const [ error, setError ] = useState(false)
    const handleError = () => setError(true)
    const handleModalClose = () => setError(false)

    return (
        <main className="home">
            <HomeHero handleError={handleError} />
            {error ? <ErrorModal handleModalClose={handleModalClose} /> : null}
        </main>
    );
};

export default HomePage;