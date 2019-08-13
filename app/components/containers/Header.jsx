import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="list">
          <li><Link className="link" to='/'>Home</Link></li>
          <li><Link className="link" to='/bills'>Bills</Link></li>
          <li><Link className="link" to='/userinfo'>Account</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;