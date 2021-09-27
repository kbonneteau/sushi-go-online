import './HomePage.scss';
import HomeHero from '../../components/HomeHero/HomeHero';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const HomePage = () => {
    return (
        <main className="home">
            <HomeHero />
            <ErrorModal />
        </main>
    );
};

export default HomePage;