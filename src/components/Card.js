import React, { useContext } from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card (props) {
  // Подписка на контекст
  const userItem = useContext(CurrentUserContext);
  // Определение владения карточкой
  const isOwn = props.card.owner._id === userItem._id;
  // Определение наличие поставленного лайка
  const isLiked = props.card.likes.some(item => item._id === userItem._id);
  function handleClick () { props.onCardClick(props.card) }
  function handleDelete () { props.onCardDelete(props.card) }
  function handleLike () { props.onCardLike(props.card) }

  return (
    <div className="cards__item">
      { isOwn && <button type="button" className='cards__delete' onClick={ handleDelete } aria-label="Удалить" /> }
      <img src={ props.link } className="cards__image" onClick={ handleClick } alt={ props.name } />
      <div className="cards__info">
        <h2 className="cards__description">{ props.name }</h2>
        <div className="cards__like-area">
          <button type="button" className={ `cards__like ${ isLiked ? 'cards__like_active' : '' }` } onClick={ handleLike } aria-label="Like" />
          <p className="cards__like-counter">{ props.likeCount > 0 ? props.likeCount : null }</p>
        </div>
      </div>
    </div>
  )
}

export default Card;