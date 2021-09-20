import './MenuBoard.scss';
import { Component } from 'react';
import axios from 'axios';
import MenuCardNigiri from '../MenuCardNigiri/MenuCardNigiri';
import MenuCard from '../MenuCard/MenuCard';

class MenuBoard extends Component {
    state = {
        cards: null
    };

    componentDidMount() {
        console.log('menu board :: component did mount')
        axios.get(`/menu/original`)
            .then(res => this.setState({ cards: res.data.menuCards }))
            .catch(console.log)
    }
    
    render() {
        console.log('menu board :: render')
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