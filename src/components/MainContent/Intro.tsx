import React from "react"
import Container from "../Container/Container"
import s from "./Intro.module.css"

function Intro() {
  return (
    <div className={s.intro}>
      <Container>
        <div>
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
        </div>
      </Container>
    </div>
  )
}

export default Intro
