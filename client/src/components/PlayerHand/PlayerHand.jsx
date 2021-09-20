import './PlayerHand.scss';
import { Component } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

class PlayerHand extends Component{
    state = {};

    componentDidMount() {
        console.log('player hand :: component did mount')

    }

    render() {
        console.log('player hand :: render')
        return (
            <article className="player-hand">
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
                <PlayerCard />
            </article>
        );
    }
};

export default PlayerHand;