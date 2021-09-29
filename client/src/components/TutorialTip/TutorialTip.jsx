import './TutorialTip.scss';
import React from 'react';

const TutorialTip = ({ tutorial, handleMouseLeave, handleTutorialHover}) => {
    return (
        <article 
            onMouseEnter={() => handleTutorialHover(tutorial.id)}
            onMouseLeave={handleMouseLeave}
            className="tutorial-tip"
            style={{ backgroundImage: `url(${tutorial.image})` }}
        >
        <header className="tutorial-tip__header">
            <h2 className="tutorial-tip__title">{tutorial.title}</h2>
        </header>
    </article>
    );
};

export default TutorialTip;