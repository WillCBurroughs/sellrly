import React from 'react';
import '../../index.css';


function SectionTerms(props) {
  return (
    <div>
        <div className='TopDivider'></div>
        <h3>{props.text}</h3>
        <p className='subtext'>{props.subtext}</p>
        <p className='mainText'>{props.maintext}</p>
    </div>
  );
}

export default SectionTerms;