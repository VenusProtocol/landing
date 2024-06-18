import { MainChainId } from './types';

export const SUBGRAPH_URLS: {
  [chainId in MainChainId]: string;
} = {
  [MainChainId.BSC]:
    import.meta.env.VITE_SUBGRAPH_MARKETS_URL_BSC_MAINNET,
  [MainChainId.OPBNB]:
    import.meta.env.VITE_SUBGRAPH_MARKETS_URL_OPBNB_MAINNET,
  [MainChainId.ETHEREUM]:
    import.meta.env.VITE_SUBGRAPH_MARKETS_URL_ETHEREUM,
  [MainChainId.ARBITRUM_ONE]:
    import.meta.env.VITE_SUBGRAPH_MARKETS_URL_ARBITRUM_ONE,
};
