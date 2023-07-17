import HeaderLink from './HeaderLink';
import style from './header.module.scss';
import logo from '@assets/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <img className={style['header__logo']} src={logo} />
      <nav className={style['header__navigation']}>
        <HeaderLink text="Home" href="/" />
        <HeaderLink text="Example" href="/example" />
      </nav>
    </header>
  );
};

export default Header;
