import React from 'react';
import PopupWithForm from './PopupWithForm';

function PopupEditAvatar (props) {
  return (
    < PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      id = 'avatar-popup'
      title = 'Обновить аватар'
      type = 'user-avatar' >
        <label htmlFor="avatar-input" className="popup__label">
          <input id="avatar-input" type="url" className="popup__input"
                 name="avatar" required placeholder="Введите ссылку на аватар" minLength="2" maxLength="200" />
          <span className="avatar-input-error popup__input-error" />
        </label>
    < /PopupWithForm>
  )
}

export default PopupEditAvatar;