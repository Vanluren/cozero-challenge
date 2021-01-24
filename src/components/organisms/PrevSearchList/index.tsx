import React, { ReactElement, useContext, useMemo } from 'react'
import { queryForCoin } from 'services/coin-gecko'
import Card from 'components/atoms/Card'
import Header from 'components/atoms/Header'
import { DataContext, queryAction, queryError, querySuccess, setQuery } from 'context/data'
import SearchListItem from 'components/atoms/SearchListItem'

const PrevSearchList = (): ReactElement => {
  const { previousSearches, dispatch } = useContext(DataContext)

  /**
   * Reinstate the searched query when the item is clicked
   * @param query
   */
  const onItemClick = (query: string) => {
    dispatch(setQuery(query))
    dispatch(queryAction())
    return queryForCoin(query)
      .then((res) => {
        return dispatch(querySuccess(res.data))
      })
      .catch((e) => {
        return dispatch(queryError(e))
      })
  }

  /**
   * Map a list of items, only do this as little as possible.
   */
  const items = useMemo(() => {
    return previousSearches.map((e, idx) => (
      <SearchListItem key={idx} query={e} onClick={onItemClick} />
    ))
  }, [previousSearches])

  return (
    <Card noPadding>
      <div className="px-4 py-6 border-b-2">
        <Header size="md">Previous Searches</Header>
      </div>
      {items.length > 0 && <ul className="w-full h-full divide-y overflow-scroll">{items}</ul>}
      <div className="px-4 py-6">
        {items.length <= 0 && <p className="text-xl text-black">No previous searches</p>}
      </div>
    </Card>
  )
}

export default PrevSearchList
