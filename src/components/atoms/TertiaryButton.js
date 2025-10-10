import React from 'react';
import '../../index.css'

function TertiaryButton(props) {
  return (
    <a 
      className = "navlink-reset"
      href = "https://cms.sellrly.com/account_registration"
      onClick = {() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <button className='TertiaryButton'>
        {props.text}
      </button>
    </a>
  );
}

export default TertiaryButton;