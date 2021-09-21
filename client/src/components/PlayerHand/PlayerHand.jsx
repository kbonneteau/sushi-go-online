import './PlayerHand.scss';
import { Component } from 'react';
import axios from 'axios';
import Card from '../Card/Card.jsx';

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

const details = [{
    "id": "f679a865-d08c-4752-adf1-6c4863a15ea9",
    "menu": "all",
    "card": "nigiri",
    "subType": "egg",
    "dishType": "nigiri",
    "numberInDeck": 4,
    "value": "1",
    "modifier": "wasabi",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "3891e65a-3be8-49d7-880a-1058bf69b1f3",
    "menu": "all",
    "card": "nigiri",
    "subType": "salmon",
    "dishType": "nigiri",
    "numberInDeck": 5,
    "value": "2",
    "modifier": "wasabi",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "eff09179-fba1-4f7c-9341-53862ed7b5e6",
    "menu": "all",
    "card": "nigiri",
    "subType": "squid",
    "dishType": "nigiri",
    "numberInDeck": 3,
    "value": "3",
    "modifier": "wasabi",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "96a3d5ae-fbc2-4591-a879-0557a83d69cf",
    "menu": "original",
    "card": "wasabi",
    "subType": "wasabi",
    "dishType": "special",
    "numberInDeck": 3,
    "value": "Next nigiri x3",
    "modifier": "next nigiri *3",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "9e6f0639-684a-4f8e-aeba-2b3fec1fde44",
    "menu": "original",
    "card": "pudding",
    "subType": "pudding",
    "dishType": "dessert",
    "numberInDeck": 5,
    "value": "Most 6 Least -6",
    "modifier": "highest count @ end earns 6 points, lowest loses 6 points",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "d8c9152f-dc9b-411c-943d-7d7a9222810e",
    "menu": "original",
    "card": "sashimi",
    "subType": "sashimi",
    "dishType": "appetizer",
    "numberInDeck": 8,
    "value": "x3=10",
    "modifier": "0 if user does not get 3",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "a33ada0d-1058-4c62-8667-0c6f7ccf7a97",
    "menu": "original",
    "card": "dumpling",
    "subType": "dumpling",
    "dishType": "appetizer",
    "numberInDeck": 8,
    "value": "1 3 6 10 15",
    "modifier": "Value changes based on number of cards",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "9258c02c-aaf9-40a8-a1e1-3c22146f9631",
    "menu": "original",
    "card": "tempura",
    "subType": "tempura",
    "dishType": "appetizer",
    "numberInDeck": 8,
    "value": "x2=5",
    "modifier": "requires two cards to earn 5 points",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "89d6dbdc-a835-42a5-b5bc-321d7f6a8f16",
    "menu": "original",
    "card": "chopsticks",
    "subType": "chopsticks",
    "dishType": "special",
    "numberInDeck": 3,
    "value": "Swap fpr 2",
    "modifier": "Value changes based on number of cards",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "239bd62a-37e3-4f5d-9c04-a6dbbe7e2e7f",
    "menu": "original",
    "card": "maki",
    "subType": "maki",
    "dishType": "rolls",
    "numberOfRolls": 1,
    "numberInDeck": 4,
    "value": "1st=6 2nd=3",
    "modifier": "highest number of maki gets 6 points, 2nd gets 3 points",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "91c99c9d-cbdd-4be2-bc60-0b6172e12fe4",
    "menu": "original",
    "card": "maki",
    "subType": "maki",
    "dishType": "rolls",
    "numberOfRolls": 2,
    "numberInDeck": 5,
    "value": "1st=6 2nd=3",
    "modifier": "highest number of maki gets 6 points, 2nd gets 3 points",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
},
{
    "id": "0f6753a9-be5e-4814-a755-b6c63a2a8d36",
    "menu": "original",
    "card": "maki",
    "subType": "maki",
    "dishType": "rolls",
    "numberOfRolls": 3,
    "numberInDeck": 3,
    "value": "1st=6 2nd=3",
    "modifier": "highest number of maki gets 6 points, 2nd gets 3 points",
    "image": {
        "icon": "https://via.placeholder.com/50x50",
        "main": "https://via.placeholder.com/100x100"
    }
}
]

class PlayerHand extends Component{
    // Will this have props available right away to set state with?
    state = {
        cardsInHand: playerCards,  // props
        cardDetails: null
    };

    getCardDetails = () => {
        const newCards = [];
        this.state.cardsInHand.forEach(card => {
            newCards.push(details.find(detail => card === detail.id))
        })
        // axios.get()
        //     .then(res => this.setState({ }))
        //     .catch(console.log);
        
        return newCards;
    }

    // Get player hand passed down to this. Grab card details?
    componentDidMount() {
        console.log('player hand :: component did mount')
        this.setState({
            cardDetails: this.getCardDetails()
        })
    }

    render() {
        console.log('player hand :: render')
        if(this.state.cardDetails === null) return null;

        return (
            <article className="player-hand">
                {this.state.cardDetails.map(card => <Card key={card.id} card={card} />)}
            </article>
        );
    }
};

export default PlayerHand;