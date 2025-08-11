import React from 'react';
import '../../index.css';

function NavBarItem(props) {
  return (
    <p className='NavItem'>
      {props.text}
    </p>
  );
}

export default NavBarItem;