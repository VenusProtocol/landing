import axios from 'axios';
import { mapMarketsData } from './utils';
import { MarketsResponseData, ProposalsResponseData } from './types';

const marketsRequestUrl = 'https://api.venus.io/api/governance/venus';
const proposalsRequestUrl = 'https://api.venus.io/api/proposals?offset=0&limit=1&version=v2';

export default async function fetchMarkets() {
  const { data: response }: { data: MarketsResponseData } = await axios.get(marketsRequestUrl);
  return mapMarketsData(response.data.markets);
}

export async function fetchProposalCount() {
  const { data: response }: { data: ProposalsResponseData } = await axios.get(proposalsRequestUrl);
  return response.data.total;
}
