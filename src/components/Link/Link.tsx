import React, { ReactNode } from 'react';
import cn from 'classnames';
import s from './Link.module.css';

interface ILinkProps {
  className?: string;
  href: string;
  children: ReactNode;
  variant?: 'button' | 'buttonTransparent' | 'link';
}

const Link: React.FC<ILinkProps> = ({ className, href, children, variant = 'button' }) => (
  <a
    className={cn(
      s.root,
      s.link,
      {
        [s.link_button]: variant === 'button' || variant === 'buttonTransparent',
        [s.link_buttonTransparent]: variant === 'buttonTransparent',
        [s.link_default]: variant === 'link',
      },
      className,
    )}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
);

export default Link;
