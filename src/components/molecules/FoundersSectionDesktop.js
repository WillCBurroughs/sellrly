import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';

function FoundersSectionDesktop(props) {
  return (
    <div className='holdFoundersDesktop'>
        <div className='holdFoundersMainContent'>
            <EmphasisIcon text = "Our Team" id = "SmallEmphasis"/>
            <h2>
                Meet the experts behind Sellrly
            </h2>
        </div>
    </div>
  );
}

export default FoundersSectionDesktop;