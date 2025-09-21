import React, { useState } from 'react';
import '../../index.css';
import CompetitorsDesktop from '../atoms/CompetitorsDesktop';
import Meta from '../../images/MetaCompetitor.svg';
import TikTok from '../../images/TikTokCompetitor.svg';
import Sellrly from '../../images/SellrlyMobileCompetitor.svg';
import ComparisonRowMobile from '../atoms/ComparisonRowMobile';
import SecondaryButton from '../atoms/SecondaryButton';
import LeftArrow from '../../images/LeftArrow.svg';
import RightArrow from '../../images/RightArrow.svg';

function ComparisonMobile() {
  // Store competitors in an array
  const competitors = [
    { 
      name: 'Sellrly',
      logo: Sellrly,
      features: [true, true, true, true, true] 
    },
    { 
      name: 'Meta',
      logo: Meta,
      features: [false, false, true, true, false] 
    },
    { 
      name: 'TikTok',
      logo: TikTok,
      features: [false, false, true, true, false] 
    }
  ];

  const featuresList = [
    "Cross Platform Reach",
    "No Budget Minimums",
    "Day Part Advertising",
    "Analytics",
    "Total Transparency"
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + competitors.length) % competitors.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % competitors.length);
  };

  const activeCompetitor = competitors[activeIndex];

  return (
    <div className='comparisonMobile'>
      <div className='comparisonMobileBackground'>
        <div className='holdContentMobile'>
          <h2 className='mobileAdjustComparison'>So how are you supposed to get heard?</h2>
          <p className='aquaBlueMobile'>How are you supposed to rise above the chaos?</p>
          <p className='aquaBlueAlt'>
            You could use your platform’s built-in ad tools. But then you’re stuck talking to a limited audience—
            and odds are, the algorithm’s already ghosted you.
          </p>

          {/* Competitor slider */}
          <div className='tableContent'>
            <div className='CompetitorsMobile'>
              <button onClick={handlePrev} className='arrowbutton'><img src= {LeftArrow} alt='Left Arrow' aria-label="See Competitor"/></button>
              <CompetitorsDesktop src={activeCompetitor.logo} />
              <button onClick={handleNext} className="arrowbutton"><img src= {RightArrow} alt='Right Arrow' aria-label="See Competitor"/></button>
            </div>

            {featuresList.map((feature, index) => (
              <ComparisonRowMobile
                key={index}
                text={feature}
                hasFeature={activeCompetitor.features[index]}
              />
            ))}
          </div>

          <div className='holdButton'>
            <SecondaryButton text="Start a Campaign Now" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparisonMobile;