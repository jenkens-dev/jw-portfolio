import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipOnHover from './FlipOnHover.jsx';
import AlignCenter from './AlignCenter.jsx';
import ProfilePic from '../images/profile picture.jpg';
import './styles.css';

export class About extends React.Component {
   render() {
      return (
         <div className="aboutContainer">
            <AlignCenter>
               <h1>About Me</h1>
            </AlignCenter>
            <AlignCenter>
               <img className="profilePic" src={ProfilePic} alt="" />
               <p>
                  My name is Jennifer Williams and I am a front-end developer in
                  Seattle, Washington. I graduated with a degree in Zoology but
                  quickly found my passion for programming after taking a Java
                  class in my free time. When I'm not programming I enjoy
                  watching esports, cuddling my dog, and rock climbing!
               </p>
            </AlignCenter>
            <AlignCenter>
               <h2>My Skills</h2>
            </AlignCenter>
            <AlignCenter>
               <div className="skillsContainer">
                  <FlipOnHover back={<div>React</div>}>
                     <FontAwesomeIcon
                        style={{ color: '#61dafb', margin: '5px' }}
                        size="5x"
                        icon={['fab', 'react']}
                     />
                  </FlipOnHover>
                  <FlipOnHover back={<div>HTML5</div>}>
                     <FontAwesomeIcon
                        style={{ color: '#E44D26', margin: '5px' }}
                        size="5x"
                        icon={['fab', 'html5']}
                     />
                  </FlipOnHover>
                  <FlipOnHover back={<div>CSS3</div>}>
                     <FontAwesomeIcon
                        style={{ color: '#1572B6', margin: '5px' }}
                        size="5x"
                        icon={['fab', 'css3-alt']}
                     />
                  </FlipOnHover>
                  <FlipOnHover back={<div>JavaScript</div>}>
                     <FontAwesomeIcon
                        style={{ color: '#F0DB4F', margin: '5px' }}
                        size="5x"
                        icon={['fab', 'js-square']}
                     />
                  </FlipOnHover>
                  <FlipOnHover back={<div>Git</div>}>
                     <FontAwesomeIcon
                        style={{ color: '#f14e32', margin: '5px' }}
                        size="5x"
                        icon={['fab', 'git-square']}
                     />
                  </FlipOnHover>
                  <FlipOnHover back={<div>GitHub</div>}>
                     <FontAwesomeIcon
                        style={{ color: '#24292e', margin: '5px' }}
                        size="5x"
                        icon={['fab', 'github']}
                     />
                  </FlipOnHover>
               </div>
            </AlignCenter>
         </div>
      );
   }
}
