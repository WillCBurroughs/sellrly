import React from 'react';
import '../../index.css';
import SecondaryButton from '../atoms/SecondaryButton';

function PreFooterDesktop(props) {

  const [active, setActive] = React.useState("left");

  return (
    <div className='PreFooterDesktop' id = {props.id}>
        <div className='PreFooterDesktopBackground'>
              
              <div  
                className={`preFooterBigDivDesktop ${active === "left" ? "active" : "inactive"}`}
                onMouseEnter={() => setActive("left")}
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
               className={`preFooterBigDivDesktop ${active === "right" ? "active" : "inactive"}`}
               onMouseEnter={() => setActive("right")} >
                <h2 className='bigdesktopheader'>
                  Still Have Questions
                </h2>
                <SecondaryButton text = "Contact Us" id = "secondaryRightDesktopBig"/>

              </div>
        </div>
    </div>
  );
}

export default PreFooterDesktop;