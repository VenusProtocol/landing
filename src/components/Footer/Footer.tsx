import React from "react"
import cn from "classnames"
import s from "./Footer.module.css"
import Container from "../Container/Container"

interface IFooterProps {
  className?: string
}

const Footer: React.FC<IFooterProps> = ({ className }) => {
  return (
    <footer className={cn(s.root, className)}>
      <Container>
        <div>Footer</div>
      </Container>
    </footer>
  )
}

export default Footer
