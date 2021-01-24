import React, { ReactElement } from 'react'
type Props = {
  query: string
  onClick: (q: string) => void
}
const SearchListItem = ({ query, onClick }: Props): ReactElement => {
  return (
    <li
      onClick={() => onClick(query)}
      className="bg-white hover:bg-gray-50 px-4 py-2 cursor-pointer text-xl"
    >
      {query}
    </li>
  )
}

export default SearchListItem
