import '../../index.css'

function BenefitMobileServices(props) {
  return (
    <div className='benefitDivMobileServices'>
        <h2 className='benefitTextServicesMobile' id = {props.headerID}>
            {props.headerText}
        </h2>
        <div className='mainContentMobileServices' id= {props.id}>
            <div className='TextContentMobileServices'>
                <h5 className='SecondaryHeaderMobileServices'>
                    {props.secondaryHeader}
                </h5>
                <p className='paragraphContentMobileServices'>
                    {props.paragraphContent}
                </p>
                <p className='paragraphContentMobileServicesSecondary'>
                    {props.paragraphContentSecondary}
                </p>
            </div>
            <div className='ImageContentMobileServices'>
                <img className='imgageBenefit' src= {props.src} alt={props.alt || "unknow"}/>
            </div>
        </div>
    </div>
  );
}

export default BenefitMobileServices;