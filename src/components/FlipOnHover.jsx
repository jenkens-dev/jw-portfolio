import React from 'react';
import './styles.css';

export default function FlipOnHover({ children, back }) {
   return (
      <div className="flip-container">
         <div className="flipper">
            <div className="front">{children}</div>
            <div className="back">
               <div className="backContent">{back}</div>
            </div>
         </div>
      </div>
   );
}
