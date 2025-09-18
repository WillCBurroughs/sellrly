import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import DesktopFAQSDropdown from '../atoms/DesktopFAQSDropdown';
import SellrlyFooter from '../../images/SellrlyFooter.svg'
import PrimaryButton from '../atoms/PrimaryButton';
import Facebook from '../../images/Facebook.svg'
import Instagram from '../../images/Instagram.svg'
import Youtube from '../../images/Youtube.svg'
import LinkedIn from '../../images/Linkedin.svg'


export default function MobileBottomSection(props) {

    const [active, setActive] = React.useState("top");

  return (
    <>
    <div className='spacer' id = {props.spacer}>
    <div className='FAQSMobile' id= {props.id}>
        <div className='leftHeroAboveFold'>
            <h1>
                Frequently Asked Questions
            </h1>
            <p className='blr' id='faqMobile'>We serve as a convenient resource for users, customers, or readers to find solutions to their queries.</p>
        </div>

        <div className='rightHeroAboveFold'>
            <DesktopFAQSDropdown id = "mobileDropdown" />
        </div>
    </div>
        <div className='PreFooterMobile' id = {props.prefooterid}>
        <div className='PreFooterDesktopBackground' id = {props.prefooterdesktop}>
              
              <div  
                className={`preFooterBigDivDesktop ${active === "top" ? "active" : "inactive"} ${props.newclassbigdiv}`}
                onMouseEnter={() => setActive("top")}
              >
                <h2 className='bigdesktopheader'>
                  Let’s Build a Bigger Audience for You
                </h2>
                <p className='bigdesktopP'>
                  Start reaching more people today. Turning views into sales and unlock powerful analytics that maximize ROI.
                </p>
                <SecondaryButton text = "Start Growing Together" id = "secondaryLeftDesktopBig"/>
              </div>
              
              <div 
               className={`preFooterBigDivDesktop ${active === "bottom" ? "active" : "inactive"} ${props.newclassbigdiv}`}
               onMouseEnter={() => setActive("bottom")} >
                <h2 className='bigdesktopheader'>
                  Still Have Questions
                </h2>
                <SecondaryButton text = "Contact Us" id = "secondaryRightDesktopBig"/>

              </div>
        </div>
    </div>
        <div className='FooterMobile' id= {props.id}>
        <img className = "SellrlyFooter" src={SellrlyFooter} alt='Sellrly Logo'/>
        <h5 className='OutshineFooterMobile'>Outsell. Outshine. Outdo.</h5>
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
                2025 @ Sellrly All Rights Reserved
            </p>
            <p>
                <u>Terms and Conditions</u> & <u>Privacy Policy</u>
            </p>
        </div>
    </div>
    </div>
    </>
  );
}