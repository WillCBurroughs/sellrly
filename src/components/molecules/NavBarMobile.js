import React, { useState, useEffect } from 'react';
import '../../index.css'
import LogoTagline from '../atoms/LogoTagline';
import hamburgerMenuClosed from '../../images/HamburgerMenu.svg';
import hamburgerMenuOpened from '../../images/HamburgerMenuOpen.png';
import MobileMenuDropdown from '../atoms/MobileMenuDropdown';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function NavBarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <>
      <nav>
        <div className='NavMobile'>
          <Link className="navlink-reset" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end>
            <div className='logoLeft'>
              <LogoTagline />
            </div>
          </Link>
          <div className='hamburger'>
            <img
              src={isOpen ? hamburgerMenuOpened : hamburgerMenuClosed}
              className='hamburgerMenu'
              alt="menu"
              onClick={() => setIsOpen(o => !o)}
            />
          </div>
        </div>
      </nav>

      {isOpen && (
        <MobileMenuDropdown closeMenu={() => setIsOpen(false)} />
      )}
    </>
  );
}