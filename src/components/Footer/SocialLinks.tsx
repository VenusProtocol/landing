import React from 'react';
import cn from 'classnames';
import { ReactComponent as IconMedium } from './assets/medium.svg';
import { ReactComponent as IconDiscord } from './assets/discord.svg';
import { ReactComponent as IconTwitter } from './assets/twitter.svg';
import { ReactComponent as IconGithub } from './assets/github.svg';
import { ReactComponent as IconVenus } from './assets/venus.svg';
import s from './SocialLinks.module.css';

interface ISocialLinksProps {
  className?: string;
}

const socialLinks = [
  {
    icon: <IconVenus className={s.socialIcon} />,
    href: 'https://bscscan.com/address/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63',
  },
  {
    icon: <IconMedium className={s.socialIcon} />,
    href: 'https://medium.com/@Venus_protocol',
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
  <div className={cn(s.socialLinksWrapper, className)}>
    {socialLinks.map(({ icon, href }) => (
      <a target="_blank" rel="noreferrer" key={href} className={s.socialLink} href={href}>
        {icon}
      </a>
    ))}
  </div>
);

export default SocialLinks;
