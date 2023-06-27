import React from 'react';
import cn from 'classnames';
import s from './Safety.module.css';

interface IHoverLogoProps {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  hoverLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isHovering: boolean;
  className?: string;
}

const HoverLogo: React.FC<IHoverLogoProps> = ({ logo: Logo, hoverLogo: LogoHovered, isHovering, className }) => (
  <div
    className={cn(s.hoverLogo, className)}
  >
    {!isHovering && <Logo className={s.logo} />}
    {isHovering && <LogoHovered className={s.logo} />}
  </div>
);

export default HoverLogo;
