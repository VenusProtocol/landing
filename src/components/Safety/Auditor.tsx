import React from 'react';
import cn from 'classnames';
import s from './Safety.module.css';
import { ReactComponent as Arrow } from './assets/arrow.svg';

interface ISafetyProps {
  className?: string;
  auditor: {
    audits: number;
    Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    LogoHovered: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    href: string;
  };
}

const Auditor: React.FC<ISafetyProps> = ({ auditor: { href, Logo, LogoHovered, audits } }) => (
    <a
      className={cn(s.card, s.auditor)}
      href={href}
    >
      <div className={s.auditorLogoContainer}>
        <div className={s.logoContainer}>
          <Logo className={s.logo} />
          <LogoHovered className={s.logoHovered} />
        </div>
      </div>
      <hr />
      <div className={s.audits}>
        <p className={s.auditCompleted}>
          <span>{audits}</span> Audit{audits > 1 ? 's' : null}
        </p>
        <Arrow className={s.arrow} />
      </div>
    </a>
  );

export default Auditor;
