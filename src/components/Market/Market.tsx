import React from "react"
import cn from "classnames"
import { useVenusApi } from "../../api/hooks/useVenusApi"
import Container from "../Container/Container"
import s from "./Market.module.css"

interface IMarketProps {
  className?: string
}

const Market: React.FC<IMarketProps> = ({ className }) => {
  const { marketSize, borrowedSum, liquiditySum, markets, isLoading, error } =
    useVenusApi()

  if (isLoading) {
    return <p>Loading..</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Container className={cn(s.root, className)}>
      <ul className={s.totalList}>
        <li className={s.totalItem}>
          <div>
            <p className={s.totalTitle}>Market size:</p>
            <p className={s.totalSum}>{marketSize}</p>
          </div>
        </li>
        <span className={s.divider} />
        <li className={s.totalItem}>
          <div>
            <p className={s.totalTitle}>Total Borrowed:</p>
            <p className={s.totalSum}>{borrowedSum}</p>
          </div>
        </li>
        <span className={s.divider} />
        <li className={s.totalItem}>
          <div>
            <p className={s.totalTitle}>Total Liquidity:</p>
            <p className={s.totalSum}>{liquiditySum}</p>
          </div>
        </li>
      </ul>

      <ul className={s.marketsList}>
        {markets.map((i) => (
          <li className={s.marketItem} key={i.liquidity}>
            {i.liquidity}
            <br />
            {i.totalBorrowsUsd}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default Market
