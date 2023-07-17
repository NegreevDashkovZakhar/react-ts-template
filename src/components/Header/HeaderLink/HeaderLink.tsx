import classNames from 'classnames';
import style from './link.module.scss';
import {Link} from 'react-router-dom';

interface HeaderLinkProps {
  className?: string;
  text: string;
  href: string;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({className = '', text, href}) => {
  return (
    <Link className={classNames(className, style.link)} to={href}>
      {text}
    </Link>
  );
};

export default HeaderLink;
