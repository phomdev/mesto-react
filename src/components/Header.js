import headerLogo from '../images/logo.svg';

function Header () {
  return (
    <header className="header">
      <img src={ headerLogo } className="header__logo" alt="Логотип проекта Mesto" />
    </header>
  )
}

export default Header;