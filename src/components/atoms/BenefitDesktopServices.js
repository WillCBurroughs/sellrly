import '../../index.css'

function BenefitDesktopServices(props) {
  return (
    <div className='benefitDivDesktopServices'>
        <h2 className='benefitTextServices'>
            {props.headerText}
        </h2>
        <div className='mainContentDesktopServices' id= {props.id}>
            <div className='TextContentDesktopServices'>
                <h5 className='SecondaryHeaderDesktopServices'>
                    {props.secondaryHeader}
                </h5>
                <p className='paragraphContentDesktopServices'>
                    {props.paragraphContent}
                </p>
                <p className='paragraphContentDesktopServicesSecondary'>
                    {props.paragraphContentSecondary}
                </p>
            </div>
            <div className='ImageContentDesktopServices'>
                <img src= {props.src} alt={props.alt || "unknow"}/>
            </div>
        </div>
    </div>
  );
}

export default BenefitDesktopServices;