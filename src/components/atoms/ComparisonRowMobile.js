import React from 'react';
import '../../index.css';
import x from '../../images/X.svg';
import check from '../../images/Check.svg';

function ComparisonRowMobile({ text, hasFeature }) {
  return (
    <div className='comparisonRowMobile'>
      <p className='ComparisonTextMobileFeature'>{text}</p>
      <div className='cellMobile'>
        <img src={hasFeature ? check : x} alt={hasFeature ? 'check' : 'x'} className={hasFeature ? "CheckmarkMobile" : "DoesNotHaveFeature"} />
      </div>
    </div>
  );
}

export default ComparisonRowMobile;