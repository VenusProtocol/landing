import React from "react"
import cn from "classnames"
import { ReactComponent as Octahedron } from "./assets/1.svg"
import { ReactComponent as Shield } from "./assets/2.svg"
import { ReactComponent as Dots } from "./assets/3.svg"
import Container from "../Container/Container"
import s from "./Benefits.module.css"

interface IBenefitsProps {
  className?: string
}

const content = [
  {
    icon: <Octahedron className={s.icon} />,
    title: "Decentralized",
    text: "Access an immutable money market directly on-chain.",
  },
  {
    icon: <Shield className={s.icon} />,
    title: "BEP-20",
    text: "All Venus Protocol assets are bound by the BEP-20 standard.",
  },
  {
    icon: <Dots className={s.icon} />,
    title: "Decentralized",
    text: "Built on Binance Smart Chain for fast, secure, and low cost transactions.",
  },
]

const Benefits: React.FC<IBenefitsProps> = ({ className }) => {
  return (
    <Container className={cn(s.root, className)}>
      <ul className={s.list}>
        {content.map(({ icon, title, text }) => {
          return (
            <li className={s.benefitItem} key={text}>
              {icon}
              <div className={s.textWrapper}>
                <h3 className={s.title}>{title}</h3>
                <p className={s.text}>{text}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Benefits
