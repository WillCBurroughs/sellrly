import React from 'react';
import '../../index.css'
import Arrow from '../../images/Arrow.svg'

function EmphasisIcon(props) {
  return (
    <p className='Emphasis blb' id={props.id}>
        {props.text}
    </p>
  );
}

export default EmphasisIcon;