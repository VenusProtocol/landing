import React, { ReactElement } from "react"
import cn from "classnames"
import s from "./Button.module.css"

interface IButtonProps {
  className?: string
  href: string
  children: ReactElement | string
}

const Button: React.FC<IButtonProps> = ({ className, href, children }) => {
  return (
    <a className={cn(s.root, s.btn, className)} href={href}>
      {children}
    </a>
  )
}

export default Button
