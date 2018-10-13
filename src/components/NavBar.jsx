import React from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component {
   render() {
      return (
         <div>
            <ul
               style={{
                  textDecoration: 'none',
                  listStyleType: 'none',
                  margin: '5px',
                  padding: '5px',
               }}
            >
               <li style={{ display: 'inline' }}>
                  <Link to="/">JW</Link>
               </li>
               <li style={{ float: 'right', display: 'inline-block' }}>
                  <Link to="/contact">Contact</Link>
               </li>
               <li style={{ float: 'right', display: 'inline-block' }}>
                  <Link to="/projects">Projects</Link>
               </li>
               <li style={{ float: 'right', display: 'inline-block' }}>
                  <Link to="/about">About</Link>
               </li>
            </ul>
         </div>
      );
   }
}
