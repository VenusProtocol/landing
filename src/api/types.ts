export type Market = {
  supplyApy: number
  supplyVenusApy: number
  totalSupplyUsd: number
  totalBorrowsUsd: number
  liquidity: number
}

export type Data = {
  markets: Market[]
}

export type ResponseData = {
  data: Data
}
