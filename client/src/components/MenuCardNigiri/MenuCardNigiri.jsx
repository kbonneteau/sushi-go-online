import './MenuCardNigiri.scss';

const MenuCardNigiri = ({ id, handleMenuHover, handleMouseLeave }) => {
    return (
        <article className="menu-card-nigiri" onMouseEnter={() => handleMenuHover(id)} onMouseLeave={handleMouseLeave}>
            <header className="menu-card-nigiri__dish-type">
                nigiri
            </header>
                <div className="menu-card-nigiri__dish-container">
                    <img className="menu-card-nigiri__dish-image" src="http://localhost:8080/images/egg_nigiri.png" alt="egg nigiri" />
                    <p className="menu-card-nigiri__point">x1</p>
                </div>
                <div className="menu-card-nigiri__dish-container">
                    <img className="menu-card-nigiri__dish-image" src="http://localhost:8080/images/salmon_nigiri.png" alt="salmon nigiri" />
                    <p className="menu-card-nigiri__point">x2</p>
                </div>
                <div className="menu-card-nigiri__dish-container">
                    <img className="menu-card-nigiri__dish-image" src="http://localhost:8080/images/squid_nigiri.png" alt="squid nigiri" />
                    <p className="menu-card-nigiri__point">x3</p>
                </div>
        </article>
    );
};

export default MenuCardNigiri;