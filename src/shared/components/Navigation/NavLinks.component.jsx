import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.styles.scss';

const links = [
  { url: '/', title: 'All Users', exact: true },
  { url: '/u1/places', title: 'My Places', exact: false },
  { url: '/places/new', title: 'New Place', exact: false },
  { url: '/auth', title: 'Authenticate', exact: false },
];

const NavLinks = () => {
  return (
    <ul className='nav-links'>
      {links.map(({ url, title, exact }) => (
        <NavLink to={url} exact={exact}>
          {title}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavLinks;
