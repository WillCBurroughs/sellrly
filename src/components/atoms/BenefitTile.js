import '../../index.css'

function BenefitTile(props) {
  return (
    <button 
        className={`benefitTile ${props.isActive ? 'activeTile' : 'inactiveTile'}`}
        id={props.id || undefined}    
        onClick={props.onClick}
    >
        {props.text || "Default Text"}
        <img
            id= {props.imgID || "Undefined"}
            src={props.src || "Undefined"}
            alt = {props.alt || "undefined"}
            className = {props.imgClass}
        />
    </button>
  );
}

export default BenefitTile;