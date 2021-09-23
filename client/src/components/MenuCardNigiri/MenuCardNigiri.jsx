import './MenuCardNigiri.scss';

const MenuCardNigiri = () => {
    return (
        <article className="menu-card-nigiri">
            <header className="menu-card-nigiri__dish-type">
                {/* Can this be an h3? */}
                nigiri
            </header>
            <h3 className="menu-card-nigiri__dish-name">card name</h3>
            <img className="menu-card-nigiri__dish-image" src="https://via.placeholder.com/100x100" alt="" />
            {/* <p className="menu-card-nigiri__desc">lorem ipsum dolor</p> */}
        </article>
    );
};

export default MenuCardNigiri;