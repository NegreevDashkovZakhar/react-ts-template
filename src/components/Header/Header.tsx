import Link from './Link';
import style from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <nav className={style['header__navigation']}>
        <Link text="Home" href="#" />
        <Link text="Example" href="/example" />
      </nav>
    </header>
  );
};

export default Header;
