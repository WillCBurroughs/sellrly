import '../../index.css'
import EmphasisIcon from './EmphasisIcon';
import GoalDesktop from '../../images/GoalDesktop.svg'
import LineItemWhoWeServe from './LineItemWhoWeServe';
import Strategy from '../../images/Strategy.svg';
import Results from '../../images/Results.svg';

function WhoWeServeSectionDesktop(props) {
  return (
    <>
    <EmphasisIcon text = {props.emphasis}/>
    <div className='benefitDivDesktopServices'>
        <h2 className='benefitTextServices'>
            {props.headerText}
        </h2>
        <div className='mainContentDesktopWhoWeServe' id= {props.id}>
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
            <div className='ImageContentDesktopWhod'>
                <img src= {props.src} alt={props.alt || "unknow"}/>
            </div>
        </div>
    </div>
    </>
  );
}

export default WhoWeServeSectionDesktop;