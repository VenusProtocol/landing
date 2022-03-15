import React, { useEffect, useState } from "react"
import cn from "classnames"
import Container from "../Container/Container"
import { ReactComponent as Logo } from "./assets/logo.svg"
import NavigationLinks from "../NavigationLinks/NavigationLinks"
import MenuMobile from "./MenuMobile"
import LinkLaunchApp from "../Link/LinkLaunchApp"
import s from "./Header.module.css"

interface IHeaderProps {
  className?: string
}

const Header: React.FC<IHeaderProps> = ({ className }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [isMenuOpened])
  return (
    <header className={cn(s.root, className)}>
      <Container>
        <div className={s.inner}>
          <Logo className={s.logo} />
          <button
            onClick={() => setIsMenuOpened(!isMenuOpened)}
            type="button"
            className={s.menuMobileBtn}
          >
            {isMenuOpened ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3334 2.54663L17.4534 0.666626L10.0001 8.11996L2.54675 0.666626L0.666748 2.54663L8.12008 9.99996L0.666748 17.4533L2.54675 19.3333L10.0001 11.88L17.4534 19.3333L19.3334 17.4533L11.8801 9.99996L19.3334 2.54663Z"
                  fill="white"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="16"
                viewBox="0 0 24 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16H24V13.3333H0V16ZM0 9.33333H24V6.66667H0V9.33333ZM0 0V2.66667H24V0H0Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
          <MenuMobile
            className={cn(s.menuMobile, isMenuOpened && s.menuMobileOpened)}
          />
          <div className={s.menuDesktop}>
            <NavigationLinks
              classNames={{ root: s.headerNavLinksWrapper, link: s.headerLink }}
            />
            <LinkLaunchApp variant="buttonTransparent" className={s.btn} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
