import React from 'react';
import '../../index.css';
import TertiaryButton from '../atoms/TertiaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import DesktopFAQSDropdown from '../atoms/DesktopFAQSDropdown';


export default function MobileBottomSection(props) {

    const [active, setActive] = React.useState("top");

  return (
    <>
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
        <div className='PreFooterDesktop' id = {props.prefooterid}>
        <div className='PreFooterDesktopBackground'>
              
              <div  
                className={`preFooterBigDivDesktop ${active === "top" ? "active" : "inactive"}`}
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
               className={`preFooterBigDivDesktop ${active === "bottom" ? "active" : "inactive"}`}
               onMouseEnter={() => setActive("bottom")} >
                <h2 className='bigdesktopheader'>
                  Still Have Questions
                </h2>
                <SecondaryButton text = "Contact Us" id = "secondaryRightDesktopBig"/>

              </div>
        </div>
    </div>
    </>
  );
}