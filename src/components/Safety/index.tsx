import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import { ReactComponent as PessimisticLogo } from './assets/pessimisticLogo.svg';
import { ReactComponent as PessimisticLogoGray } from './assets/pessimisticLogoGray.svg';
import { ReactComponent as CantinaLogo } from './assets/cantinaLogo.svg';
import { ReactComponent as CantinaLogoGray } from './assets/cantinaLogoGray.svg';
import { ReactComponent as PeckShieldLogo } from './assets/peckShieldLogo.svg';
import { ReactComponent as PeckShieldLogoGray } from './assets/peckShieldLogoGray.svg';
import { ReactComponent as CertikLogo } from './assets/certikLogo.svg';
import { ReactComponent as CertikLogoGray } from './assets/certikLogoGray.svg';
import { ReactComponent as OpenZeppelinLogo } from './assets/openZeppelinLogo.svg';
import { ReactComponent as OpenZeppelinLogoGray } from './assets/openZeppelinLogoGray.svg';
import { ReactComponent as QuantstampLogo } from './assets/quantstampLogo.svg';
import { ReactComponent as QuantstampLogoGray } from './assets/quantstampLogoGray.svg';
import { ReactComponent as Code4renaLogo } from './assets/code4renaLogo.svg';
import { ReactComponent as Code4renaLogoGray } from './assets/code4renaLogoGray.svg';
import s from './Safety.module.css';
import SafetyScore from './SafetyScore';
import Auditor from './Auditor';
import OtherAuditors from './OtherAuditors';

interface ISafetyProps {
  className?: string;
}

const auditors = [
  {
    Logo: OpenZeppelinLogoGray,
    LogoHovered: OpenZeppelinLogo,
    audits: 8,
    href: 'https://certificate.quantstamp.com/',
  },
  {
    Logo: QuantstampLogoGray,
    LogoHovered: QuantstampLogo,
    audits: 11,
    href: 'https://docs-v4.venus.io/links/security-and-audits',
  },
  {
    Logo: PeckShieldLogoGray,
    LogoHovered: PeckShieldLogo,
    audits: 21,
    href: 'https://docs-v4.venus.io/links/security-and-audits',
  },
  {
    Logo: CertikLogoGray,
    LogoHovered: CertikLogo,
    audits: 24,
    href: 'https://skynet.certik.com/projects/venus',
  },
  {
    Logo: Code4renaLogoGray,
    LogoHovered: Code4renaLogo,
    audits: 2,
    href: 'https://code4rena.com/contests/2023-05-venus-protocol-isolated-pools',
  },
  {
    Logo: CantinaLogoGray,
    LogoHovered: CantinaLogo,
    audits: 1,
    href: 'https://cantina.xyz/competitions/ddf86a5c-6f63-430f-aadc-d8742b4b1bcf',
  },
  {
    Logo: PessimisticLogoGray,
    LogoHovered: PessimisticLogo,
    audits: 2,
    href: 'https://github.com/pessimistic-io/audits',
  },
];

const Safety: React.FC<ISafetyProps> = ({ className }) => (
  <section className={cn(s.root, className)}>
    <Container className={s.container}>
      <h2 className={s.safetyBeforeAll}>Safety before all</h2>
      <p className={s.assetSecurity}>
        Transact with confidence, knowing Venus places nothing before the security of your assets
      </p>
      <div className={s.auditorsAndScore}>
        <SafetyScore className={s.safetyScoreMobile} />
        <div className={s.logos}>
          {auditors.map(a => (
            <Auditor auditor={a} />
          ))}
          <OtherAuditors />
        </div>
        <SafetyScore className={s.safetyScoreDesktop} />
      </div>
    </Container>
  </section>
);

export default Safety;
