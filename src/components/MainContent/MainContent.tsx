import React from "react"
import cn from "classnames"
import Intro from "./Intro"
import s from "./MainContent.module.css"

interface IMainContentProps {
  className?: string
}

const MainContent: React.FC<IMainContentProps> = ({ className }) => {
  return (
    <section className={cn(s.root, className)}>
      <Intro />
    </section>
  )
}

export default MainContent
