import './PlayerHand.scss';
import { Component } from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';
import { API_BASE_URL, API_CARDS } from '../../utils/ApiUtils';

// Dummy data to start. Should be fed in by props.
const playerCards = [
    'eff09179-fba1-4f7c-9341-53862ed7b5e6', // squid
    '0f6753a9-be5e-4814-a755-b6c63a2a8d36', // maki1
    '96a3d5ae-fbc2-4591-a879-0557a83d69cf', // wasabi
    'a33ada0d-1058-4c62-8667-0c6f7ccf7a97', // dumpling
    '9258c02c-aaf9-40a8-a1e1-3c22146f9631', // tempura
    'd8c9152f-dc9b-411c-943d-7d7a9222810e', // sashimi
    '9e6f0639-684a-4f8e-aeba-2b3fec1fde44'  // pudding
];

/*
239bd62a-37e3-4f5d-9c04-a6dbbe7e2e7f // 1 maki
91c99c9d-cbdd-4be2-bc60-0b6172e12fe4 // 2 maki
0f6753a9-be5e-4814-a755-b6c63a2a8d36 // 3 maki
*/

class PlayerHand extends Component{
    // Will this have props available right away to set state with?
    state = {
        cardsInHand: playerCards,  // props
        cardDetails: null
    };

    getCardDetails = () => {
        const newCards = [];
        axios.get(API_BASE_URL + API_CARDS)
            .then(res => {
                this.state.cardsInHand.forEach(cardId => {
                    newCards.push(res.data.find(card => cardId === card.id))
                })
                this.setState({
                    cardDetails: newCards
                });
            })
            .catch(console.log);
    }

    // Get player hand passed down to this. Grab card details?
    componentDidMount() {
        console.log('player hand :: component did mount')
        this.getCardDetails();
    }

    render() {
        console.log('player hand :: render')
        if(this.state.cardDetails === null) return null;

        return (
            <article className="player-hand">
                {this.state.cardDetails.map(card => (
                    <Card key={card.id} card={card} 
                        selectedCard={this.props.selectedCard}
                        handleCardSelection={this.props.handleCardSelection} 
                    />)
                )}
            </article>
        );
    }
};

export default PlayerHand;