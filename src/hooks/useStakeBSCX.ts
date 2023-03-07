import { useCallback, useEffect, useState } from 'react'
import useSushi from './useSushi'
import BigNumber from 'bignumber.js'

import { getAmountLPStakeBSCX } from '../sushi/utils'

const useStakeBSCX = (account: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()

  useEffect(() => {
    async function fetchData() {
      const res = await getAmountLPStakeBSCX(sushi, account)
      setBalance(new BigNumber(res))
    }
    if (sushi && account) {
      fetchData()
    }
  }, [sushi, setBalance, account])

  return balance
}

export default useStakeBSCX
