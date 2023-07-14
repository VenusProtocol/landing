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
        <div className={s.content}>
          <span>Announcing another V4 delivery: Venus Isolated Pools. Learn more in the new <a href="https://docs-v4.venus.io/">documentation</a> site and <a href="https://github.com/VenusProtocol/venus-protocol-documentation/tree/main/whitepapers">whitepaper</a></span>
          <Close className={s.close} onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </section>
  ) : null;
};

export default Banner;
