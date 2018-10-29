import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles.css';

export class Contact extends React.Component {
   render() {
      return (
         //contact me icon section - , codepen, freecodecamp, ,
         //gmail should automatically send you to that outlook interface to email me
         //have a question or want to work together?
         //get in touch
         <div className="aboutContainer">
            <h1>Contact Me!</h1>
            <div className="contactContainer">
               <a href="https://twitter.com/TaIiaa_">
                  <FontAwesomeIcon
                     style={{ color: '#1da1f2', margin: '5px' }}
                     size="2x"
                     icon={['fab', 'twitter']}
                  />
               </a>
               <a href="https://www.linkedin.com/in/jennifer-williams-1b0a54105/">
                  <FontAwesomeIcon
                     style={{ color: '#0073b1', margin: '5px' }}
                     size="2x"
                     icon={['fab', 'linkedin']}
                  />
               </a>
               <a href="https://codepen.io/Taliaa/">
                  <FontAwesomeIcon
                     style={{ color: 'black', margin: '5px' }}
                     size="2x"
                     icon={['fab', 'codepen']}
                  />
               </a>
               <a href="https://www.freecodecamp.org/taljjaa">
                  <FontAwesomeIcon
                     style={{ color: 'darkgreen', margin: '5px' }}
                     size="2x"
                     icon={['fab', 'free-code-camp']}
                  />
               </a>
               <a href="https://github.com/Taljjaa">
                  <FontAwesomeIcon
                     style={{ color: '#24292e', margin: '5px' }}
                     size="2x"
                     icon={['fab', 'github']}
                  />
               </a>
            </div>
            <p>
               Have a question or want to work together contact me via email at
               jenken131@gmail.com
            </p>
         </div>
      );
   }
}
