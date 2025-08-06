import React from 'react';
import '../../index.css'
import HeroImage from '../../images/HeroImage.svg'

function AboveFoldImage(props) {
  return (
    <img 
        className='HeroImage' 
        id={props.id || undefined} 
        alt={props.alt || "Logo"}
        src={HeroImage}
    />
  );
}

export default AboveFoldImage;