import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About Me</h1>
            <p>
               My name is Jennifer Williams and I am a front-end developer in
               Seattle, Washington. I graduated with a degree in Zoology but
               quickly found my passion for programming after taking a Java
               class in my free time. When I'm not programming I enjoy watching
               esports, cuddling my dog, and rock climbing!
            </p>
            <h2>My Skills</h2>
            <div>
               <FontAwesomeIcon icon={['fab', 'react']} />
               <FontAwesomeIcon icon={['fab', 'html5']} />
               <FontAwesomeIcon icon={['fab', 'css3-alt']} />
               <FontAwesomeIcon icon={['fab', 'js-square']} />
               <FontAwesomeIcon icon={['fab', 'git-square']} />
               <FontAwesomeIcon icon={['fab', 'github']} />
            </div>
         </div>
      );
   }
}
