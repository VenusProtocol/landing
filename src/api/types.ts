export type MarketResponse = {
  supplyApy: string;
  supplyVenusApy: string;
  totalSupplyUsd: string;
  totalBorrowsUsd: string;
  liquidity: string;
  borrowApy: string;
  borrowVenusApy: string;
  symbol: string;
  underlyingSymbol: string;
};

export type MarketMapped = {
  supplyApy: number;
  supplyVenusApy: number;
  totalSupplyUsd: number;
  totalBorrowsUsd: number;
  liquidity: number;
  borrowApy: number;
  symbol: string;
  underlyingSymbol: string;
  assetIcon: string;
  depositApy: number;
};

export type Data = {
  markets: MarketResponse[];
};

export type ResponseData = {
  data: Data;
};
