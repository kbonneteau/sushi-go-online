import './MenuCardNigiri.scss';

const MenuCardNigiri = () => {
    return (
        <article className="menu-card">
            <header className="menu-card__dish-type">
                {/* Can this be an h3? */}
                nigiri
            </header>
            <h3 className="menu-card__dish-name">card name</h3>
            <img className="menu-card__dish-image" src="https://via.placeholder.com/100x100" alt="" />
            {/* <p className="menu-card__desc">lorem ipsum dolor</p> */}
        </article>
    );
};

export default MenuCardNigiri;