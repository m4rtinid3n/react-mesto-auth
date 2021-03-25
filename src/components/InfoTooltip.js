import React from 'react';
import success from '../images/info_yes.svg';
import unsuccess from '../images/info_no.svg';

const InfoTooltip = ({ isSuccess, isOpen, onClose }) => {
  const imgUnsuccess = <img src={unsuccess} alt="Успешно"/>;
  const imgSuccess = <img src={success} alt="Неудача"/>;
  const className = `popup popup_theme_image ${isOpen && 'popup_opened'}`;
  return (
    <section className={className} >
    <div className="popup__container popup__container_theme_info">
    <button type="button" className="button popup__close"
                onClick={onClose}
        >
        </button>
      {isSuccess ? imgSuccess : imgUnsuccess}
      <h2 className="popup__title popup__title_theme_info">
        {isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
      </h2>
    </div>
   </section>
  );
};

export default InfoTooltip;
