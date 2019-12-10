import React from 'react';
import { Link } from 'react-router-dom';

import './MainHeader.styles.scss';

import MainHeader from './MainHeader.component';

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
      <nav>...</nav>
    </MainHeader>
  );
};

export default MainNavigation;
