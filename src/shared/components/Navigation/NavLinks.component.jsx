import React from 'react';
import { NavLink } from 'react-router-dom';

import links from './links.data';
import './NavLinks.styles.css';

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      {links.map(({ url, title, exact }) => (
        <NavLink key={url} to={url} exact={exact}>
          {title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavLinks;
