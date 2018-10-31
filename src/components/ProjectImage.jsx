import React from 'react';

export default function ProjectImage({ src, href, alt }) {
   return (
      <a href={href} target="_blank" rel="noopener noreferrer">
         <img src={src} alt={alt} />
      </a>
   );
}
