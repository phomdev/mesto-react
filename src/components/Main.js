import React, {useEffect, useState} from 'react';
import apiConnect from '../utils/Api';
import Card from './Card';

function Main (props) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect( () => {
    Promise.all([ apiConnect.getUserData(), apiConnect.getInitialCards() ])
      .then(( [ userData, initialCards] ) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards)
      })
      .catch( (err) => { console.log(`Возникла глобальная ошибка, ${err}`) })
  }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__avatar-area">
          <img src={ userAvatar } className="profile__avatar" alt="Аватар профиля" />
          <button type="button" className="profile__avatar-edit" aria-label="Редактировать аватар профиля"
          onClick={ props.onEditAvatar }
          ></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{ userName }</h1>
          <button type="button" className="profile__editor" aria-label="Редактировать профиль"
          onClick={ props.onEditProfile }
          ></button>
          <p className="profile__description">{ userDescription }</p>
        </div>
        <button type="button" className="profile__add-mesto" aria-label="Добавить место"
        onClick={ props.onAddPlace }
        ></button>
      </section>
      <section className="cards">
        { cards.map( (card) => (
          <Card
            key = { card._id }
            link = { card.link }
            name = { card.name }
            likeCount = { card.likes.length }
            onCardClick = { props.onCardClick }
            card = { card }
          />
        )) }

      </section>
    </main>
  )
}

export default Main;