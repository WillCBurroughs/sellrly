import React from 'react';
import '../../index.css'

function SecondaryButton(props) {
  return (
    <button className='secondaryButton'>
      {props.text}
    </button>
  );
}

export default SecondaryButton;