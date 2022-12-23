import React from 'react';

function Card (props) {
  // Функция обработки увеличения изображения (через проброс)
  function handleClick () { props.onCardClick(props.card) }
  function handleDelete () { props.onCardDelete(props.card) }

  return (
    // props.keys названо для того, чтобы обойти ошибку ('key' is not a prop). Попытка доступа к key приведёт к undefined.
    <div className="cards__item" key={ props.keys }>
      <button type="button" className="cards__delete" onClick={ handleDelete } aria-label="Удалить" />
      <img src={ props.link } className="cards__image" onClick={ handleClick } alt={ props.name } />
      <div className="cards__info">
        <h2 className="cards__description">{ props.name }</h2>
        <div className="cards__like-area">
          <button type="button" className="cards__like" aria-label="Like" />
          <p className="cards__like-counter">{ props.likeCount > 0 ? props.likeCount : null }</p>
        </div>
      </div>
    </div>
  )
}

export default Card;