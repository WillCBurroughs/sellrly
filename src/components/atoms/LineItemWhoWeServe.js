import React from 'react';
import '../../index.css';
import Orange from '../../images/Orange.svg';
import Blue from '../../images/Blue.svg';
import Red from '../../images/Red.svg';


function LineItemWhoWeServe(props) {

  let selectReturnImage = props.imgSrc === "1" ? Blue : Red
  if(props.imgSrc === "3"){
    selectReturnImage = Orange;
  }

  return (
    <div className='LineItem'>
        <img src = {selectReturnImage} alt='ColorTag'/>
        <p>{props.text}</p>
    </div>
  );
}

export default LineItemWhoWeServe;