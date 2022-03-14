import React, { ReactElement } from "react"
import cn from "classnames"
import s from "./Link.module.css"

interface ILinkProps {
  className?: string
  href: string
  children: ReactElement | string
}

const Link: React.FC<ILinkProps> = ({ className, href, children }) => {
  return (
    <a className={cn(s.root, s.btn, className)} href={href}>
      {children}
    </a>
  )
}

export default Link
