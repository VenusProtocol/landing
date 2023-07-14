import React, { useState } from 'react';
import cn from 'classnames';
import s from './Banner.module.css';
import { ReactComponent as Close } from './assets/close.svg';

interface IBannerProps {
  className?: string;
}

const Banner: React.FC<IBannerProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return isOpen ? (
    <section className={cn(s.root, className)}>
      <div className={s.limit}>
        <span>Announcing another V4 delivery: Venus Isolated Pools. Learn more in the new{' '}<a href="https://docs.venus.io/">documentation site</a>{' '}and{' '}<a href="https://venus.io/Whitepaper.pdf">whitepaper</a></span>
        <Close className={s.close} onClick={() => setIsOpen(false)} />
      </div>
    </section>
  ) : null;
};

export default Banner;
