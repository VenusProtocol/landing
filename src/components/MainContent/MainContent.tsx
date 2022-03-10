import React from "react"
import cn from "classnames"
import Intro from "./Intro"
import s from "./MainContent.module.css"

interface IMainContentProps {
  className?: string
}

function MainContent({ className }: IMainContentProps) {
  return (
    <section className={cn(s.root, className)}>
      <Intro />
    </section>
  )
}

export default MainContent
