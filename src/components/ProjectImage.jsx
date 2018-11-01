import React from 'react';
import FlipOnHover from './FlipOnHover';

export default function ProjectImage({ src, href, alt, back }) {
   return (
      <FlipOnHover
         size="projectSize"
         back={<div className="placeholderBack">{back}</div>}
      >
         <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} />
         </a>
      </FlipOnHover>
   );
}
