import HeaderLink from './HeaderLink';
import style from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <nav className={style['header__navigation']}>
        <HeaderLink text="Home" href="/" />
        <HeaderLink text="Example" href="/example" />
      </nav>
    </header>
  );
};

export default Header;
