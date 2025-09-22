import React from 'react';
import '../../index.css'
import SellrlyTagline from '../../images/LogoWithoutTagline.svg';


function LogoTagline(props) {
  return (
    <img 
        className='logoImage' 
        id={props.id || undefined} 
        alt={props.alt || "Logo"}
        src={SellrlyTagline}
    />
  );
}

export default LogoTagline;