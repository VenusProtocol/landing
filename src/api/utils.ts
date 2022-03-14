import { Market } from "./types"

export const mapMarketsData = (markets?: Market[]) => {
  if (!markets) return []

  return markets.map((i) => {
    return {
      ...i,
      supplyApy: Number(i.supplyApy),
      supplyVenusApy: Number(i.supplyVenusApy),
      totalSupplyUsd: Number(i.totalSupplyUsd),
      totalBorrowsUsd: Number(i.totalBorrowsUsd),
      liquidity: Number(i.liquidity),
      borrowApy: Number(i.borrowApy),
    }
  })
}

function compareMarkets(a: Market, b: Market) {
  return b.supplyApy + b.supplyVenusApy - (a.supplyApy + a.supplyVenusApy)
}

export const getMarketsToRender = (markets?: Market[]) => {
  if (!markets) return []
  const filteredMarkets = markets.filter((i) => i.totalSupplyUsd >= 20000000)
  const sortedMarkets = filteredMarkets.sort(compareMarkets)
  return sortedMarkets.slice(0, 7)
}

const sumArray = (numbers: number[]) =>
  numbers.reduce((partialSum, a) => partialSum + a, 0)

const addSpaceBeforeUSDSymbol = (string: string) => {
  return string.replace(/^(\D+)/, "$\u00a0")
}

export const getTotal = (
  key: "totalSupplyUsd" | "totalBorrowsUsd" | "liquidity",
  markets?: Market[]
) => {
  if (!markets) return []
  const totalSupplyUsd = markets.map((i) => i[key])
  const sum = sumArray(totalSupplyUsd)
  const formattedSum = new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(sum)
  return addSpaceBeforeUSDSymbol(formattedSum)
}

export const nFormatter = (num: number, digits = 2) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
  ]
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
  const item = lookup
    .slice()
    .reverse()
    .find((i: { value: number; symbol: string }) => {
      return Math.abs(num) >= i.value
    })
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : num
}
