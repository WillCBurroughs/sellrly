import React from 'react';
import '../../index.css'
import sellerlyTagline from '../../images/sellerly-tagline.png'

function LogoTagline(props) {
  return (
    <img 
        className='logoImage' 
        id={props.id || undefined} 
        alt={props.alt || "Logo"}
        src={sellerlyTagline}
    />
  );
}

export default LogoTagline;