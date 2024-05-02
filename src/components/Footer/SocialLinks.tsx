import React from 'react';
import cn from 'classnames';
import { ReactComponent as IconTelegram } from './assets/telegram.svg';
import { ReactComponent as IconDiscord } from './assets/discord.svg';
import { ReactComponent as IconTwitter } from './assets/twitter.svg';
import { ReactComponent as IconGithub } from './assets/github.svg';
import s from './SocialLinks.module.css';

interface ISocialLinksProps {
  className?: string;
}

const socialLinks = [
  {
    icon: <IconTelegram className={s.socialIcon} />,
    href: 'https://t.me/venusprotocol',
  },
  {
    icon: <IconDiscord className={s.socialIcon} />,
    href: 'https://discord.gg/pTQ9EBHYtF',
  },
  {
    icon: <IconTwitter className={s.socialIcon} />,
    href: 'https://twitter.com/VenusProtocol',
  },
  {
    icon: <IconGithub className={s.socialIcon} />,
    href: 'https://github.com/VenusProtocol/',
  },
];

const SocialLinks: React.FC<ISocialLinksProps> = ({ className }) => (
  <div className={cn(className, s.socialLinksWrapper)}>
    <div className={s.mappedLinks}>
      {socialLinks.map(({ icon, href }) => (
        <a target="_blank" rel="noreferrer" key={href} className={s.socialLink} href={href}>
          {icon}
        </a>
      ))}
    </div>
  </div>
);

export default SocialLinks;
