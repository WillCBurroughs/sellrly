import React from 'react';
import '../../index.css';
import SellrlyFooter from '../../images/SellrlyFooter.svg'
import PrimaryButton from '../atoms/PrimaryButton';
import Facebook from '../../images/Facebook.svg'
import Instagram from '../../images/Instagram.svg'
import Youtube from '../../images/Youtube.svg'
import LinkedIn from '../../images/Linkedin.svg'
import { Link } from 'react-router-dom';

function FooterDesktop(props) {
  return (
    <div className='FooterDesktop' id= {props.id}>
        <img className = "SellrlyFooter" src={SellrlyFooter} alt='Sellrly Logo'/>
        <h2 className='OutshineFooterDesktop'>Outsell. Outshine. Outdo.</h2>
        <PrimaryButton text = "Get Started with Sellrly" id = "FooterPrimary"/>
        <div className='SocialIconsDesktop'>
            <a href='https://www.facebook.com/profile.php?id=61581420927207'><img src= {Facebook} alt='Facebook Sellrly'/></a>
            <img src = {Instagram} alt = "Instagram Sellrly" />
            <img src = {Youtube} alt = "Youtube Sellrly" />
            <a href='https://www.linkedin.com/company/sellrly-com/'><img src = {LinkedIn} alt = "Linkedin Sellrly" /></a>
        </div>
        <p className='blr'>
            P.O. Box 616, Purchase, NY 10577
        </p>
        <div className='decoration'>
        </div>
        <div className='holdLogoDisclosures'>
            <p>
                All product names, logos, and brands are property of their respective owners. 
                All company, product and service names used in this comparison are for identification purposes only.
            </p>
        </div>
        <div className='holdBottomFooter'>
            <p>
                2025 @ Sellrly All Rights Reserved
            </p>
            <p>
               <Link to="/terms-of-service" className="custom-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <u>Terms and Conditions</u>
               </Link>
                <nbsp></nbsp> & <nbsp></nbsp>
               <Link to="/privacy-policy" className="custom-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <u>Privacy Policy</u>
               </Link>
            </p>
        </div>
    </div>
  );
}

export default FooterDesktop;