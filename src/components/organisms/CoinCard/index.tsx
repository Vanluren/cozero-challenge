import Card from 'components/atoms/Card'
import Header from 'components/atoms/Header'
import LoadingSpinner from 'components/atoms/LoadingSpinner'
import ErrorCard from 'components/molecules/ErrorCard'
import { DataContext } from 'context/data'
import React, { ReactElement, useContext } from 'react'
import { toUSD } from 'utils/numberParser'
import { ReactComponent as ArrowDown } from 'assets/arrow-down.svg'
import { ReactComponent as ArrowUp } from 'assets/arrow-up.svg'
import PriceChart from '../PriceChart'

const CoinCard = (): ReactElement | null => {
  const { data, error, loading } = useContext(DataContext)

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <LoadingSpinner />
      </div>
    )
  }
  if (error) {
    return <ErrorCard />
  }
  if (data) {
    const {
      name,
      lastUpdated,
      image: { small },
      marketData: { currentPrice, priceChange24H, priceChangePercentage24H },
      marketCapRank,
      links: { homepage },
      symbol,
    } = data
    return (
      <Card>
        <div className="flex flex-row px-4 py-6">
          <div className="w-20 h-20 flex items-center justify-center">
            <img src={small} loading="lazy" />
          </div>
          <div className="mx-2">
            <p className="text-sm text-gray-400">{new Date(lastUpdated).toLocaleString()}</p>
            <a href={homepage}>
              <Header>{name}</Header>
            </a>
            <p className="text-lg text-gray-300">{symbol.toUpperCase()}</p>
          </div>
        </div>
        <div className="flex flex-row px-4 justify-between">
          <div>
            <Header size="sm">Market Cap. Rank</Header>
            <Header size="md">{marketCapRank}</Header>
          </div>
          <div>
            <Header size="sm">Current Price</Header>
            <Header size="md">{toUSD(currentPrice.usd)}</Header>
          </div>
          <div>
            <Header size="sm">Price change</Header>
            <div className="flex">
              <Header size="md">{toUSD(priceChange24H)}</Header>
            </div>
            <p className="text-sm text-gray-300 flex flex-row">
              {parseFloat(priceChange24H) < 0 ? (
                <ArrowDown stroke="#EF4444" className="w-4 h-4" />
              ) : (
                <ArrowUp stroke="#10B981" className="w-4 h-4" />
              )}
              <span
                className={`mr-2 ${
                  parseFloat(priceChange24H) < 0 ? 'text-red-500' : 'text-green-500'
                }`}
              >
                {parseFloat(priceChangePercentage24H).toFixed(1)}%
              </span>
              last 24 hours
            </p>
          </div>
        </div>
        <div>
          <PriceChart />
        </div>
      </Card>
    )
  }
  return null
}

export default CoinCard
