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
    text: "App",
  },
  {
    href: "TODO",
    text: "Markets",
  },
  {
    href: "TODO",
    text: "Docs",
  },
]

const NavigationLinks: React.FC<INavigationLinksProps> = ({ classNames }) => {
  return (
    <div className={cn(s.root, classNames?.root)}>
      {content.map(({ href, text }) => (
        <Link
          className={classNames?.link}
          key={text}
          variant="link"
          href={href}
        >
          {text}
        </Link>
      ))}
    </div>
  )
}

export default NavigationLinks
