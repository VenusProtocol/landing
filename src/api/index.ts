import axios from "axios"
import { mapMarketsData } from "./utils"

const requestUrl = "https://api.venus.io/api/governance/venus"

export default async function fetchMarkets() {
  const { data: response } = await axios.get(requestUrl)
  return mapMarketsData(response.data.markets)
}
