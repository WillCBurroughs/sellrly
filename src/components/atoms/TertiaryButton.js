import React from 'react';
import '../../index.css'

function TertiaryButton(props) {
  return (
    <button className='TertiaryButton'>
      {props.text}
    </button>
  );
}

export default TertiaryButton;