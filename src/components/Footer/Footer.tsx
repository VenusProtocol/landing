import React from "react"
import cn from "classnames"
import s from "./Footer.module.css"
import Container from "../Container/Container"

interface IFooterProps {
  className?: string
}

function Footer({ className }: IFooterProps) {
  return (
    <footer className={cn(s.root, className)}>
      <Container>
        <div>Footer</div>
      </Container>
    </footer>
  )
}

export default Footer
