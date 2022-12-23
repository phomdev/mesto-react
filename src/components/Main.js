import React, {useEffect, useState} from 'react';
import apiConnect from '../utils/Api';
import Card from './Card';

function Main (props) {
  // Стейты для данных пользователя и карточек
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);
  // Через состояние запрашиваем средствами API данные с сервера, единожды
  useEffect( () => {
    Promise.all([ apiConnect.getUserData(), apiConnect.getInitialCards() ])
      .then(( [ userItem, initialCards] ) => {
        setUserName(userItem.name);
        setUserDescription(userItem.about);
        setUserAvatar(userItem.avatar);
        setCards(initialCards);
      })
      .catch( (err) => { console.log(`Возникла глобальная ошибка, ${err}`) })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-area">
          <img src={ userAvatar } className="profile__avatar" alt="Аватар профиля" />
          < button
            type="button"
            className="profile__avatar-edit"
            aria-label="Редактировать аватар профиля"
            onClick={ props.onEditAvatar } />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{ userName }</h1>
          < button
            type="button"
            className="profile__editor"
            aria-label="Редактировать профиль"
            onClick={ props.onEditProfile } />
          <p className="profile__description">{ userDescription }</p>
        </div>
        < button
          type="button"
          className="profile__add-mesto"
          aria-label="Добавить место"
          onClick={ props.onAddPlace } />
      </section>
      <section className="cards">
        { cards.map( (cardItem) => (
          < Card
            key = { cardItem._id }
            link = { cardItem.link }
            name = { cardItem.name }
            likeCount = { cardItem.likes.length }
            onCardClick = { props.onCardClick }
            card = { cardItem } />
        )) }
      </section>
    </main>
  )
}

export default Main;