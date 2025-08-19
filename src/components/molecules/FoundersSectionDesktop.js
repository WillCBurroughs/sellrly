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
            <FounderDesktop 
            founderName = "Paul Rothkopf" 
            founderTitle = "Founder & CEO" 
            founderFirstLines = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            founderNextLines = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
            <FounderDesktop
            id = "row-reverse"
            founderName = "Andrew Reis" 
            founderTitle = "Founder & CEO" 
            founderFirstLines = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            founderNextLines = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
        </div>
    </div>
  );
}

export default FoundersSectionDesktop;

            // <h3>
            //     {props.founderName}
            // </h3>
            // <p>
            //     {props.founderTitle}
            // </p>
            // <p>
            //     {props.founderFirstLines}
            // </p>
            // <p>
            //     {props.founderNextLines}
            // </p>