import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

export class About extends React.Component {
   render() {
      return (
         <div className="aboutContainer">
            <h1>About Me</h1>
            <p>
               My name is Jennifer Williams and I am a front-end developer in
               Seattle, Washington. I graduated with a degree in Zoology but
               quickly found my passion for programming after taking a Java
               class in my free time. When I'm not programming I enjoy watching
               esports, cuddling my dog, and rock climbing!
            </p>
            <h2>My Skills</h2>
            <div className="skillsContainer">
               <FontAwesomeIcon
                  style={{ color: '#61dafb', margin: '5px' }}
                  size="5x"
                  icon={['fab', 'react']}
               />
               <FontAwesomeIcon
                  style={{ color: '#E44D26', margin: '5px' }}
                  size="5x"
                  icon={['fab', 'html5']}
               />
               <FontAwesomeIcon
                  style={{ color: '#1572B6', margin: '5px' }}
                  size="5x"
                  icon={['fab', 'css3-alt']}
               />
               <FontAwesomeIcon
                  style={{ color: '#F0DB4F', margin: '5px' }}
                  size="5x"
                  icon={['fab', 'js-square']}
               />
               <FontAwesomeIcon
                  style={{ color: '#f14e32', margin: '5px' }}
                  size="5x"
                  icon={['fab', 'git-square']}
               />
               <FontAwesomeIcon
                  style={{ color: '#24292e', margin: '5px' }}
                  size="5x"
                  icon={['fab', 'github']}
               />
            </div>
         </div>
      );
   }
}
