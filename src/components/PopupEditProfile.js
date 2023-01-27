import React, { useContext, useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function PopupEditProfile (props) {
  // Подписка на контекст
  const userItem = useContext(CurrentUserContext);
  // Стейты для пользователя
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  // Эффект заполнения корректными данными при открытии формы
  useEffect( () => { setName(userItem.name); setDescription(userItem.about) }, [ props.isOpen ]);
  function handleSubmit (event) {
    event.preventDefault();
    props.onUpdateUser( { name: name, about: description } );
  }
  function handleName (event) { setName(event.target.value) }
  function handleDescription (event) { setDescription(event.target.value) }

  return (
    < PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      onSubmit = { handleSubmit }
      id = 'profile-popup'
      title = 'Редактировать профиль'
      type = 'profile' >
        <label htmlFor="username-input" className="popup__label">
          <input id="username-input" type="text" className="popup__input"
                 name="username" required placeholder="Ваше имя" value={ name || '' } onChange={ handleName } minLength="2" maxLength="40" />
          <span className="username-input-error popup__input-error" />
        </label>
        <label htmlFor="description-input" className="popup__label">
          <input id="description-input" type="text" className="popup__input"
                 name="description" required placeholder="Ваш род занятий" value={ description || '' } onChange={ handleDescription } minLength="2" maxLength="200" />
          <span className="description-input-error popup__input-error" />
        </label>
    < /PopupWithForm>
  )
}

export default PopupEditProfile;