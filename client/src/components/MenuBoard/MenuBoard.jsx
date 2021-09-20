import './MenuBoard.scss';
import { Component } from 'react';
import axios from 'axios';
import MenuCardNigiri from '../MenuCardNigiri/MenuCardNigiri';
import MenuCard from '../MenuCard/MenuCard';

const menu = {
    "menuType": "original",
    "menuCards": [
        {
            "id": 1,
            "dishType": "nigiri",
            "dishName": "nigiri",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 2,
            "dishType": "rolls",
            "dishName": "maki",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 3,
            "dishType": "special",
            "dishName": "wasabi",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 4,
            "dishType": "special",
            "dishName": "chopsticks",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 5,
            "dishType": "appetizer",
            "dishName": "dumpling",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 6,
            "dishType": "appetizer",
            "dishName": "tempura",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 7,
            "dishType": "appetizer",
            "dishName": "sashimi",
            "image": "https://via.placeholder.com/100x100"
        },
        {
            "id": 8,
            "dishType": "dessert",
            "dishName": "pudding",
            "image": "https://via.placeholder.com/100x100"
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
                        if(card.dishType === 'nigiri') return <MenuCardNigiri key={card.id} image={card.image}/>;
                        return <MenuCard key={card.id} type={card.dishType} name={card.dishName} image={card.image} />;
                    })
                )}
            </div>
        );
    };
}


export default MenuBoard;