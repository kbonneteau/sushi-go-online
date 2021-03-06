import './HeroParallax.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import {useRef} from 'react'
import HomeHero from '../HomeHero/HomeHero';
import Tutorial from '../Tutorial/Tutorial';


const HeroParallax = ({ handleError }) => {
  const parallax = useRef();
    
  const handleTutorialClick = () => {
    parallax.current.scrollTo(1);
  }

  return (
    <div className="parallax">
      <Parallax ref={parallax} pages={2}>
        <ParallaxLayer offset={1} speed={1} className="parallax__second-section" />

        <ParallaxLayer offset={0} speed={0.1} className="parallax__parent-container">
            <HomeHero handleError={handleError} handleTutorialClick={handleTutorialClick} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.1} className="parallax__parent-container" onClick={() => parallax.current.scrollTo(0)}>
          <Tutorial />
        </ParallaxLayer>

      </Parallax>
    </div>
  )
}

export default HeroParallax;