import type { CodegenConfig } from '@graphql-codegen/cli';
import { SUBGRAPH_URLS } from './subgraphUrls';
import { MainChainId } from './types';

const config: CodegenConfig = {
  overwrite: true,
  schema: SUBGRAPH_URLS[MainChainId.BSC],
  documents: 'src/subgraph/queries/**/*.graphql',
  generates: {
    'src/subgraph/client/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
