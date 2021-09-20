import './MenuBoard.scss';
import { Component } from 'react';

const menu = {
    "menuType": "original",
    "menuCards": {
        "default": "nigiri",
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
                test
            </div>
        );
    };
}


export default MenuBoard;