import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../images/logo.png';
import { links } from '../data';
import { GoThreeBars } from 'react-icons/go';
import { MdOutlineClose } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <nav>
      <div className="container nav__container">
        <Link onClick={() => setIsNavShowing(false)} to="/" className="logo">
          <img src={Logo} alt="Nav Logo" />
        </Link>
        <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active-nav' : '')}
                  to={path}
                  onClick={() => setIsNavShowing((prev) => !prev)}>
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button onClick={() => setIsNavShowing((prev) => !prev)} className="nav__toggle-btn">
          {isNavShowing ? <MdOutlineClose /> : <GoThreeBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
