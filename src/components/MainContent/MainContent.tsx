import React from "react"
import cn from "classnames"
import Intro from "./Intro"
import s from "./MainContent.module.css"
import Market from "../Market/Market"
import Benefits from "../Benefits/Benefits"

interface IMainContentProps {
  className?: string
}

const MainContent: React.FC<IMainContentProps> = ({ className }) => {
  return (
    <section className={cn(s.root, className)}>
      <Intro />
      <Market />
      <Benefits />
    </section>
  )
}

export default MainContent
