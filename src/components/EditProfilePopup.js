import React, { useState, useEffect, useContext } from 'react';
import Popup from './Popup';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { TextForSubmitBtn } from '../contexts/TextForSubmitBtn';


export const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const currentUser = React.useContext(CurrentUserContext);
  const textForSubmitBtn = useContext(TextForSubmitBtn);

  useEffect(() => {
    setName(currentUser.name || '');
    setDescription(currentUser.about || '');
  }, [currentUser]);

  const handleChange = (e) => {
    const { target } = e;

    const newName = target.name === 'name' ? target.value : name;
    const newDescription = target.name === 'description' ? target.value : description;

    setName(newName);
    setDescription(newDescription);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <Popup
      name="profile"
      isOpen={isOpen}
      onClose={onClose}
    >
      <PopupWithForm
        title="Редактировать профиль"
        onSubmit={handleSubmit}
        textSubmitBtn={textForSubmitBtn.save}
      >
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_type_name"
            name="name"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            value={name}
            onChange={handleChange}
            required />
          <span className="popup__error"></span>
        </label>
        <label className="popup__field">
          <input
            type="text"
            className="popup__input popup__input_type_job"
            name="description"
            value={description}
            onChange={handleChange}
            placeholder="Ваша профессия"
            minLength="2"
            maxLength="200"
            required />
          <span className="popup__error"></span>
        </label>
      </PopupWithForm>
    </Popup>
  );
};
