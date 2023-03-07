import { useCallback, useEffect, useState } from 'react'
import useSushi from './useSushi'
import BigNumber from 'bignumber.js'

import { getPendingNFT } from '../sushi/utils'

const usePendingNft = (account: string, pid: number) => {
  const [balance, setBalance] = useState(0)
  const sushi = useSushi()

  useEffect(() => {
    async function fetchData() {
      const res = await getPendingNFT(sushi, account, pid)
      setBalance(res)
    }
    if (sushi && account) {
      fetchData()
      const interval = setInterval(async () => {
        fetchData()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [sushi, setBalance, account])

  return balance
}

export default usePendingNft
