import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import { ReactComponent as Certik } from './assets/certik.svg';
import { ReactComponent as CertikHover } from './assets/certikHover.svg';
import { ReactComponent as Hacken } from './assets/hacken.svg';
import { ReactComponent as HackenHover } from './assets/hackenHover.svg';
import { ReactComponent as Peckshield } from './assets/peckshield.svg';
import { ReactComponent as PeckshieldHover } from './assets/peckshieldHover.svg';
import s from './Safety.module.css';
import HoverLogo from './HoverLogo';

interface ISafetyProps {
  className?: string;
}

const Safety: React.FC<ISafetyProps> = ({ className }) => (
  <section className={cn(s.root, className)}>
    <Container className={s.container}>
      <h2 className={s.safetyBeforeAll}>Safety before all</h2>
      <p className={s.assetSecurity}>
        Transact with confidence, knowing Venus places nothing before the security of your assets
      </p>
      <div className={s.logos}>
        <HoverLogo logo={Certik} hoverLogo={CertikHover} className={s.certik} />
        <HoverLogo logo={Hacken} hoverLogo={HackenHover} className={s.hacken} />
        <HoverLogo logo={Peckshield} hoverLogo={PeckshieldHover} className={s.peckshield} />
      </div>
    </Container>
  </section>
);

export default Safety;
