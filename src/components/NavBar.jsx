import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export class NavBar extends React.Component {
   render() {
      return (
         <div className="flexContainer navBar">
            <div className="flexContainer homeBar">
               <div>
                  <Link to="/">JW</Link>
               </div>
            </div>
            <div className="flexContainer linkContainer">
               <div>
                  <Link to="/about">About</Link>
               </div>
               <div>
                  <Link to="/projects">Projects</Link>
               </div>
               <div>
                  <Link to="/contact">Contact</Link>
               </div>
            </div>
         </div>
      );
   }
}
