import React from 'react';

function PopupWithForm(props){
  const { name, isOpen, title, children, onSubmit, textSubmitBtn, } = props;
  
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
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
    </div>
  );
}

export default PopupWithForm;
