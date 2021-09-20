import './MenuBoard.scss';
import { Component } from 'react';
import MenuCardNigiri from '../MenuCardNigiri/MenuCardNigiri';
import MenuCard from '../MenuCard/MenuCard';

const menu = {
    "menuType": "original",
    "menuCards": {
        "nigiri": "nigiri",
        "rolls": "maki",
        "special": ["wasabi", "chopsticks"],
        "appetizer": ["dumpling", "tempura", "sashimi"],
        "dessert": "pudding"
    }
}


class MenuBoard extends Component {
    state = {};


    componentDidMount() {
        console.log('component did mount')
        this.setState({
            cards: menu.menuCards
        })
        console.log(Object.entries(menu.menuCards))
    }
    
    render() {
        console.log('render')
        return (
            <div className="menu-board">
                <MenuCard />
            </div>
        );
    };
}


export default MenuBoard;