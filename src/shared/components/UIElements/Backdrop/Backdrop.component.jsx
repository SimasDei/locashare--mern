import React from 'react';
import ReactDOM from 'react-dom';

import './Backdrop.styles.scss';

const BackDrop = ({ onClick }) => {
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={onClick}></div>,
    document.getElementById('backdrop-hook')
  );
};

export default BackDrop;
