import React from 'react';
import '../../index.css'
import WhoWeServeSectionDesktop from '../atoms/WhoWeServeSectionDesktop';
import HobbyReseller from '../../images/HobbyResaler.svg';
import Boutique from '../../images/Boutique.svg';
import IndieSkincare from '../../images/IndieSkincare.png';
import GadgetRetailer from '../../images/GadgetRetailer.png';
import FitnessCoachh from '../../images/FitnessCoach.png';



function WhoWeServeContainerDesktop(props) {
  return (
    
    <div className='holdWhoWeServe'>
        <WhoWeServeSectionDesktop 
            emphasis = "Fashion" 
            headerText = "Boutique Clothing Brand"
            src = {Boutique}
            firstLine = "Boost live stream views and sales during drops"
            secondLine = "Target ads for stylish buyers on fashion blogs"
            thirdLine = "Retarget viewers during peak hours"
            fourthLine = "High Audience Growth"
            fifthLine = "Increased Conversion rate"
            sixthLine = "Revenue Surge"
         />
        <WhoWeServeSectionDesktop 
            emphasis = "Sports Cards & Collectables" 
            headerText = "Hobby Seller on Whatnot"
            src = {HobbyReseller}
            id = "row-reverse"
            firstLine = "Engage collectors to boost bids on cards"
            secondLine = "Ads on forums, YouTube, and betting sites"
            thirdLine = "Target buyers of baseball & basketball cards"
            fourthLine = "Increased Bidding Activity"
            fifthLine = "Increased Average Sale Price"
            sixthLine = "High ROI"
         />
        <WhoWeServeSectionDesktop 
            emphasis = "Personal Care" 
            headerText = "Indie Skincare Brand"
            src = {IndieSkincare}
            firstLine = "Sell clean beauty products with live demos"
            secondLine = "Targeted campaigns for eco & cruelty-free communities"
            thirdLine = "Retarget viewers with limited-time discounts"
            fourthLine = "Increased Bidding Activity"
            fifthLine = "Increased Average Sale Price"
            sixthLine = "High ROI"
         />
        <WhoWeServeSectionDesktop 
            emphasis = "Tech" 
            headerText = "Gadget Retailer Selling Smart Home Devices"
            src = {GadgetRetailer}
            id = "row-reverse"
            firstLine = "Launch a new smart home bundle during a 3-day live selling event"
            secondLine = "Campaign targeting tech enthusiasts and early adopters."
            thirdLine = "Display ads on tech blogs, Reddit, and YouTube review channels synced to liveevent times"
            fourthLine = "Increased Click-Through Rate"
            fifthLine = "Bundle Sales Jump"
            sixthLine = "Revenue Lift"
         />
        <WhoWeServeSectionDesktop 
            emphasis = "Health & Wellness" 
            headerText = "Fitness Coach Selling Supplements"
            src = {FitnessCoachh}
            firstLine = "Attract health-conscious buyers for recurring subscriptions."
            secondLine = "Ads on recipe blogs, fitness apps, and podcast networks"
            thirdLine = "Algorithm for high-intent recurring product buyers"
            fourthLine = "New Audience Reach"
            fifthLine = "Subscription Sign-Up Surge"
            sixthLine = "ROI Increase"
        />
    </div>
  );
}

export default WhoWeServeContainerDesktop;