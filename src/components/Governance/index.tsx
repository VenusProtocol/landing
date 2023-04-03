import React from 'react';
import cn from 'classnames';
import Container from '../Container/Container';
import s from './Governance.module.css';
import Link from '../Link/Link';

const Governance: React.FC = () => (
  <Container className={s.root}>
    <div className={s.card} key="bounty">
      <div className={s.textWrapper}>
        <div>
          <h2>
            Money Markets governed
            <br />
            by community
          </h2>
          <p>
            Venus is a community-driven decentralized protocol delivering best-in-class
            functionality for crypto money markets.
          </p>
        </div>
        <Link className={s.link} href="https://community.venus.io/">
          Governance forum
        </Link>
      </div>
      <div className={s.rings}>
        <div className={s.gradient} />
        <div className={cn(s.planets, s.planetGreen)} />
        <div className={cn(s.planets, s.planetBlue)} />
        <div className={cn(s.planets, s.planetDark)} />
        <div className={s.usersInfo}>
          <span className={s.numberActiveUsers}>50 000+</span>
          <span className={s.activeUsers}>Active users</span>
        </div>
      </div>
    </div>
  </Container>
);

export default Governance;
