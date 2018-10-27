import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class Contact extends React.Component {
   render() {
      return (
         //contact me icon section - , codepen, freecodecamp, ,
         //gmail should automatically send you to that outlook interface to email me
         //have a question or want to work together?
         //get in touch
         <div>
            <h1>Contact Me!</h1>
            <div>
               <FontAwesomeIcon icon={['fab', 'twitter']} />
               <FontAwesomeIcon icon={['fab', 'linkedin']} />
               <FontAwesomeIcon icon={['fab', 'github']} />
               <FontAwesomeIcon icon={['fab', 'codepen']} />
               <FontAwesomeIcon icon={['fab', 'free-code-camp']} />
            </div>
            <p>Contact me via email at jenken131@gmail.com</p>
         </div>
      );
   }
}
