import React from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import FounderDesktop from '../atoms/FounderDesktop';
import Andrew from '../../images/Andrew.png';
import Paul from '../../images/Paul.png';

function FoundersSectionDesktop(props) {
  return (
    <div className='holdFoundersDesktop'>
        <div className='holdFoundersMainContent'>
            <EmphasisIcon text = "Our Team" id = "SmallEmphasis"/>
            <h2 style={{marginBottom: "20px"}}>
                Meet the experts behind Sellrly
            </h2>
            <FounderDesktop 
            founder = {Paul}
            founderName = "Paul Rothkopf" 
            founderTitle = "COO" 
            founderFirstLines = "Paul Rothkopf is a seasoned entrepreneur with a track record of building companies in emerging markets and technology. After years of helping Live Social Sellers grow their streams, he identified their biggest challenge: audience growth and sales. As Paul puts it: “If your audience doesn’t know you’re live, you’re not selling—you’re streaming into silence. Advertising is the mic check before the spotlight hits.”"
            founderNextLines = "Sellrly solves that problem. It gives sellers a simple, cost-effective way to reach customers beyond their own platform—delivering ads at the right time, to the right audience. The result: unparalleled growth, engagement, and revenue for live social sellers and their brands."
            />
            <FounderDesktop
            founder = {Andrew}
            id = "row-reverse"
            founderName = "Andrew Reis" 
            founderTitle = "COO" 
            founderFirstLines = "Andrew is a serial entrepreneur with a proven track record of scaling category-defining companies across ad-tech, e-commerce, and digital media. He he has built and exited businesses representing over $2B in aggregate enterprise value while creating 2,200+ jobs. At Sellrly, Andrew brings his expertise to what he believes is the next great revolution in digital commerce,  live social selling. Already $175 B ( 800B by 2030) market in the US he recognizes the need for social sellers to promote their brand and sells beyond sellers’ native platforms along with the advent of self-serve advertising platform."
            founderNextLines = "As Mr. Reis says “We’re not just building an ad platform—we’re building the infrastructure for the $800B live social commerce economy of tomorrow."
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