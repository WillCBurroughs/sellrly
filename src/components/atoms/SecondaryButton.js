import React from 'react';
import '../../index.css'

function SecondaryButton(props) {
  return (
    <a 
      className = "navlink-reset"
      href = {props.href}
      onClick = {() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <button className='secondaryButton' id= {props.id}>
        {props.text}
      </button>
    </a>
  );
}

export default SecondaryButton;