import React from 'react';
import '../../index.css';


function TopSectionTerms(props) {
  return (
    <div>
        <h2>{props.text}</h2>
        <p className='subtext'>{props.subtext}</p>
        <p className='mainText'>{props.maintext}</p>
    </div>
  );
}

export default TopSectionTerms;