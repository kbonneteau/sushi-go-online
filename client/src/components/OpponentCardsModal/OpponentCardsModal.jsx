import './OpponentCardsModal.scss';
import { Component } from 'react';
import OpponentIcon from '../OpponentIcon/OpponentIcon';

class OpponentCardsModal extends Component {
    state = {
        hidden: true
    };

    handleMouseOver = (id) => {
        console.log(id)
        this.setState({
            hidden: false
        })
    };
    handleMouseLeave = (id) => {
        console.log('Left',id)
        this.setState({
            hidden: true
        })
    };
    render() {
        return (
            <div className="played-modal">
                <div className={this.state.hidden ? 'hidden' : 'show-me'}>Player {this.props.id} Modal</div>
                <OpponentIcon id={this.props.id} handleMouseOver={this.handleMouseOver} handleMouseLeave={this.handleMouseLeave} />
            </div>
        );
    };
}

export default OpponentCardsModal;