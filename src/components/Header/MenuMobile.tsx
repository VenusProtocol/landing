import React from "react"
import cn from "classnames"
import NavigationLinks from "../NavigationLinks/NavigationLinks"
import Container from "../Container/Container"
import LinkLaunchApp from "../Link/LinkLaunchApp"
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
      <LinkLaunchApp variant="buttonTransparent" className={s.btn} />
    </Container>
  )
}

export default MenuMobile
