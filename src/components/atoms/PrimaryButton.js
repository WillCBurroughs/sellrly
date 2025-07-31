import React from 'react';
import '../../index.css'

function PrimaryButton(props) {
  return (
    <button className='primaryButton'>
      {props.text}
    </button>
  );
}

export default PrimaryButton;