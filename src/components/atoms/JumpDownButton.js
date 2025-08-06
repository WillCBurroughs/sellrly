import React from 'react';
import '../../index.css'
import Arrow from '../../images/Arrow.svg'

function JumpDownButton(props) {
  return (
    <button className="jumpButton">
      <img 
        src = {Arrow}
        alt= 'Skip To Next Section'
      />
      {props.text && <span>{props.text}</span>}
    </button>
  );
}

export default JumpDownButton;