import React from "react"
import Container from "../Container/Container"
import { ReactComponent as IconArrow } from "./assets/arrow.svg"
import s from "./Intro.module.css"

const links = [
  {
    text: "Lend",
    href: "TODO",
  },
  {
    text: "Borrow",
    href: "TODO",
  },
  {
    text: "Earn",
    href: "TODO",
  },
]

function Intro() {
  return (
    <div className={s.intro}>
      <Container className={s.container}>
        <h1 className={s.title}>
          Universal <br />
          Money Markets
        </h1>

        <p className={s.description}>
          Simple and powerful community-driven <br />
          finance for the entire globe.
        </p>

        <a className={s.btn} href="https://app.venus.io">
          Launch app
        </a>

        <div className={s.linksWrapper}>
          {links.map(({ text, href }) => (
            <a key={text} className={s.link} href={href}>
              {text}
              <IconArrow className={s.iconArrow} />
            </a>
          ))}
        </div>
      </Container>
      <div className={s.bg} />
    </div>
  )
}

export default Intro
