import React from 'react';
import '../../index.css'

function SecondaryButton(props) {
  return (
    <button className='secondaryButton' id= {props.id}>
      {props.text}
    </button>
  );
}

export default SecondaryButton;