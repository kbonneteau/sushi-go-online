import "./Header.scss";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="site-header">
            <Link to="/">
                <img src="http://localhost:8080/images/logo-1.png" alt="Sushi Go! Online logo" className="site-header__logo" />
            </Link>
        </header>
    );
};

export default Header;