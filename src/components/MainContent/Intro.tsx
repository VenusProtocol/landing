import React from 'react';
import Container from '../Container/Container';
import { ReactComponent as IconArrow } from './assets/arrow.svg';
import LinkLaunchApp from '../Link/LinkLaunchApp';
import Link from '../Link/Link';
import s from './Intro.module.css';

const links = [
  {
    text: 'Supply',
    href: 'https://app.venus.io/dashboard',
  },
  {
    text: 'Borrow',
    href: 'https://app.venus.io/dashboard',
  },
  {
    text: 'Earn',
    href: 'https://app.venus.io/xvs',
  },
];

function Intro() {
  return (
    <div className={s.intro}>
      <Container className={s.container}>
        <h1 className={s.title}>
          Universal <br />
          Money Markets
        </h1>

        <p className={s.description}>
          Simple and powerful community-driven finance <br className={s.break} />
          for the entire globe.
        </p>

        <div className={s.cta}>
          <LinkLaunchApp />

          <div className={s.linksWrapper}>
            {links.map(({ text, href }) => (
              <Link className={s.link} variant="link" key={text} href={href}>
                {text}
                <IconArrow className={s.iconArrow} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Intro;
