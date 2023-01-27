import React, { useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function PopupAddCard (props) {
  // Рефы названия и картинки карточки
  const cardName = useRef();
  const cardLink = useRef();
  // Эффект для очистки полей
  useEffect( () => {
    cardName.current.value = '';
    cardLink.current.value = '';
  }, [ props.isOpen ]);

  function handleSubmit (event){
    event.preventDefault();
    props.onAddPlace({ name: cardName.current.value, link: cardLink.current.value });
  }

  return (
    < PopupWithForm
      isOpen = { props.isOpen }
      onClose = { props.onClose }
      onSubmit= { handleSubmit }
      id = 'cards-popup'
      title = 'Новое место'
      type = 'mesto'
      buttonText = 'Создать' >
        <label htmlFor="place-name-input" className="popup__label">
          <input id="place-name-input" type="text" className="popup__input"
                 name="placename" required placeholder="Название" ref={ cardName } minLength="2" maxLength="30" />
          <span className="place-name-input-error popup__input-error" />
        </label>
        <label htmlFor="place-image-input" className="popup__label">
          <input id="place-image-input" type="url" className="popup__input"
                 name="placeimage" required placeholder="Ссылка на картинку" ref={ cardLink } />
          <span className="place-image-input-error popup__input-error" />
        </label>
    < /PopupWithForm>
  )
}

export default PopupAddCard;