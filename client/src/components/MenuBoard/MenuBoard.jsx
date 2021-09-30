import './MenuBoard.scss';
import { Component } from 'react';
import axios from 'axios';
import MenuCardNigiri from '../MenuCardNigiri/MenuCardNigiri';
import MenuCard from '../MenuCard/MenuCard';
import MenuDescriptionModal from '../MenuDescriptionModal/MenuDescriptionModal';

class MenuBoard extends Component {
    state = {
        menuDetails: null,
        description: true,
        menuItemHovered: {}
    };
    
    /**
     * Finds a menu item based on the menu card hovered. Sets the found item to state.
     * @param {string} hoveredMenuId id of the hovered menu item
     */
    handleMenuHover = hoveredMenuId => {
        const foundItem = this.state.menuDetails.find(menuItem => menuItem.id === hoveredMenuId);
        this.setState({ menuItemHovered: foundItem })
    }

    /**
     * Resets the state of menuItemHovered on mouse leave of menu item.
     */
    handleMouseLeave = () => this.setState({ menuItemHovered: {} })

    componentDidMount() {
        // Axios request for menu details.
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
                            if(menuItem.dishType === 'nigiri') {
                                return (<MenuCardNigiri 
                                          key={menuItem.id} 
                                          id={menuItem.id} 
                                          image={menuItem.image} 
                                          handleMenuHover={this.handleMenuHover} 
                                          handleMouseLeave={this.handleMouseLeave}
                                        />);
                            }
                            return (<MenuCard
                                     key={menuItem.id} 
                                     id={menuItem.id}
                                     type={menuItem.dishType} 
                                     name={menuItem.dishName} 
                                     image={menuItem.image}
                                     handleMenuHover={this.handleMenuHover}
                                     handleMouseLeave={this.handleMouseLeave}
                                    />);
                        })
                    )}
                </div>

                
                {this.state.menuItemHovered.id !== undefined
                    ? <MenuDescriptionModal menuItem={this.state.menuItemHovered}/> 
                    : null
                }
            </>
        );
    };
}

export default MenuBoard;