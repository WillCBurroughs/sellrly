import React, { useState } from 'react';
import '../../index.css'
import LogoTagline from '../atoms/LogoTagline';
import NavBarItem from '../atoms/NavBarItem';
import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import { Link, NavLink } from "react-router-dom";
import hamburgerMenuClosed from '../../images/HamburgerMenu.png';

export default function NavBarMobile() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className='NavDesktop'>
        <div className='logoLeft'>
          <LogoTagline />
        </div>
        <div className='hamburger'>
          <img src={hamburgerMenuClosed} className='hamburgerMenu'/>
        </div>
      </div>
    </nav>
  );
}