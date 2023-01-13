import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLessThan, FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const iconStyle = {
    color: 'rgb(212, 209, 209)',
    cursor: 'pointer',
    textDecoration: 'none',
  };

  return (
    <Navbar>
      <nav>
        <ul className="navLinks">
          <li>
            <Link to="/" style={iconStyle}>
              <FaLessThan className="lessthan" style={iconStyle} />
              Home
            </Link>
          </li>
          <li className="headerList">
            <h1>Fiat Currencies</h1>
          </li>
          <li className="headerList">
            <div className="icons-class">
              <FaMicrophone style={iconStyle} />
              <FiSettings style={iconStyle} />
            </div>
          </li>
        </ul>
      </nav>
    </Navbar>
  );
};

export default Header;
