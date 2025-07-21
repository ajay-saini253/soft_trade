import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo/company_logo.png';
import { FiCalendar, FiChevronDown } from 'react-icons/fi';

const menuItems = [
  { label: 'HOME', hash: '#home' },
  { label: 'Industries', hash: '#industries', hasDropdown: true },
  { label: 'Features', hash: '#features', hasDropdown: true },
  { label: 'Resources', hash: '#resources', hasDropdown: true },
  { label: 'Pricing', hash: '#pricing' },
];

const Header = () => {
  const [active, setActive] = useState('HOME');

  const handleMenuClick = (label) => {
    setActive(label);
  };

  return (
    <header className="main-header bg-white border-bottom">
      <div className="container py-2">
        <div className="row align-items-center justify-content-between flex-nowrap">
          {/* Logo */}
          <div className="col-auto d-flex align-items-center">
            <Link to="#home" className="header-logo">
              <img src={logo} alt="logo" className="rounded-3" style={{ height: 48, width: 'auto' }} />
            </Link>
          </div>
          {/* Menu */}
          <nav className="col d-flex justify-content-center">
            <ul className="header-menu d-flex align-items-center mb-0 list-unstyled gap-4">
              {menuItems.map((item) => (
                <li key={item.label} className="position-relative">
                  <Link
                    to={item.hash}
                    onClick={() => handleMenuClick(item.label)}
                    className={`header-link px-2 fw-bold ${active === item.label ? 'header-link-active gradient-text' : 'text-secondary'}`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <FiChevronDown className="ms-1" style={{ fontSize: 18, verticalAlign: 'middle' }} />
                    )}
                  </Link>
                  {active === item.label && <div className="header-underline mx-auto"></div>}
                </li>
              ))}
            </ul>
          </nav>
          {/* Book Free Demo Button */}
          <div className="col-auto d-flex justify-content-end">
            <Link
              to="#book-demo"
              className="btn btn-outline-dark d-flex align-items-center px-4 py-2 fw-bold rounded-pill shadow-none"
              style={{ fontSize: 18 }}
            >
              <FiCalendar size={22} className="me-2" />
              Book Free Demo
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;