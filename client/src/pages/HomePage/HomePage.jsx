import './HomePage.scss';
import HomeHero from '../../components/HomeHero/HomeHero';

const HomePage = () => {
    return (
        <main className="home">
            {/* Remove this in the future */}
            <h1>Home Page</h1>
            <HomeHero />
        </main>
    );
};

export default HomePage;