import React from 'react';
import '../../index.css'

function CompetitorsDesktop(props) {
  return (
    <div className="competitorLogoCell">
        <img 
            className='Competitor' 
            id={props.id || undefined} 
            alt={props.alt || "Competitor"}
            src={props.src}
        />
    </div>
  );
}

export default CompetitorsDesktop;