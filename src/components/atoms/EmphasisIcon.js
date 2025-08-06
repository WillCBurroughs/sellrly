import React from 'react';
import '../../index.css'
import Arrow from '../../images/Arrow.svg'

function EmphasisIcon(props) {
  return (
    <p className='Emphasis blb'>
        {props.text}
    </p>
  );
}

export default EmphasisIcon;