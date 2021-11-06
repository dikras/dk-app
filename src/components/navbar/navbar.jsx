import './navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/main-content" className="nav__link" activeClassName="active-link">Profile</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/dialogs" className="nav__link" activeClassName="active-link">Dialogs</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/news" className="nav__link" activeClassName="active-link">News</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/Music" className="nav__link" activeClassName="active-link">Music</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/Settings" className="nav__link" activeClassName="active-link">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;