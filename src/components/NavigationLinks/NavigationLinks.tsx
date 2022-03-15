import React from "react"
import cn from "classnames"
import Link from "../Link/Link"
import s from "./NavigationLinks.module.css"

interface INavigationLinksProps {
  classNames?: { root?: string; link?: string }
}

const content = [
  {
    href: "TODO",
    text: "Whitepaper",
  },
  {
    href: "TODO",
    text: "Docs",
  },
  {
    href: "TODO",
    text: "Markets",
  },
]

const NavigationLinks: React.FC<INavigationLinksProps> = ({ classNames }) => (
  <div className={cn(s.root, classNames?.root)}>
    {content.map(({ href, text }) => (
      <Link className={classNames?.link} key={text} variant="link" href={href}>
        {text}
      </Link>
    ))}
  </div>
)

export default NavigationLinks
