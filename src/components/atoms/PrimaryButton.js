import React from 'react';
import '../../index.css'

function PrimaryButton(props) {
  return (
    <button className='primaryButton' id = {props.id}>
      {props.text}
    </button>
  );
}

export default PrimaryButton;