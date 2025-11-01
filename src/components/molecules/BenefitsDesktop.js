import React, { useState } from 'react';
import '../../index.css';
import EmphasisIcon from '../atoms/EmphasisIcon';
import SecondaryButton from '../atoms/SecondaryButton';
import PrimaryButton from '../atoms/PrimaryButton';
import BenefitTile from '../atoms/BenefitTile';
import CrossPlatform from '../../images/CrossPlatform.svg';
import CrossPlatformInactive from '../../images/CrossPlatformInActive.svg';
import trackAnalyticsInActive from '../../images/trackAnalyticsInActive.svg';
import trackAnalyticsActive from '../../images/trackAnalyticsActive.svg';
import GetMoreViewsInActive from '../../images/GetMoreViewsInActive.svg';
import GetMoreViewsActive from '../../images/GetMoreViewsActive.svg';
import MakeMoreSalesInActive from '../../images/MakeMoreSellsInActive.svg';
import MakeMoreSalesActive from '../../images/MakeMoreSellsActive.svg';

function BenefitsDesktop(props) {

    const [activeTile, setActiveTile] = useState('sell');

    // Used to keep 
    const tileData = {
        sell: {
            label: "Sell Cross Platform",
            description: `You could run ads on your platform... but that’s just yelling into a tiny room. And let’s be honest their algorithm has probably already ghosted you. \n \n Meanwhile, 95 MILLION live shoppers are out there... not watching you! \n \n Sellrly flips the script.`  
        },
        views: {
            label: "Get More Views",
            description: `Over 100M shoppers in the U.S. buy from live sellers. TikTok, Whatnot, and the rest? They only hit a slice of that crowd. \n \n Sellrly goes bigger—spanning the entire web and every platform to drop your stream in front of the right viewers, right when it count`
        },
        analytics: {
            label: "Track Analytics",
            description: `Analytics show you what’s actually working—who’s watching, clicking, and buying. Without it, you’re just throwing money at the algo and praying it hits. \n \n With our analytics, you can: \n Spot your hype moments (what made people click) \n Drop dead weight (stop wasting cash on flops) \n Double down on what slaps(scale the ads that bring the bag) \n \n “Track It. Hack It. Cash It.”`
        },
        sales: {
            label: "Make More Sales",
            description: `Running ads when you’re not live? Okay for awareness, but it won’t move product. \n \n Sellrly’s exclusive algorithm hits ready-to-buy shoppers while you’re streaming—getting you the right eyes at the right time to boost sales, stack profits, and grow your brand`
        }
    };

    // Changes state to active tile selected
    const handleTileClick = (tileName) => {
        setActiveTile(tileName);
    };


  return (
    // Row
    <div className='BenefitsDesktop'>

        {/* Left side benefits - column */}
        <div className='BenefitsLeft'>
            <EmphasisIcon text = {tileData[activeTile].label}/>
            <h2>
                Total Reach Streaming
            </h2>
            {/* div for buttons row */}
            <p style={{ whiteSpace: 'pre-line' }}>
                {tileData[activeTile].description}
            </p>
            <div className='ButtonHolderLeft'>
                <SecondaryButton text = "See Services" href = "/services" />
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
                        src = {activeTile === 'sell' ? CrossPlatform : CrossPlatformInactive}
                        isActive={activeTile === 'sell'}
                        onClick={() => handleTileClick('sell')}
                    />
                </div>
                {/* Get more views */}
                <div>
                    <BenefitTile 
                        text = "Track Analytics"
                        src = {activeTile === 'analytics' ? trackAnalyticsActive : trackAnalyticsInActive}
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
                        src = {activeTile === 'views' ? GetMoreViewsActive : GetMoreViewsInActive}
                        isActive={activeTile === 'views'}
                        onClick={() => handleTileClick('views')}
                    />
                </div>
                {/* Make More Sales */}
                <div>
                    <BenefitTile 
                        text = "Make More Sales"
                        src = {activeTile === 'sales' ? MakeMoreSalesActive : MakeMoreSalesInActive}
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