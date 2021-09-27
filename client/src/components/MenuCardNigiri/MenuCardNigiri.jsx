import './MenuCardNigiri.scss';

const MenuCardNigiri = () => {
    return (
        <article className="menu-card-nigiri">
            <header className="menu-card-nigiri__dish-type">
                {/* Can this be an h3? */}
                nigiri
            </header>
            <div className="menu-card-nigiri__dish-container">
                <img className="menu-card-nigiri__dish-image" src="http://localhost:8080/images/egg_nigiri.png" alt="" />
                <p className="menu-card-nigiri__point">x1</p>
            </div>
            <div className="menu-card-nigiri__dish-container">
                <img className="menu-card-nigiri__dish-image" src="http://localhost:8080/images/salmon_nigiri.png" alt="" />
                <p className="menu-card-nigiri__point">x2</p>
            </div>
            <div className="menu-card-nigiri__dish-container">
                <img className="menu-card-nigiri__dish-image" src="http://localhost:8080/images/squid_nigiri.png" alt="" />
                <p className="menu-card-nigiri__point">x3</p>
            </div>
            {/* <p className="menu-card-nigiri__desc">lorem ipsum dolor</p> */}
        </article>
    );
};

export default MenuCardNigiri;