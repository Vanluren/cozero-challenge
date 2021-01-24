import React, { ReactElement, useContext, ChangeEvent, FormEvent } from 'react'
import {
  DataContext,
  queryAction,
  queryError,
  querySuccess,
  saveQuery,
  setQuery,
} from 'context/data'
import TextInput from 'components/atoms/TextInput'
import Button from 'components/atoms/Button'
import { queryForCoin } from 'services/coin-gecko'
import CoinCard from 'components/organisms/CoinCard'
import PrevSearchList from 'components/organisms/PrevSearchList'

const Home = (): ReactElement => {
  const { submitting, query, data, dispatch, error } = useContext(DataContext)

  /**
   * Handle the submition of the query
   * @param {FormEvent} e
   */
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query !== '') {
      dispatch(queryAction())
      return queryForCoin(query)
        .then((res) => {
          dispatch(saveQuery(query))
          return dispatch(querySuccess(res.data))
        })
        .catch((e) => {
          dispatch(saveQuery(query))
          return dispatch(queryError(e))
        })
    }
    return null
  }

  /**
   * Update the query in state
   * @param {ChangeEvent<HTMLInputElement>} e
   */
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => dispatch(setQuery(e.target.value))

  return (
    <div className="container mx-20 flex flex-row">
      <div
        className={`w-4/6 h-screen flex flex-col items-center align-center ${
          submitting || data || error ? 'justify-start mt-8' : 'justify-center'
        }`}
      >
        <form onSubmit={onSubmitHandler} className={`flex flex-row w-full`}>
          <TextInput
            inputSize="lg"
            className="w-5/6"
            onChange={onInputChange}
            value={query}
            placeholder="The coin you wish to find..."
            required
          />
          <Button className="w-1/6 ml-2" value="Submit" type="submit" />
        </form>
        <div className="flex items-center justify-center w-full py-8">
          <CoinCard />
        </div>
      </div>
      <div className="w-2/6 mx-4 py-8 h-screen flex flex-col">
        <PrevSearchList />
      </div>
    </div>
  )
}

export default Home
