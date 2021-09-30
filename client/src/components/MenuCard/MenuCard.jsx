import './MenuCard.scss';

const MenuCard = ({ id, type, name, image, handleMenuHover, handleMouseLeave }) => {
    return (
        <article className={`menu-card ${name}`} onMouseEnter={() => handleMenuHover(id)} onMouseLeave={handleMouseLeave}>
            <header className="menu-card__dish-type">
                {type}
            </header>
            <h3 className="menu-card__dish-name">{name}</h3>
            <img className="menu-card__dish-image" src={image} alt="icon of dish on a platter" />
        </article>
    );
};

export default MenuCard;