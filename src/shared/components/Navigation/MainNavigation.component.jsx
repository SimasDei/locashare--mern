import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.styles.scss';

import MainHeader from './MainHeader.component';
import NavLinks from './NavLinks.component';

const MainNavigation = () => {
  return (
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>LocaShare</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
};

export default MainNavigation;
