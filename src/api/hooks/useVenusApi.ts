import { useEffect, useState } from "react"
import { Market } from "../types"
import { getMarketsToRender, getTotal } from "../utils"
import fetchMarkets from "../index"

export const useVenusApi = () => {
  const [data, setData] = useState<Market[] | undefined>()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error | undefined>()

  useEffect(() => {
    setIsLoading(true)

    fetchMarkets()
      .then((res) => {
        setData(res)
        setIsLoading(false)
      })
      .catch((e) => {
        setError(e)
        setIsLoading(false)
      })
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
