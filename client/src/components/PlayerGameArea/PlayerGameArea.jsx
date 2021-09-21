import './PlayerGameArea.scss';
import { Component } from 'react';
import PlayerModal from '../PlayerModal/PlayerModal';
import PlayerHand from '../PlayerHand/PlayerHand';
import SelectCard from '../SelectCard/SelectCard';


class PlayerGameArea extends Component {
    state = {};

    render() {
        return (
            <>
                <section className="player-area">
                    <div className="player-area__modal-container">
                        <PlayerModal />
                    </div>
                    <div className="player-area__details-container">
                        <h2 className="player-area__title">Your Hand</h2>
                        <p className="player-area__action-description">
                            Select a card to play and pass your hand to the next player
                        </p>
                        <PlayerHand />
                    </div>
                </section>
                <SelectCard />
            </>
        );
    }
};

export default PlayerGameArea;