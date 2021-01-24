export type Coin = {
  name: string
  symbol: string
  lastUpdated: string
  image: { small: string }
  marketData: {
    currentPrice: { usd: string }
    priceChange24H: string
    priceChangePercentage24H: string
  }
  marketCapRank: number
  links: { homepage: string }
}
