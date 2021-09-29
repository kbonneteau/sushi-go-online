import './MenuCard.scss';

// Can this be a stateful component and show a tooltip with information about the card?
const MenuCard = ({ id, type, name, image, handleMenuHover, handleMouseLeave }) => {
    return (
        <article className={`menu-card ${name}`} onMouseEnter={() => handleMenuHover(id)} onMouseLeave={handleMouseLeave}>
            <header className="menu-card__dish-type">
                {/* Can this be an h3? */}
                {type}
            </header>
            <h3 className="menu-card__dish-name">{name}</h3>
            <img className="menu-card__dish-image" src={image} alt="" />
            {/* <p className="menu-card__desc">lorem ipsum dolor</p> */}
        </article>
    );
};

export default MenuCard;