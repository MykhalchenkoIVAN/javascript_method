import FooterStyles from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={`${FooterStyles.footer} ${props.stateTheme.footer}`}>
      <span
        className={`${FooterStyles.footer__span} ${props.stateTheme.footer__span}`}
      >
        Created by{' '}
        <a href="https://www.linkedin.com/in/ivan-mykhalchenko-a73b77206/">
          Ivan Mykhalchenko
        </a>
      </span>
    </div>
  );
};

export default Footer;
