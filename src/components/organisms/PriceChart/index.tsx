import React, { useContext, useState, useEffect, ReactElement } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { DataContext } from 'context/data'
import { getPricesForCoin } from 'services/coin-gecko'
import LoadingSpinner from 'components/atoms/LoadingSpinner'

type ChartData = {
  date: string
  price: number
}
const PriceChart = (): ReactElement | null => {
  const { query } = useContext(DataContext)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<ChartData[] | null>(null)

  useEffect(() => {
    if (query && !data) {
      setLoading(true)
      getPricesForCoin(query).then((res) => {
        if (res.data) {
          const { prices } = res.data
          const normalizedData: ChartData[] = prices.map((p: number[]) => ({
            date: new Date(p[0]).toLocaleDateString(),
            price: p[1],
          }))
          setData(normalizedData)
        }
        setLoading(false)
      })
    }
  }, [query])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </div>
    )
  } else if (data) {
    return (
      <div className="flex mt-4 px-4 py-6 h-72 rounded-sm bg-gray-900">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <YAxis stroke="white" />
            <XAxis dataKey="date" stroke="white" />
            <Area type="monotone" dataKey="price" stroke="#6366F1" fill="#6366F1" />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
  return null
}

export default PriceChart
