import '../../index.css'

function AboutUsBannerDesktop(props) {
  return (
    <div className='benefitDivDesktopServices'>
        <div className='mainContentAboutBanner' id= {props.id}>
            <div className='TextContentDesktopServices'>
                <h5 className='SecondaryHeaderDesktopServices' id = {props.hID}>
                    {props.secondaryHeader}
                </h5>
                <p className='paragraphContentDesktopServices' id = {props.pID}>
                    {props.paragraphContent}
                </p>
            </div>
            <div className='ImageContentDesktopServices'>
                <img src= {props.src} alt={props.alt || "unknow"}/>
            </div>
        </div>
    </div>
  );
}

export default AboutUsBannerDesktop;