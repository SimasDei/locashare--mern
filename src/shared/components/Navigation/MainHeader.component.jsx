import React from 'react';

import './MainHeader.syyles.scss';

const MainHeader = ({ children }) => {
  return <header className='main-header'>{children}</header>;
};

export default MainHeader;
