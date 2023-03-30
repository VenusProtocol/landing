import { MarketMapped, MarketResponse } from './types';
import { iconsConfig } from './constants';

export const mapMarketsData = (markets?: MarketResponse[]): MarketMapped[] => {
  if (!markets) return [];

  return markets.map(i => {
    const assetIcon = iconsConfig[i.underlyingSymbol as keyof typeof iconsConfig];
    return {
      ...i,
      supplyApy: Number(i.supplyApy),
      supplyVenusApy: Number(i.supplyVenusApy),
      totalSupplyUsd: Number(i.totalSupplyUsd),
      totalBorrowsUsd: Number(i.totalBorrowsUsd),
      liquidity: Number(i.liquidity),
      depositApy: Number(i.supplyApy) + Number(i.supplyVenusApy),
      borrowApy: Number(i.borrowApy) + Number(i.borrowVenusApy),
      assetIcon,
    };
  });
};

function compareMarkets(a: MarketMapped, b: MarketMapped) {
  return b.totalSupplyUsd - a.totalSupplyUsd;
}

export const getMarketsToRender = (markets?: MarketMapped[]) => {
  if (!markets) return [];
  const sortedMarkets = markets.sort(compareMarkets);
  return sortedMarkets.slice(0, 10);
};

const sumArray = (numbers: number[]) => numbers.reduce((partialSum, a) => partialSum + a, 0);

const addSpaceBeforeUSDSymbol = (string: string) => string.replace(/^(\D+)/, '$\u00a0');

export const getTotal = (
  key: 'totalSupplyUsd' | 'totalBorrowsUsd' | 'liquidity',
  markets?: MarketMapped[],
) => {
  if (!markets) return [];
  const totalSupplyUsd = markets.map(i => i[key]);
  const sum = sumArray(totalSupplyUsd);
  const formattedSum = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'USD',
  }).format(sum);
  return addSpaceBeforeUSDSymbol(formattedSum);
};

export const nFormatter = (num: number, digits = 2) => {
  const lookup = [
    { value: 1, symbol: '' },
    { value: 1e3, symbol: 'k' },
    { value: 1e6, symbol: 'M' },
    { value: 1e9, symbol: 'B' },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find((i: { value: number; symbol: string }) => Math.abs(num) >= i.value);

  const formatValue = (value: number) => value.toFixed(digits).replace(rx, '$1');

  return item ? formatValue(num / item.value) + item.symbol : formatValue(num);
};
