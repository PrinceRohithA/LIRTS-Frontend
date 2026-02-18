import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin } from 'lucide-react';
import '../App.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <MapPin className="logo-icon" />
          <span>LIRTS</span>
        </Link>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/submit" className="nav-links" onClick={() => setIsOpen(false)}>Report Issue</Link>
          </li>
          <li className="nav-item">
            <Link to="/track" className="nav-links" onClick={() => setIsOpen(false)}>Track</Link>
          </li>
          <li className="nav-item">
            <Link to="/admin" className="nav-links admin-link" onClick={() => setIsOpen(false)}>Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
