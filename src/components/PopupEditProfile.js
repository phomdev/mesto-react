import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditProfile (props) {

  return (
    <PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      id = 'profile-popup'
      title = 'Редактировать профиль'
      type = 'profile'
      buttonText = 'Сохранить'
    >
      <label htmlFor="username-input" className="popup__label">
        <input id="username-input" type="text" className="popup__input"
               name="username" required placeholder="Ваше имя" minLength="2" maxLength="40" />
          <span className="username-input-error popup__input-error"></span>
      </label>
      <label htmlFor="description-input" className="popup__label">
        <input id="description-input" type="text" className="popup__input"
               name="description" required placeholder="Ваш род занятий" minLength="2" maxLength="200" />
          <span className="description-input-error popup__input-error"></span>
      </label>
    </PopupWithForm>
  )
}

export default PopupEditProfile;