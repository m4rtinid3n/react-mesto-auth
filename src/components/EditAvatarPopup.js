import React, { useContext, useRef } from 'react';
import Popup from './Popup';
import PopupWithForm from './PopupWithForm';
import { TextForSubmitBtn } from '../contexts/TextForSubmitBtn';


export const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = useRef();
  const textForSubmitBtn = useContext(TextForSubmitBtn);
  const handleSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
   <Popup
     name="avatar"
     isOpen={isOpen}
     onClose={onClose}
   >
     <PopupWithForm
       name="avatar"
       title="Обновить аватар"
       onSubmit={handleSubmit}
       textSubmitBtn={textForSubmitBtn.save}
     >
       <label className="popup__field">
         <input
           ref={avatarRef}
           type="url"
           className="popup__input popup__input_type_link"
           name="link"
           placeholder="Ссылка на картинку"
           required />
         <span className="popup__error"></span>
       </label>
     </PopupWithForm>
   </Popup>
  );
};
