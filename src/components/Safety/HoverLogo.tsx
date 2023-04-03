import React, { useState } from 'react';
import cn from 'classnames';
import s from './Safety.module.css';

interface IHoverLogoProps {
  logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  hoverLogo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const HoverLogo: React.FC<IHoverLogoProps> = ({ logo: Logo, hoverLogo: LogoHovered, className }) => {
  const [opacity, setOpacity] = useState(0);

  const onHover = (setHover: (a: number) => void) => {
    setHover(1);
  };

  const onLeave = (setHover: (a: number) => void) => {
    setHover(0);
  };

  return (
    <div
      className={cn(s.hoverLogo, className)}
      onMouseEnter={() => onHover(setOpacity)}
      onMouseLeave={() => onLeave(setOpacity)}
    >
      {opacity === 0 && <Logo className={s.logo} />}
      {opacity === 1 && <LogoHovered className={s.logo} />}
    </div>
  );
};

export default HoverLogo;
