import React from 'react';
import '../../index.css'
import LogoTagline from '../atoms/LogoTagline';
import NavBarItem from '../atoms/NavBarItem';
import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import { Link, NavLink } from "react-router-dom";

export default function NavBarDesktop() {
  return (
    <nav>
      <div className='NavDesktop'>
        <div className='logoLeft'>
          <LogoTagline />
        </div>
        <div className='linksNavDesktop'>
          <NavLink className="navlink-reset" to="/" end><NavBarItem text="Home" /></NavLink>
          <NavLink className="navlink-reset" to="Services" end><NavBarItem text="Services" /></NavLink>
          <NavLink className="navlink-reset" to="Who-We-Serve" end><NavBarItem text="Who We Serve" /></NavLink>
          <NavLink className="navlink-reset" to="About-Us" end><NavBarItem text="About Us" /></NavLink>
          <NavLink className="navlink-reset" to="Contact-Us" end><NavBarItem text="Contact Us" /></NavLink>
        </div>
        <div className='login-signup'>
          <NavLink className="navlink-reset" to="Log-In" end><SecondaryButton text="Log In" /></NavLink>
          <NavLink className="navlink-reset" to="Sign-Up" end><PrimaryButton text="Sign Up" /></NavLink>
        </div>
      </div>
    </nav>
  );
}