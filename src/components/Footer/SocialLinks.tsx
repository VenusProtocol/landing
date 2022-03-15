import React from "react"
import cn from "classnames"
import { ReactComponent as IconM } from "./assets/m.svg"
import { ReactComponent as IconTg } from "./assets/tg.svg"
import { ReactComponent as IconTw } from "./assets/tw.svg"
import { ReactComponent as IconGh } from "./assets/gh.svg"
import s from "./SocialLinks.module.css"

interface ISocialLinksProps {
  className?: string
}

const socialLinks = [
  {
    icon: <IconM className={s.socialIcon} />,
    href: "TODO1",
  },
  {
    icon: <IconTg className={s.socialIcon} />,
    href: "TODO2",
  },
  {
    icon: <IconTw className={s.socialIcon} />,
    href: "TODO3",
  },
  {
    icon: <IconGh className={s.socialIcon} />,
    href: "TODO4",
  },
]

const SocialLinks: React.FC<ISocialLinksProps> = ({ className }) => (
  <div className={cn(s.socialLinksWrapper, className)}>
    {socialLinks.map(({ icon, href }) => {
      return (
        <a key={href} className={s.socialLink} href={href}>
          {icon}
        </a>
      )
    })}
  </div>
)

export default SocialLinks
