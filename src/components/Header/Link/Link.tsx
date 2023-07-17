import classNames from 'classnames';
import style from './link.module.scss';

interface LinkProps {
  className?: string;
  text: string;
  href: string;
}

const Link: React.FC<LinkProps> = ({className = '', text, href}) => {
  return (
    <a className={classNames(className, style.link)} href={href}>
      {text}
    </a>
  );
};

export default Link;
