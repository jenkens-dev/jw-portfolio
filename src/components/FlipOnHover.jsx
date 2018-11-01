import React from 'react';
import './styles.css';

export default function FlipOnHover({ children, back, size }) {
   return (
      <div className={`flip-container ${size}`}>
         <div className={`flipper ${size}`}>
            <div className={`front ${size}`}>{children}</div>
            <div className={`back ${size}`}>
               <div className="backContent">{back}</div>
            </div>
         </div>
      </div>
   );
}
