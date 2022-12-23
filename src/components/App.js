import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from "./PopupEditProfile";
import PopupAddCard from './PopupAddCard';
import apiConnect from '../utils/Api';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  function handleEditAvatarClick () {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick () {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick () {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick (card) {
    setIsImageOpen(true);
    setSelectedCard({
      ...selectedCard,
      name: card.name,
      link: card.link
    })
  }

  function closeAllPopups () {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImageOpen(false);
  }

  return (
    <>
    <div className="page">
      <Header />
      <Main
        onEditAvatar = { handleEditAvatarClick }
        onEditProfile = { handleEditProfileClick }
        onAddPlace = { handleAddPlaceClick }
        onCardClick = { handleCardClick }
      />
      <Footer />
      <PopupEditAvatar
        isOpen = { isEditAvatarPopupOpen }
        onClose = { closeAllPopups }
      />
      <PopupEditProfile
        isOpen = { isEditProfilePopupOpen }
        onClose = { closeAllPopups }
      />
      <PopupAddCard
        isOpen = { isAddPlacePopupOpen }
        onClose = { closeAllPopups }
      />
      <ImagePopup
        isOpen = { isImageOpen }
        onClose = { closeAllPopups }
        card = { selectedCard }
      />
    </div>
    </>
  );
}

export default App;
