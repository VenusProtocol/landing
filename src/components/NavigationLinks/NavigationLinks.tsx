import React from "react"
import cn from "classnames"
import s from "./NavigationLinks.module.css"

interface INavigationLinksProps {
  className?: string
}

const NavigationLinks: React.FC<INavigationLinksProps> = ({ className }) => {
  return <div className={cn(s.root, className)}>NavigationLinks</div>
}

export default NavigationLinks
