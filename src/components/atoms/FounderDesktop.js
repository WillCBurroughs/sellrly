import '../../index.css'

function FounderDesktop(props) {
  return (
    <div className='FounderDesktop' id={props.id}>
        <div className='FounderTextDesktop'>
            <span className='DecorationDesktop'></span>
            <h3>
                {props.founderName}
            </h3>
            <p className='blb' id = "FounderTitle">
                {props.founderTitle}
            </p>
            <p>
                {props.founderFirstLines}
            </p>
            <p>
                {props.founderNextLines}
            </p>
        </div>
        <div className='FounderImageDesktop'>
            <img src= {props.founder} alt='Founder'/>
        </div>
    </div>
  );
}

export default FounderDesktop;