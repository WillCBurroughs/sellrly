import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import FounderDesktop from '../atoms/FounderDesktop';

function FoundersSectionDesktop(props) {
  return (
    <div className='holdFoundersDesktop'>
        <div className='holdFoundersMainContent'>
            <EmphasisIcon text = "Our Team" id = "SmallEmphasis"/>
            <h2 style={{marginBottom: "20px"}}>
                Meet the experts behind Sellrly
            </h2>
            <FounderDesktop/>
            <FounderDesktop/>
        </div>
    </div>
  );
}

export default FoundersSectionDesktop;