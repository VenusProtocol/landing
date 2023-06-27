import React, { useState } from 'react';
import cn from 'classnames';
import s from './Safety.module.css';
import HoverLogo from './HoverLogo';
import { ReactComponent as Arrow } from './assets/arrow.svg';
import { ReactComponent as ArrowBlue } from './assets/arrowBlue.svg';

interface ISafetyProps {
  className?: string;
  auditor: {
    audits: number;
    logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    logoHovered: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    href: string;
    className?: string;
  };
}

const Auditor: React.FC<ISafetyProps> = ({ auditor: a }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <a
      className={cn(s.card, s.auditor)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      href={a.href}
    >
      <div className={s.auditorLogo}>
        <HoverLogo logo={a.logo} hoverLogo={a.logoHovered} isHovering={isHovering} className={a.className} />
      </div>
      <hr />
      <div className={s.audits}>
        <p className={isHovering ? s.auditCompletedHover : s.auditCompleted}>
          <span>{a.audits}</span> Audit{a.audits > 1 ? 's' : null} Completed
        </p>
        <HoverLogo className={s.arrow} logo={Arrow} hoverLogo={ArrowBlue} isHovering={isHovering} />
      </div>
    </a>
  );
};

export default Auditor;
