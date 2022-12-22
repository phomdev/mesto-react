import logo from '../src/images/logo.svg';
import './pages/index.css'

function App() {
  return (
    <>
    <div className="page">
      <header className="header">
        <img src={logo} className="header__logo" alt="Логотип проекта Mesto" />
      </header>
      <main>
        <section className="profile">
          <div className="profile__avatar-area">
            <img src="#" className="profile__avatar" alt="Аватар профиля" />
              <button type="button" className="profile__avatar-edit" aria-label="Редактировать аватар профиля"></button>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">phomdev</h1>
            <button type="button" className="profile__editor" aria-label="Редактировать профиль"></button>
            <p className="profile__description">Frontend developer</p>
          </div>
          <button type="button" className="profile__add-mesto" aria-label="Добавить место"></button>
        </section>
        <section className="cards"></section>
      </main>
      <footer className="footer">
        <p className="footer__description">© 2022 Mesto Russia</p>
      </footer>
    </div>
    <div id="profile-popup" className="popup">
      <div className="popup__container">
        <button type="button" className="popup__close" aria-label="Закрыть форму"></button>
        <h3 className="popup__name">Редактировать профиль</h3>
        <form className="popup__form" name="profile" noValidate>
          <label htmlFor="username-input" className="popup__label">
            <input id="username-input" type="text" className="popup__input"
                     name="username" required placeholder="Ваше имя" minLength="2" maxLength="40" />
              <span className="username-input-error popup__input-error"></span>
          </label>
          <label htmlFor="description-input" className="popup__label">
            <input id="description-input" type="text" className="popup__input"
                     name="description" required placeholder="Ваш род занятий" minLength="2" maxLength="200" />
              <span className="description-input-error popup__input-error"></span>
          </label>
          <button type="submit" className="popup__submit" aria-label="Сохранить">Сохранить</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default App;
