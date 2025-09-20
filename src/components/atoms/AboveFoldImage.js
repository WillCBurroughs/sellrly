import React from 'react';
import '../../index.css'
import HeroImage from '../../images/HeroImage.webp'

function AboveFoldImage(props) {
  return (
    <img 
        className= {props.imgClass || 'HeroImage' }
        id={props.id || undefined} 
        alt={props.alt || "Logo"}
        src={props.src || HeroImage}
    />
  );
}

export default AboveFoldImage;