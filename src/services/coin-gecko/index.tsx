import Api, { URL_STRINGS } from 'services/api'
import { Coin } from 'types'

const queryForCoin = (query: string): Promise<{ data: Coin }> => {
  if (query !== '') {
    return Api.get(`${URL_STRINGS.COINS}/${query.toLowerCase()}`, {
      data: { locale: true },
    })
  }
  throw new Error('Query is empty')
}

const getPricesForCoin = (coin: string): Promise<{ data: { prices: [] } }> => {
  try {
    return Api.get(
      `${URL_STRINGS.COINS}/${coin.toLowerCase()}${
        URL_STRINGS.MARKET_CHARTS
      }?vs_currency=usd&days=7&interval=daily`,
    )
  } catch (e) {
    throw new Error('Could not fetch market charts')
  }
}

export { queryForCoin, getPricesForCoin }
