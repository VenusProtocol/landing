import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import { ReactComponent as Code4rena } from './assets/c4.svg';
import { ReactComponent as Code4renaHover } from './assets/c4Hover.svg';
import { ReactComponent as Certik } from './assets/certik.svg';
import { ReactComponent as CertikHover } from './assets/certikHover.svg';
import { ReactComponent as Quantstamp } from './assets/quantstamp.svg';
import { ReactComponent as QuantstampHover } from './assets/quantstampHover.svg';
import { ReactComponent as OpenZeppelin } from './assets/openzeppelin.svg';
import { ReactComponent as OpenZeppelinHover } from './assets/openzeppelinHover.svg';
import { ReactComponent as Peckshield } from './assets/peckshield.svg';
import { ReactComponent as PeckshieldHover } from './assets/peckshieldHover.svg';
import { ReactComponent as Cantina } from './assets/cantina.svg';
import { ReactComponent as CantinaHover } from './assets/cantinaHover.svg';
import { ReactComponent as Pessimistic } from './assets/pessimistic.svg';
import { ReactComponent as PessimisticHover } from './assets/pessimisticHover.svg';
import s from './Safety.module.css';
import SafetyScore from './SafetyScore';
import Auditor from './Auditor';
import OtherAuditors from './OtherAuditors';

interface ISafetyProps {
  className?: string;
}

const auditors = [
  {
    logo: OpenZeppelin,
    logoHovered: OpenZeppelinHover,
    audits: 8,
    className: s.certik,
    href: 'https://docs-v4.venus.io/links/security-and-audits',
  },
  {
    logo: Quantstamp,
    logoHovered: QuantstampHover,
    audits: 11,
    className: s.quantstamp,
    href: 'https://certificate.quantstamp.com/',
  },
  {
    logo: Peckshield,
    logoHovered: PeckshieldHover,
    audits: 21,
    className: s.certik,
    href: 'https://docs-v4.venus.io/links/security-and-audits',
  },
  {
    logo: Certik,
    logoHovered: CertikHover,
    audits: 24,
    className: s.certik,
    href: 'https://skynet.certik.com/projects/venus',
  },
  {
    logo: Code4rena,
    logoHovered: Code4renaHover,
    audits: 2,
    className: s.certik,
    href: 'https://code4rena.com/contests/2023-05-venus-protocol-isolated-pools',
  },
  {
    logo: Cantina,
    logoHovered: CantinaHover,
    audits: 1,
    className: s.cantina,
    href: 'https://cantina.xyz/competitions/ddf86a5c-6f63-430f-aadc-d8742b4b1bcf',
  },
  {
    logo: Pessimistic,
    logoHovered: PessimisticHover,
    audits: 2,
    className: s.cantina,
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
