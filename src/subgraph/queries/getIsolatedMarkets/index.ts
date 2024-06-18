import { request } from 'graphql-request';

import { IsolatedMarketsDocument } from '../../client/graphql';
import { MainChainId } from '../../types';
import { SUBGRAPH_URLS } from '../../subgraphUrls';

export const getIsolatedMarkets = ({
  chainId,
}: {
  chainId: MainChainId;
}) => request(SUBGRAPH_URLS[chainId], IsolatedMarketsDocument);
