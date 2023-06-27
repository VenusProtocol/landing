import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import { ReactComponent as Logo } from '../Header/assets/logo.svg';
import { ReactComponent as LogoMobile } from './assets/logoSmall.svg';
import SocialLinks from './SocialLinks';
import s from './Footer.module.css';
import Link from '../Link/Link';

const content = [
  {
    href: 'https://app.venus.io/',
    text: 'App',
  },
  {
    href: 'https://app.venus.io/market',
    text: 'Markets',
  },
  {
    href: 'https://docs.venus.io/',
    text: 'Docs',
  },
];

interface IFooterProps {
  className?: string;
}

const Footer: React.FC<IFooterProps> = ({ className }) => (
  <footer className={cn(s.root, className)}>
    <Container className={s.container}>
      <div className={s.logoAndLinks}>
        <Logo key="footerLogo" className={s.logo} />
        <div className={s.links}>
          <LogoMobile key="footerLogoMobile" className={s.logoMobile} />
          <div className={s.navOptions}>
            <NavigationLinks content={content} classNames={{ root: s.footerNavLinksWrapper, link: s.footerLink }} />
            <Link
              variant="buttonTransparent"
              className={s.btn}
              href="https://venus.io/Whitepaper.pdf"
            >
              White paper
            </Link>
          </div>
          <div className={s.navOptions}>
            <SocialLinks className={s.socialLinksWrapperMobile} />
            <Link
              variant="buttonTransparent"
              className={s.btnMobile}
              href="https://venus.io/Whitepaper.pdf"
            >
              White paper
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className={s.copyWrapper}>
        <SocialLinks className={s.socialLinksWrapperDesktop} />
      </div>
    </Container>
  </footer>
);

export default Footer;
