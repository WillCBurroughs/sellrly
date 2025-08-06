import React from 'react';
import '../../index.css'
import Arrow from '../../images/Arrow.svg'

function JumpDownButton(props) {

  const handleScroll = () => {
    const section = document.getElementById('videoHome');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="jumpButton" onClick={handleScroll}>
      <img 
        src = {Arrow}
        alt= 'Skip To Next Section'
      />
      {props.text && <span>{props.text}</span>}
    </button>
  );
}

export default JumpDownButton;