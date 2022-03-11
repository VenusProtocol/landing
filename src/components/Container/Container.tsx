import React, { ReactElement } from "react"
import cn from "classnames"
import s from "./Container.module.css"

interface IContainerProps {
  children: ReactElement | ReactElement[]
  className?: string
}

function Container({ children, className }: IContainerProps) {
  return <div className={cn(s.root, className)}>{children}</div>
}

export default Container
