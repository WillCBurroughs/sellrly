import React from 'react';
import '../../index.css';
import CompetitorsDesktop from '../atoms/CompetitorsDesktop';
import Meta from '../../images/Meta.svg';
import TikTok from '../../images/TikTok.svg';
import Sellrly from '../../images/Sellrly.svg'
import ComparisonRowDesktop from '../atoms/ComparisonRowDesktop';
import PrimaryButton from '../atoms/PrimaryButton';

function ComparisonDesktop(props) {
  return (
    <div className='comparisonDesktop'>
        <div className='comparisonDesktopBackground'>
            <div className='holdContent'>
                <h2>Sellrly Gets Your Heard</h2>
                <p className='aquaBlue'>We help you rise above the Chaos</p>
                <p>Platform ads? Meh. Same tiny audience, same ghosted vibes. Sellrly puts your stream everywhere—so real buyers actually see you, not just your mom and your one loyal mod.</p>
            
                <div className='tableContent'>
                <div className='Competitors'>
                    <div style={{ visibility: 'hidden' }}>&nbsp;</div> 
                    <CompetitorsDesktop src={Meta} />
                    <CompetitorsDesktop src={TikTok} />
                    <CompetitorsDesktop src={Sellrly} />
                </div>

                <ComparisonRowDesktop layout = "1" text="Cross Platform Reach" />
                <ComparisonRowDesktop layout = "1" text="No Budget Minimums" />
                <ComparisonRowDesktop text="Day Part Advertising" />
                <ComparisonRowDesktop text="Analytics" />
                <ComparisonRowDesktop layout = "1" text="Total Transparency" />
                </div>

                <div className='holdButton'>
                    <PrimaryButton text = "Start a Campaign Now" />
                </div>
            </div>

        </div>
    </div>
  );
}

export default ComparisonDesktop;