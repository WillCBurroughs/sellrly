import '../../index.css'
import EmphasisIcon from './EmphasisIcon';

function AboutUsTopSections(props) {
  return (
    <>
    <div className='benefitDivMobileAboutUs' id= {props.addSpace}>
        <div className='mainContentMobileWhoWeServe' id= {props.id}>
            <div className='ImageContentMobileWhod'>
                <img className = "MobileImage" src= {props.src} alt={props.alt || "unknow"} id = {props.imgID} />
            </div>
                <h4 className='AboutextServicesMobile'>
                    {props.headerText}
                </h4>
            <div className='TextContentAboutMobile'>
                <p>
                    {props.text}
                </p>          
            </div>
        </div>
    </div>
    </>
  );
}

export default AboutUsTopSections;