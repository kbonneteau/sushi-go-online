import './MenuDescriptionModal.scss';

const MenuDescriptionModal = ({ menuItem }) => {
    return (
        <aside className="menu-desc">
            <img className="menu-desc__dish-icon" src={menuItem.image} alt="" />
            <h2 className="menu-desc__title">{menuItem.dishName}</h2>
            <p className="menu-desc__sub-info">{menuItem.shortDescription}</p>
            {menuItem.rules.map((rule, i) => <p key={i} className="menu-desc__description">{menuItem.rules[i]}</p>)}
            {menuItem.rulesExpanded 
                ? menuItem.rulesExpanded.map((rule, i) => <p key={i} className="menu-desc__secondary-description">{menuItem.rulesExpanded[i]}</p>)
                : null
            }
        </aside>
    );
};

export default MenuDescriptionModal;