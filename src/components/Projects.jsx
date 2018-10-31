import React from 'react';
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
                  <img src={randomQuoteImg} alt="" />
                  <img src={JavaScriptCalc} alt="" />
                  <img src={GuessGaming} alt="" />
                  <img src={Pomodoro} alt="" />
                  <img src={TwitchLayout} alt="" />
                  <img src={TicTac} alt="" />
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
