import { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('');

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setTimeout(() => {
      setClick(false);
    }, 300);
  };

  return (
    <div className='navbar'>
      <div className='logo'>
        <Link
          to='/'
          onClick={() => {
            setActiveNav('');
            closeMobileMenu();
          }}
        >
          <span>S</span>O
        </Link>
      </div>
      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'bx bx-x' : 'bx bx-menu'}></i>
      </div>
      <nav className={click ? 'active' : ''}>
        <ul className='nav-menu'>
          <NavLink
            to='/'
            onClick={() => {
              setActiveNav('Home');
              closeMobileMenu();
            }}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to='/Projects'
            onClick={() => {
              setActiveNav('Projects');
              closeMobileMenu();
            }}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Projects
          </NavLink>
          <NavLink
            to='/Resume'
            onClick={() => {
              setActiveNav('Resume');
              closeMobileMenu();
            }}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Resume
          </NavLink>
          <NavLink
            to='/Contact'
            onClick={() => {
              setActiveNav('Contact');
              closeMobileMenu();
            }}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Contact
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
