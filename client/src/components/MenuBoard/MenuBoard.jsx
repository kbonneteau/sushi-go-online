import './MenuBoard.scss';
import { Component } from 'react';
import axios from 'axios';
import MenuCardNigiri from '../MenuCardNigiri/MenuCardNigiri';
import MenuCard from '../MenuCard/MenuCard';
import MenuDescriptionModal from '../MenuDescriptionModal/MenuDescriptionModal';

class MenuBoard extends Component {
    state = {
        menuDetails: null,
        description: true
    };

    handleMenuHover = () => this.setState({description: !this.state.description})

    componentDidMount() {
        axios.get(`/menu/original`)
            .then(res => this.setState({ menuDetails: res.data.menuCards }))
            .catch(console.log)
    }
    
    render() {
        return (
            <>
                <div className="menu-board">
                    {this.state.menuDetails === null ? null : (
                        this.state.menuDetails.map(menuItem => {
                            if(menuItem.dishType === 'nigiri') return <MenuCardNigiri key={menuItem.id} image={menuItem.image}/>;
                            return <MenuCard key={menuItem.id} type={menuItem.dishType} name={menuItem.dishName} image={menuItem.image} />;
                        })
                    )}
                </div>


                {this.state.description 
                    ? <MenuDescriptionModal handleMenuHover={this.handleMenuHover} /> 
                    : null
                }
            </>
        );
    };
}


export default MenuBoard;