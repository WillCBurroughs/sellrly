import React from 'react';
import '../../index.css'
import HeroImage from '../../images/SellrlyHero.webp'

function AboveFoldImage(props) {
  return (
    <img 
        className= {props.imgClass || 'HeroImage' }
        id={props.id || undefined} 
        alt={props.alt || "Logo"}
        src={props.src || HeroImage}
        fetchpriority="high"
        decoding="async"
    />
  );
}

export default AboveFoldImage;