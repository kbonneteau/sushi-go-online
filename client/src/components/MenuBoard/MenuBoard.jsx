import './MenuBoard.scss';
import { Component } from 'react';
import axios from 'axios';
import MenuCardNigiri from '../MenuCardNigiri/MenuCardNigiri';
import MenuCard from '../MenuCard/MenuCard';

const menu = {
    "menuType": "original",
    "menuCards": [
        {
            "dishType": "nigiri",
            "dishName": ["nigiri"],
            "image": ""
        },
        {
            "dishType": "rolls",
            "dishName": ["maki"],
            "image": ""
        },
        {
            "dishType": "special",
            "dishName": ["wasabi", "chopsticks"],
            "image": ""
        },
        {
            "dishType": "appetizer",
            "dishName": ["dumpling", "tempura", "sashimi"],
            "image": ""
        },
        {
            "dishType": "dessert",
            "dishName": ["pudding"],
            "image": ""
        }
    ]
}


class MenuBoard extends Component {
    state = {
        cards: null
    };


    componentDidMount() {
        console.log('component did mount')
        // axios.get(`/menu/${original}`)
            // .then(res => console.log(res.data))
            // .then(res => this.setState({ cards: res.data.menuCards }))
        this.setState({
            cards: menu.menuCards
        })
        // console.log(Object.entries(menu.menuCards))
    }
    
    render() {
        console.log('render')
        return (
            <div className="menu-board">
                {this.state.cards === null ? null : (
                    this.state.cards.map(card => {
                        console.log(card)
                        if(card.dishType === 'nigiri') return <MenuCardNigiri key={card.dishName} />;
                        if(card.dishName.length > 1) {
                            return card.dishName.map(name => <MenuCard key={name} type={card.dishType} name={name} />);
                        }
                        return <MenuCard key={card.dishName} type={card.dishType} name={card.dishName} />;
                    })
                )}
            </div>
        );
    };
}


export default MenuBoard;