import React from 'react';
import ProjectImage from './ProjectImage';
import FlipOnHover from './FlipOnHover';
import randomQuoteImg from '../images/RandomQuote2.png';
import JavaScriptCalc from '../images/JavaScriptCalc.png';
import GuessGaming from '../images/GuessingGame.png';
import Pomodoro from '../images/PomodoroClock.png';
import TwitchLayout from '../images/TwitchAPI.png';
import TicTac from '../images/TicTac.png';
import './styles.css';

export class Projects extends React.Component {
   render() {
      return (
         <div>
            <div className="basicFlexContainer">
               <h1>Projects</h1>
               <div className="projectsContainer">
                  <ProjectImage
                     href="https://codepen.io/Taliaa/pen/XVZQjJ"
                     src={randomQuoteImg}
                     back={<div>Random Quote Generator</div>}
                  />
                  <ProjectImage
                     href="https://codepen.io/Taliaa/pen/GQRePd"
                     src={JavaScriptCalc}
                     back={<div>JavaScript Calculator</div>}
                  />
                  <ProjectImage
                     href="https://codepen.io/Taliaa/pen/PRobBy"
                     src={GuessGaming}
                     back={<div>RBG Color Game</div>}
                  />
                  <ProjectImage
                     hrf="https://codepen.io/Taliaa/pen/oEjayP"
                     src={Pomodoro}
                     back={<div>Pomodoro Clock</div>}
                  />
                  <ProjectImage
                     href="https://codepen.io/Taliaa/pen/ypPdBR"
                     src={TwitchLayout}
                     back={<div>Twitch API display</div>}
                  />
                  <ProjectImage
                     href="https://codepen.io/Taliaa/pen/GQMNbe"
                     src={TicTac}
                     back={<div>Tic Tac Toe Game</div>}
                  />
               </div>
               <p>
                  To view my other projects visit my&nbsp;
                  <a
                     target="_blank"
                     rel="noopener noreferrer"
                     href="https://github.com/Taljjaa"
                  >
                     Github
                  </a>
               </p>
            </div>
         </div>
      );
   }
}
