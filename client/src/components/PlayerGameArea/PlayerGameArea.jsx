import './PlayerGameArea.scss';
import { Component } from 'react';
import PlayerHand from '../PlayerHand/PlayerHand';


class PlayerGameArea extends Component {
    state = {};

    render() {
        return (
            <>
                <section className="player-area">
                    <h2 className="player-area__title">Player Hand</h2>
                    <p className="player-area__action-description">
                        Select a card to play and pass your hand to the next player
                    </p>
                    <PlayerHand />
                </section>
            </>
        );
    }
};

export default PlayerGameArea;