import React, { ReactElement, ReactNode } from 'react'

type Props = {
  noPadding?: boolean
  children: ReactNode
}
const Card = ({ noPadding = false, children }: Props): ReactElement => {
  return (
    <div className={`w-full h-full bg-white rounded-sm shadow-sm ${noPadding ? '' : 'px-4 py-6'}`}>
      {children}
    </div>
  )
}

export default Card
