import axios from 'axios';
import { mapMarketsData } from './utils';
import { ResponseData } from './types';

const requestUrl = 'https://api.venus.io/api/governance/venus';

export default async function fetchMarkets() {
  const { data: response }: { data: ResponseData } = await axios.get(requestUrl);
  return mapMarketsData(response.data.markets);
}
