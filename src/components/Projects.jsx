import React from 'react';
import randomQuoteImg from '../images/randomQuote.png';
import JavaScriptCalc from '../images/JavaScriptCalculator.png';
import GuessGaming from '../images/GuessingGame.png';
import './styles.css';

export class Projects extends React.Component {
   render() {
      return (
         <div>
            <h1>Projects</h1>
            <div className="flexContainer">
               <img className="item" src={randomQuoteImg} alt="" />
               <img className="item" src={JavaScriptCalc} alt="" />
               <img className="item" src={GuessGaming} alt="" />
            </div>
            <p>
               To view my other projects visit my&nbsp;
               <a href="https://github.com/Taljjaa">Github</a>
            </p>
         </div>
      );
   }
}
