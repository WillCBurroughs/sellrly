import React from 'react';
import '../../index.css';
import SellrlyFooter from '../../images/SellrlyFooter.svg';
import PrimaryButton from '../atoms/PrimaryButton';
import Facebook from '../../images/Facebook.svg';
import Instagram from '../../images/Instagram.svg';
import Youtube from '../../images/Youtube.svg';
import LinkedIn from '../../images/Linkedin.svg';
import { Link } from 'react-router-dom';

        
function MobileFooter(props){
    return(        
        <div className='FooterMobileTerms' id= {props.id}>
        <img className = "SellrlyFooter" src={SellrlyFooter} alt='Sellrly Logo'/>
        <h3 className='OutshineFooterMobile'>Outsell. Outshine. Outdo.</h3>
        <PrimaryButton text = "Get Started with Sellrly" id = "FooterPrimary"/>
        <div className='SocialIconsDesktop'>
            <img src= {Facebook} alt='Facebook Sellrly'/>
            <img src = {Instagram} alt = "Instagram Sellrly" />
            <img src = {Youtube} alt = "Youtube Sellrly" />
            <img src = {LinkedIn} alt = "Linkedin Sellrly" />
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
                2025 @ Sellrly All Rights Reserved | <br></br> Powered by <a className = "custom-link" href='https://bcsolutions.dev'>BC Solutions </a>
            </p>

            <p>
              <Link to="/terms-of-service" className="custom-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <u>Terms and Conditions</u>
              </Link> & <br></br>
              <Link to="/privacy-policy" className="custom-link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <u> Privacy Policy</u>
              </Link>
            </p>
        </div>
    </div>
    )
}

export default MobileFooter;


