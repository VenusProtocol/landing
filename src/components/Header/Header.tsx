import React from "react"
import cn from "classnames"
import Container from "../Container/Container"
import { ReactComponent as Logo } from "./assets/logo.svg"
import s from "./Header.module.css"

interface IHeaderProps {
  className?: string
}

const Header: React.FC<IHeaderProps> = ({ className }) => {
  return (
    <header className={cn(s.root, className)}>
      <Container>
        <div className={s.inner}>
          <Logo className={s.logo} />
          <div>menu</div>
        </div>
      </Container>
    </header>
  )
}

export default Header
