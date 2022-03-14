import React from "react"
import cn from "classnames"
import { useVenusApi } from "../../api/hooks/useVenusApi"
import Container from "../Container/Container"
import { nFormatter } from "../../api/utils"
import LinkLaunchApp from "../Link/LinkLaunchApp"
import s from "./Market.module.css"

interface IMarketProps {
  className?: string
}

const Market: React.FC<IMarketProps> = ({ className }) => {
  const { marketSize, borrowedSum, liquiditySum, markets, isLoading, error } =
    useVenusApi()

  if (isLoading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <Container className={cn(s.root, className)}>
      <div className={s.totalWrapper}>
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

        <LinkLaunchApp className={s.launchBtnDesktop} />
      </div>

      <div className={s.marketsWrapper}>
        <div className={s.marketLabelsDesktop}>
          <span className={s.marketLabelDesktopItem}>Assets</span>
          <span className={s.marketLabelDesktopItem}>Market size</span>
          <span className={s.marketLabelDesktopItem}>Deposit APY</span>
          <span className={s.marketLabelDesktopItem}>Total borrowed</span>
          <span className={s.marketLabelDesktopItem}>Borrow APY</span>
        </div>

        <ul className={s.marketsList}>
          {markets.map((i) => (
            <li className={s.marketItem} key={i.liquidity}>
              <div className={s.marketItemSymbol}>
                <img
                  className={s.icon}
                  src={i.assetIcon}
                  alt={i.underlyingSymbol}
                />
                {i.underlyingSymbol}
              </div>
              <div className={s.marketItemValuesWrapper}>
                <p className={s.marketItemValue}>
                  <span className={s.marketItemLabel}>Market size</span> ${" "}
                  {nFormatter(i.totalSupplyUsd)}
                </p>
                <p className={s.marketItemValue}>
                  <span className={s.marketItemLabel}>Deposit APY</span>$ TODO
                </p>
                <p className={s.marketItemValue}>
                  <span className={s.marketItemLabel}>Borrowed</span> ${" "}
                  {nFormatter(i.totalBorrowsUsd)}
                </p>
                <p className={s.marketItemValue}>
                  <span className={s.marketItemLabel}>Borrow APY</span> ${" "}
                  {nFormatter(i.borrowApy)}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className={s.btnWrapper}>
          <LinkLaunchApp />
        </div>
      </div>
    </Container>
  )
}

export default Market
