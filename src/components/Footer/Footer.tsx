import React from "react"
import cn from "classnames"
import Container from "../Container/Container"
import NavigationLinks from "../NavigationLinks/NavigationLinks"
import { ReactComponent as Logo } from "../Header/assets/logo.svg"
import { ReactComponent as LogoMobile } from "./assets/logoSmall.svg"
import Link from "../Link/Link"
import SocialLinks from "./SocialLinks"
import s from "./Footer.module.css"

interface IFooterProps {
  className?: string
}

const Footer: React.FC<IFooterProps> = ({ className }) => {
  return (
    <footer className={cn(s.root, className)}>
      <Container className={s.container}>
        <LogoMobile className={s.logoMobile} />
        <Logo className={s.logo} />
        <NavigationLinks
          classNames={{ root: s.footerNavLinksWrapper, link: s.footerLink }}
        />
        <SocialLinks className={s.socialLinksWrapperMobile} />
        <Link className={s.btn} variant="buttonTransparent" href="TODO">
          White paper
        </Link>
        <div className={s.copyWrapper}>
          <p className={s.copy}>
            © 2021 Developed by Swipe Wallet.
            <br />
            Licensed & open-source under the MIT License
          </p>
          <SocialLinks className={s.socialLinksWrapperDesktop} />
        </div>
      </Container>
    </footer>
  )
}

export default Footer
