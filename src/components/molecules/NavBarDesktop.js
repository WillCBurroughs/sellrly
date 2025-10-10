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
        <Link className="navlink-reset" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end>
          <div className='logoLeft'>
            <LogoTagline />
          </div>
        </Link>
        <div className='linksNavDesktop'>
          <NavLink className="navlink-reset" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end><NavBarItem text="Home" /></NavLink>
          <NavLink className="navlink-reset" to="Services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end><NavBarItem text="Services" /></NavLink>
          <NavLink className="navlink-reset" to="Who-We-Serve" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end><NavBarItem text="Who We Serve" /></NavLink>
          <NavLink className="navlink-reset" to="About-Us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end><NavBarItem text="About Us" /></NavLink>
          <NavLink className="navlink-reset" to="Contact-Us" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} end><NavBarItem text="Contact Us" /></NavLink>
        </div>
        <div className='login-signup'>
        <a
          className="navlink-reset"
          href="https://cms.sellrly.com/signin"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        ><SecondaryButton text="Log In" /></a>
        <a
          className="navlink-reset"
          href="https://cms.sellrly.com/account_registration"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        ><PrimaryButton text="Sign Up" /></a>
        </div>
      </div>
    </nav>
  );
}