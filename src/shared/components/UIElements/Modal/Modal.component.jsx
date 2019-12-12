import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './Modal.styles.scss';

import Backdrop from '../Backdrop/Backdrop.component';

const ModalOverlay = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  children,
  footerClass,
}) => {
  const content = (
    <div className={`modal, ${className}`} style={style}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
        <form onSubmit={onSubmit ? onSubmit : e => e.preventDefault()}>
          <div className={`modal__content ${contentClass}`}>{children}</div>
          <footer className={`modal__footer ${footerClass}`}></footer>
        </form>
      </header>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
};

const Modal = (props, { show, onCancel }) => {
  return (
    <React.Fragment>
      {show && <Backdrop onClick={onCancel} />}
      <CSSTransition in={props.show} mountOnEnter unmountOnExit timeout={200} classNames='modal'>
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
