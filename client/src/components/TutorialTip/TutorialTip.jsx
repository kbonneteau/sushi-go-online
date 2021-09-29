import './TutorialTip.scss';
import React from 'react';

const TutorialTip = ({ tutorial, handleTutorialHover}) => {
    return (
        <article 
            onMouseEnter={() => handleTutorialHover(tutorial.id)}
            className="tutorial-tip"
        >
        <header className="tutorial-tip__header">
            <h2 className="tutorial-tip__title">{tutorial.title}</h2>
        </header>
            <img src={tutorial.image} alt="" className="tutorial-tip__icon" />
    </article>
    );
};

export default TutorialTip;