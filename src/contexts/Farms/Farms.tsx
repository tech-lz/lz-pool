import React, { useState } from 'react'

import { useWallet } from 'use-wallet'
import useSushi from '../../hooks/useSushi'

import { bnToDec } from '../../utils'
import { getEarned } from '../../sushi/utils'
import { getFarms } from '../../sushi/utils'

import Context from './context'
import { Farm } from './types'

interface FarmsProps {
  web3: any
}

const Farms: React.FC<FarmsProps> = ({ children, web3 }) => {
  const [unharvested, setUnharvested] = useState(0)
  const sushi = useSushi()
  const farms = getFarms(sushi)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
