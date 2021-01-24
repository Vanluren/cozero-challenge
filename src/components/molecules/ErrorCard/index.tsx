import React, { ReactElement } from 'react'
import Card from 'components/atoms/Card'
import Header from 'components/atoms/Header'

const ErrorCard = (): ReactElement => {
  return (
    <Card>
      <Header>Error!</Header>
      <Header size="sm">We couldnt find the coin you searched for. Try again!</Header>
    </Card>
  )
}

export default ErrorCard
