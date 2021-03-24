import React from 'react';
import Popup from './Popup';

function PopupWithForm(props){
  const { name, title, children, onSubmit, textSubmitBtn, isOpen, onClose, } = props;
  
  return (
    <Popup 
    name="popup__container"
    isOpen={isOpen}
    onClose={onClose}
    >
      <form
      className={`popup__content popup__content_theme_${name}`}
      noValidate
      onSubmit={onSubmit}
    >
        <h2 className="popup__title popup__title_theme_profile">{title}</h2>
        <div className="popup__fields">
          {children}
          <button type="submit" className="button button_submit">
            {textSubmitBtn}
          </button>
        </div>
      </form>
    </Popup>
  );
}

export default PopupWithForm;
