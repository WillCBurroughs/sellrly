import PrimaryButton from '../atoms/PrimaryButton';
import SecondaryButton from '../atoms/SecondaryButton';
import { NavLink } from "react-router-dom";
import NavBarItem from './NavBarItem';

export default function MobileMenuDropdown({ closeMenu }) {
  return (
    <div className='mobileMenuDropdown'>
      <NavLink className="navlink-reset" to="/" end onClick={closeMenu}>
        <NavBarItem text="Home" />
      </NavLink>
      <NavLink className="navlink-reset" to="/Services" end onClick={closeMenu}>
        <NavBarItem text="Services" />
      </NavLink>
      <NavLink className="navlink-reset" to="/Who-We-Serve" end onClick={closeMenu}>
        <NavBarItem text="Who We Serve" />
      </NavLink>
      <NavLink className="navlink-reset" to="/About-Us" end onClick={closeMenu}>
        <NavBarItem text="About Us" />
      </NavLink>
      <NavLink className="navlink-reset" to="/Contact-Us" end onClick={closeMenu}>
        <NavBarItem text="Contact Us" />
      </NavLink>

      <div className='login-signup-mobile'>
        <NavLink className="navlink-reset" to="/Log-In" end onClick={closeMenu}>
          <SecondaryButton text="Log In" />
        </NavLink>
        <NavLink className="navlink-reset" to="/Sign-Up" end onClick={closeMenu}>
          <PrimaryButton text="Sign Up" />
        </NavLink>
      </div>
    </div>
  );
}


