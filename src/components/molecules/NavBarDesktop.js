import React from 'react';
import '../../index.css'
import LogoTagline from '../atoms/LogoTagline';
import NavBarItem from '../atoms/NavBarItem';
import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';

function NavBarDesktop(props) {
  return (
    <div className='NavDesktop'>
        <div className='logoLeft'>
            <LogoTagline/>
        </div>
        <div className='linksNavDesktop'>
            <NavBarItem text = "Home"/>
            <NavBarItem text = "Services"/>
            <NavBarItem text = "Who We Serve" />
            <NavBarItem text = "About Us" />
            <NavBarItem text = "Contact Us" />
        </div>
        <div className='login-signup'>
            <SecondaryButton text = "Log In"/>
            <PrimaryButton text = "Sign Up"/>
        </div>
    </div>
  );
}

export default NavBarDesktop;