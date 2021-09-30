import './Tutorial.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL, API_TUTORIAL } from '../../utils/ApiUtils';
import TutorialTip from '../TutorialTip/TutorialTip';

const Tutorial = () => {
    const [ tutorials, setTutorials ] = useState([]);
    const [ tutorialTip, setTutorialTip ] = useState({});

    /**
     * Sets a specific tutorial in state based on the tutorial id of the hovered tip.
     * @param {string} hoveredId of the tutorial item hovered over
     */
    const handleTutorialHover = (hoveredId) => {
        setTutorialTip(tutorials.find(tutorial => tutorial.id === hoveredId))
    }

    useEffect(() => {
        // Grabs the tutorial information from server
        axios.get(API_BASE_URL + API_TUTORIAL)
            .then(res => setTutorials(res.data))
            .catch(console.log)
    }, [])

    return (
        <section className="tutorial">
            <h1 className="tutorial__title">Game Tips</h1>
            <div className="tutorial__tutorial-container">
                {tutorials.map(tutorial => (
                    <TutorialTip 
                        key={tutorial.id} 
                        tutorial={tutorial} 
                        handleTutorialHover={handleTutorialHover}
                    />
                ))}
            </div>
            <div className="tutorial__tip-container">
                <h3 className="tutorial__tip-name">{tutorialTip.title}</h3>
                {!tutorialTip.tip ? null : tutorialTip.tip.map((tipDetail, i) => (
                    <p key={i} className="tutorial__information">
                        {tipDetail}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Tutorial;