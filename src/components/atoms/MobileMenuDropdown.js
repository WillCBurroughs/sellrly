import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import { NavLink } from "react-router-dom";
import NavBarItem from './NavBarItem';

export default function MobileMenuDropdown({ closeMenu, menuID }) {
  return (
    <div className='mobileMenuDropdown' id= {menuID}>
      <NavLink className="navlink-reset" to="/" end onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      }}>
        <NavBarItem text="Home" />
      </NavLink>
      <NavLink className="navlink-reset" to="/Services" end   onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      }}>
        <NavBarItem text="Services" />
      </NavLink>
      <NavLink className="navlink-reset" to="/Who-We-Serve" end   onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      }}>
        <NavBarItem text="Who We Serve" />
      </NavLink>
      <NavLink className="navlink-reset" to="/About-Us" end   onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      }}>
        <NavBarItem text="About Us" />
      </NavLink>
      <NavLink className="navlink-reset" to="/Contact-Us" end   onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeMenu();
      }}>
        <NavBarItem text="Contact Us" />
      </NavLink>

      <div className='login-signup-mobile'>
        <a
          className="navlink-reset"
          href="https://cms.sellrly.com/signin"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        ><SecondaryButton text="Log In" /></a>
        
        <a
        className="navlink-reset"
        href="https://cms.sellrly.com/account_registration"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        <PrimaryButton text="Sign Up" /></a>

      </div>
    </div>
  );
}


