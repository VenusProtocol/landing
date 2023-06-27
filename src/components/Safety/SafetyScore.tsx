import React from 'react';
import cn from 'classnames';
import s from './Safety.module.css';
import { ReactComponent as Score90 } from './assets/score90.svg';

interface ISafetyProps {
  className?: string;
}

const SafetyScore: React.FC<ISafetyProps> = ({ className }) => (
  <div className={cn(s.card, s.cardScore, className)}>
    <div className={s.securityScore}>
      <Score90 />
      <span>Security Score</span>
    </div>
    <div className={s.scoreInfo}>
      <p className={s.scored}>
        Venus scored <span>3rd highest</span> for security on BB Chain as assessed by Certik (June, 2021)
      </p>
      <div className={s.linkWrapper}>
        <a href="https://skynet.certik.com/projects/venus">Learn more</a>
      </div>
    </div>
  </div>
);

export default SafetyScore;
