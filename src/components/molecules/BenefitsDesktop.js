import React, { useState } from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import SecondaryButton from '../atoms/SecondaryButton';
import PrimaryButton from '../atoms/PrimaryButton';
import BenefitTile from '../atoms/BenefitTile';
import CrossPlatform from '../../images/CrossPlatform.svg';
import trackAnalyticsInActive from '../../images/trackAnalyticsInActive.svg';
import GetMoreViewsInActive from '../../images/GetMoreViewsInActive.svg';
import MakeMoreSalesInActive from '../../images/MakeMoreSellsInActive.svg';

function BenefitsDesktop(props) {

    const [activeTile, setActiveTile] = useState(null);

    // Changes state to active tile selected
    const handleTileClick = (tileName) => {
        setActiveTile(tileName);
    };


  return (
    // Row
    <div className='BenefitsDesktop'>

        {/* Left side benefits - column */}
        <div className='BenefitsLeft'>
            <EmphasisIcon text = "Sell Cross Platform"/>
            <h2>
                Total Reach Streaming
            </h2>
            {/* div for buttons row */}
            <p>
                You could run ads on your platform... but that’s just yelling into a tiny room. And let’s be honesttheir algorithm has probably already ghosted you.
            </p>
            <p>
                Meanwhile, <strong>95 MILLION </strong>live shoppers are out there... not watching you!
            </p>
            <p>
                Sellrly flips the script.
            </p>
            <div className='ButtonHolderLeft'>
                <SecondaryButton text = "Learn More" />
                <PrimaryButton text = "Get Started" />
            </div>
        </div>

        {/* Right side benefits */}
        <div className='BenefitsRight'>
            {/* Left column benefits */}
            <div className='ColumnBenefit'>
                {/* Sell Cross platform */}
                <div>
                    <BenefitTile 
                        text="Sell Cross Platform"
                        src = {CrossPlatform}
                        isActive={activeTile === 'sell'}
                        onClick={() => handleTileClick('sell')}
                    />
                </div>
                {/* Get more views */}
                <div>
                    <BenefitTile 
                        text = "Track Analytics"
                        src = {trackAnalyticsInActive}
                        isActive={activeTile === 'analytics'}
                        onClick={() => handleTileClick('analytics')}
                    />
                </div>

            </div>

            {/* Right Column benefits */}
            <div className='ColumnBenefit'>
                {/* Track Analytics */}
                <div>
                    <BenefitTile 
                        text = "Get More Views"
                        src = {GetMoreViewsInActive}
                        isActive={activeTile === 'views'}
                        onClick={() => handleTileClick('views')}
                    />
                </div>
                {/* Make More Sales */}
                <div>
                    <BenefitTile 
                        text = "Make More Sales"
                        src = {MakeMoreSalesInActive}
                        isActive={activeTile === 'sales'}
                        onClick={() => handleTileClick('sales')}
                    />
                </div>

            </div>
        </div>
    </div>
  );
}

export default BenefitsDesktop;