import { useCallback, useEffect, useState } from 'react'
import useSushi from './useSushi'
import BigNumber from 'bignumber.js'

import { getLZBalance } from '../sushi/utils'

const useLZBalance = (account: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()

  useEffect(() => {
    async function fetchData() {
      const res = await getLZBalance(sushi, account)
      setBalance(new BigNumber(res))
    }
    if (sushi && account) {
      fetchData()
    }
  }, [sushi, setBalance, account])

  return balance
}

export default useLZBalance
