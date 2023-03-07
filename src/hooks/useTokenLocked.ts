import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { provider } from 'web3-core'

import { getTotalUserLockedV1, getLaunchPoolV1Contract } from '../sushi/utils'
import useSushi from './useSushi'

const useTokenLocked = (account: string) => {
  const [totalLocked, setTotalLocked] = useState(new BigNumber(0))
  const sushi = useSushi()
  const masterChefContract = getLaunchPoolV1Contract(sushi)

  const fetchTokenLocked = useCallback(async () => {
    const totalLocked = await getTotalUserLockedV1(masterChefContract, account)
    setTotalLocked(new BigNumber(totalLocked))
  }, [masterChefContract, account])

  useEffect(() => {
    if (masterChefContract && account) {
      fetchTokenLocked()
      const interval = setInterval(async () => {
        fetchTokenLocked()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [masterChefContract, setTotalLocked, account])

  return totalLocked
}

export default useTokenLocked
