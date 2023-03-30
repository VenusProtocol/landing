import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import { ReactComponent as Logo } from '../Header/assets/logo.svg';
import { ReactComponent as LogoMobile } from './assets/logoSmall.svg';
import SocialLinks from './SocialLinks';
import LinkLaunchApp from '../Link/LinkLaunchApp';
import s from './Footer.module.css';

interface IFooterProps {
  className?: string;
}

const Footer: React.FC<IFooterProps> = ({ className }) => (
  <footer className={cn(s.root, className)}>
    <Container className={s.container}>
      <LogoMobile key="footerLogoMobile" className={s.logoMobile} />
      <Logo key="footerLogo" className={s.logo} />
      <NavigationLinks classNames={{ root: s.footerNavLinksWrapper, link: s.footerLink }} />
      <SocialLinks className={s.socialLinksWrapperMobile} />
      <LinkLaunchApp variant="buttonTransparent" className={s.btn} />
      <div className={s.copyWrapper}>
        <p className={s.copy}>© {new Date().getFullYear()} Venus Protocol</p>
        <SocialLinks className={s.socialLinksWrapperDesktop} />
      </div>
    </Container>
  </footer>
);

export default Footer;
