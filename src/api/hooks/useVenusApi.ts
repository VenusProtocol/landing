import { useQuery } from '@tanstack/react-query';
import { convertCentsToUsd, getMarketsToRender, scale } from '../utils';
import getLegacyPoolMarkets from '../index';
import { getIsolatedMarkets } from '../../subgraph/queries/getIsolatedMarkets';
import { MainChainId } from '../../subgraph/types';

const chainIds = Object.values(MainChainId).filter(
  (chainId): chainId is MainChainId => !Number.isNaN(Number(chainId)),
);

export const useVenusApi = () => {
  const {
    data: getLegacyPoolMarketsData,
    isLoading: isGetLegacyPoolMarketsLoading,
    error: getLegacyPoolMarketsError,
    refetch,
  } = useQuery({
    queryKey: ['legacyPoolMarkets'],
    queryFn: getLegacyPoolMarkets,
  });

  const {
    data: getIsolatedPoolMarketsData,
    isLoading: isGetIsolatedPoolMarketsLoading,
    error: getIsolatedPoolMarketsError,
  } = useQuery({
    queryKey: ['isolatedPoolMarkets'],
    queryFn: async () => {
      const results = await Promise.all(chainIds.map(chainId => getIsolatedMarkets({ chainId })));
      return results.map(result => result.markets).flat();
    },
  });

  const topMarkets = getMarketsToRender(getLegacyPoolMarketsData);

  const marketCount =
    (getLegacyPoolMarketsData?.length || 0) + (getIsolatedPoolMarketsData?.length || 0);

  const legacyPool = (getLegacyPoolMarketsData ?? []).reduce(
    (acc, data) => ({
      marketSize: acc.marketSize + data.totalSupplyUsd,
      borrowedSum: acc.borrowedSum + data.totalBorrowsUsd,
      liquiditySum: acc.liquiditySum + data.liquidity,
    }),
    {
      marketSize: 0,
      borrowedSum: 0,
      liquiditySum: 0,
    },
  );

  const isolatedPools = (getIsolatedPoolMarketsData ?? []).reduce(
    (acc, data) => {
      const underlyingTokenPriceUsd = convertCentsToUsd(data.underlyingPriceCents);

      const totalSupplyTokens = scale(data.totalSupplyMantissa, data.underlyingDecimals);
      const totalSupplyUsd = totalSupplyTokens * underlyingTokenPriceUsd;

      const totalBorrowsTokens = scale(data.totalBorrowsMantissa, data.underlyingDecimals);
      const totalBorrowsUsd = totalBorrowsTokens * underlyingTokenPriceUsd;

      return {
        marketSize: acc.marketSize + totalSupplyUsd,
        borrowedSum: acc.borrowedSum + totalBorrowsUsd,
        liquiditySum: acc.liquiditySum + (totalSupplyUsd - totalBorrowsUsd),
      };
    },
    {
      marketSize: 0,
      borrowedSum: 0,
      liquiditySum: 0,
    },
  );

  return {
    marketSize: legacyPool.marketSize + isolatedPools.marketSize,
    borrowedSum: legacyPool.borrowedSum + isolatedPools.borrowedSum,
    liquiditySum: legacyPool.liquiditySum + isolatedPools.liquiditySum,
    topMarkets,
    marketCount,
    chainCount: chainIds.length,
    isLoading: isGetLegacyPoolMarketsLoading || isGetIsolatedPoolMarketsLoading,
    error: getLegacyPoolMarketsError || getIsolatedPoolMarketsError,
    refetch,
  };
};
