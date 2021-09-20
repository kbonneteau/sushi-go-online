import './MenuCard.scss';

// Can this be a stateful component and show a tooltip with information about the card?
const MenuCard = () => {
    return (
        <article className="menu-card">
            <header className="menu-card__dish-type">
                {/* Can this be an h3? */}
                type
            </header>
            <h3 className="menu-card__dish-name">card name</h3>
            <img className="menu-card__dish-image" src="https://via.placeholder.com/100x100" alt="" />
            {/* <p className="menu-card__desc">lorem ipsum dolor</p> */}
        </article>
    );
};

export default MenuCard;