import './SelectCard.scss';
// import { useState, useEffect } from 'react';

const SelectCard = ({ selectedCard }) => {
    const handleCardCommit = () => {
        selectedCard === null 
            ? console.log('this card is null')
            : console.log("Commit card", selectedCard);
    }

    return (
        <button onClick={handleCardCommit} className="select-card">
            Play Selected Card
        </button>
    );
};

export default SelectCard;