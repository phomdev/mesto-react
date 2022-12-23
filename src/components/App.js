import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from './PopupAddCard';

function App () {
  // Стейты для попапов
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false); // Редактирование аватара
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false); // Редактирование профиля
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false); // Добавление карточки
  const [isImageOpen, setIsImageOpen] = useState(false); // Увеличение изображения
  const [selectedCard, setSelectedCard] = useState({}); // Передача данных при увеличении изображения
  // Обработчик открытия попапа обновления аватара
  function handleEditAvatarClick () { setIsEditAvatarPopupOpen(true) }
  // Обработчик открытия попапа редактирования профиля
  function handleEditProfileClick () { setIsEditProfilePopupOpen(true) }
  // Обработчик открытия попапа добавления карточки
  function handleAddPlaceClick () { setIsAddPlacePopupOpen(true) }
  // Обработчик для увеличения изображения и передачи данных
  function handleCardClick (cardItem) {
    setIsImageOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: cardItem.name,
      link: cardItem.link
    })
  }
  // Функция для закрытия всех попапов
  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <>
    <div className="page">
      < Header />
      < Main
        onEditAvatar = { handleEditAvatarClick }
        onEditProfile = { handleEditProfileClick }
        onAddPlace = { handleAddPlaceClick }
        onCardClick = { handleCardClick } />
      < Footer />
      < PopupEditAvatar
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups } />
      < PopupEditProfile
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups } />
      < PopupAddCard
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups } />
      < ImagePopup
        isOpen = { isImageOpen }
        onClose = { closeAllPopups }
        card = { selectedCard } />
    </div>
    </>
  );
}

export default App;
