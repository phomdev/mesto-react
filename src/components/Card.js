import React from 'react';

function Card (props) {

  function handleClick () {
    props.onCardClick(props.card);
  }

  return (
    // props.id названо для того, чтобы обойти ошибку ('key' is not a prop). Попытка доступа к key приведёт к undefined.
    <div className="cards__item" key={ props.id }>
      <button type="button" className="cards__delete" aria-label="Удалить"></button>
      <img src={ props.link } className="cards__image" onClick={ handleClick } alt={ props.name } />
      <div className="cards__info">
        <h2 className="cards__description">{ props.name }</h2>
        <div className="cards__like-area">
          <button type="button" className="cards__like" aria-label="Like"></button>
          <p className="cards__like-counter">{ props.likeCount }</p>
        </div>
      </div>
    </div>
  )
}

export default Card;