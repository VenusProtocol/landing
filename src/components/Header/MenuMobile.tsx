import React from "react"
import cn from "classnames"
import NavigationLinks from "../NavigationLinks/NavigationLinks"
import Link from "../Link/Link"
import Container from "../Container/Container"
import s from "./MenuMobile.module.css"

interface IMenuMobileProps {
  className?: string
}

const MenuMobile: React.FC<IMenuMobileProps> = ({ className }) => {
  return (
    <Container className={cn(s.root, className)}>
      <NavigationLinks
        classNames={{ root: s.headerNavLinksWrapper, link: s.headerLink }}
      />
      <Link className={s.btn} variant="buttonTransparent" href="TODO">
        White paper
      </Link>
    </Container>
  )
}

export default MenuMobile
