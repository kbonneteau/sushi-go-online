import './Tutorial.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_TUTORIAL } from '../../utils/ApiUtils';
import TutorialTip from '../TutorialTip/TutorialTip';

const Tutorial = () => {
    const [ tutorials, setTutorials ] = useState([]);
    const [ tutorialTip, setTutorialTip ] = useState({});

    const handleTutorialHover = (hoveredId) => {
        setTutorialTip(tutorials.find(tutorial => tutorial.id === hoveredId))
        console.log(hoveredId)
    }

    const handleMouseLeave = () => setTutorialTip({})

    useEffect(() => {
        axios.get(API_BASE_URL + API_TUTORIAL)
            .then(res => setTutorials(res.data))
            .catch(console.log)
    }, [tutorialTip, tutorials])

    return (
        <section className="tutorial">
            <h1 className="tutorial__title">How to Play</h1>
            <div className="tutorial__tutorial-container">
                {tutorials.map(tutorial => (
                    <TutorialTip 
                        key={tutorial.id} 
                        tutorial={tutorial} 
                        handleMouseLeave={handleMouseLeave} 
                        handleTutorialHover={handleTutorialHover}
                    />
                ))}
            </div>
            {!tutorialTip.tip ? null : tutorialTip.tip.map((tipDetail, i) => (
                <p key={i} className="tutorial__information">
                    {tipDetail}
                </p>
            ))}
        </section>
    );
};

export default Tutorial;