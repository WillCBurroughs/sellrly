import React from 'react';
import '../../index.css';
import x from '../../images/X.svg';
import check from '../../images/Check.svg';

function ComparisonRowDesktop(props) {
  const isLayout1 = props.layout === "1";

  return (
    <div className='comparisonRow'>
      <p className='blb'>{props.text}</p>
      <div className='cell'><img src={isLayout1 ? x : check} alt={isLayout1 ? 'x' : 'check'} /></div>
      <div className='cell'><img src={isLayout1 ? x : check} alt={isLayout1 ? 'x' : 'check'} /></div>
      <div className='cell'><img src={check} alt="check" /></div>
    </div>
  );
}

export default ComparisonRowDesktop;