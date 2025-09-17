import '../../index.css'
import EmphasisIcon from './EmphasisIcon';

function AboutUsFounder(props) {
  return (
    <>
    <div className='benefitDivMobileAboutUs' id= {props.addSpace}>
        <div className='mainContentMobileFounder' id= {props.id}>
            <div className='ImageContentMobileWhod'>
                <img className = "MobileImage" src= {props.src} alt={props.alt || "unknow"} id = {props.imgID} />
            </div>

            {/* Purely Decorative */}
            <div className='designLine'>
            </div>

            <h4 className='AboutextFounderMobile' id = {props.hID}>
                {props.headerText}
            </h4>
            <p className='TitleMobile'>
                {props.titleMobile}
            </p>
            <div className='TextContentFounderMobile'>
                <p id = {props.pID}>
                    {props.text}
                </p>          
                <p id = {props.pID}>
                    {props.text2}
                </p>     
                <p id = {props.pID}>
                    {props.text3}
                </p>       
            </div>
        </div>
    </div>
    </>
  );
}

export default AboutUsFounder;