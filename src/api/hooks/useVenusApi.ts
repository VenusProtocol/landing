import { useEffect, useState } from "react"
import { MarketMapped } from "../types"
import { getMarketsToRender, getTotal } from "../utils"
import fetchMarkets from "../index"

export const useVenusApi = () => {
  const [data, setData] = useState<MarketMapped[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()

  const fetchData = () => {
    fetchMarkets()
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
      .catch((e) => {
        setError(e)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    setIsLoading(true)
    fetchData()
  }, [])

  const markets = getMarketsToRender(data)
  const marketSize = getTotal("totalSupplyUsd", data)
  const borrowedSum = getTotal("totalBorrowsUsd", data)
  const liquiditySum = getTotal("liquidity", data)

  return {
    marketSize,
    borrowedSum,
    liquiditySum,
    markets,
    isLoading,
    error,
  }
}
