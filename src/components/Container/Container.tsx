import React, { ReactElement } from "react"
import cn from "classnames"
import s from "./Container.module.css"

interface IContainerProps {
  children: ReactElement | ReactElement[]
  className?: string
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  return <div className={cn(s.root, className)}>{children}</div>
}

export default Container
