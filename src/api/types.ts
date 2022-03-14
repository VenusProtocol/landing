export type Market = {
  supplyApy: number
  supplyVenusApy: number
  totalSupplyUsd: number
  totalBorrowsUsd: number
  liquidity: number
  borrowApy: number
  symbol: string
  underlyingSymbol: string
}

export type Data = {
  markets: Market[]
}

export type ResponseData = {
  data: Data
}
