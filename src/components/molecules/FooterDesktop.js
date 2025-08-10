import React from 'react';
import '../../index.css';
import SellrlyFooter from '../../images/SellrlyFooter.svg'


function FooterDesktop(props) {
  return (
    <div className='FooterDesktop'>
        <img className = "SellrlyFooter" src={SellrlyFooter} alt='Sellrly Logo'/>
    </div>
  );
}

export default FooterDesktop;