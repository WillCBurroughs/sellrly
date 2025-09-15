import '../../index.css'
import EmphasisIcon from './EmphasisIcon';
import GoalDesktop from '../../images/GoalDesktop.svg'
import LineItemWhoWeServe from './LineItemWhoWeServe';
import Strategy from '../../images/Strategy.svg';
import Results from '../../images/Results.svg';

function WhoWeServeSectionMobile(props) {
  return (
    <>
    <div className='benefitDivMobileServices' id= {props.addSpace}>
        <h2 className='benefitTextServicesMobile'>
            <div>
                <EmphasisIcon className = "emphasisAdjust" text = {props.emphasis}/>
            </div>
            {props.headerText}
        </h2>
        <div className='mainContentMobileWhoWeServe' id= {props.id}>
            <div className='ImageContentMobileWhod'>
                <img className = "MobileImage" src= {props.src} alt={props.alt || "unknow"}/>
            </div>
            <div className='TextContentWhoWeServe'>
                <img src = {GoalDesktop} alt='Goal'/>
                <LineItemWhoWeServe imgSrc = "2" text = {props.firstLine}/>
                <img src = {Strategy} style={{marginTop: "10px"}} alt='Strategy'/>
                <LineItemWhoWeServe imgSrc = "3" text = {props.secondLine}/>
                <LineItemWhoWeServe imgSrc = "3" text = {props.thirdLine}/>
                <img src = {Results} style={{marginTop: "10px"}} alt='Results' />
                <LineItemWhoWeServe imgSrc = "1" text = {props.fourthLine}/>
                <LineItemWhoWeServe imgSrc = "1" text = {props.fifthLine}/>
                <LineItemWhoWeServe imgSrc = "1" text = {props.sixthLine}/>              
            </div>
        </div>
    </div>
    </>
  );
}

export default WhoWeServeSectionMobile;