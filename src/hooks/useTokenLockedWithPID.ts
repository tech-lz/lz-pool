import { useCallback, useEffect, useState } from 'react'

import BigNumber from 'bignumber.js'
import { provider } from 'web3-core'

import { getTotalUserLocked, getLaunchPoolZDContract, getLaunchPoolTOOLSContract, getLaunchPoolXPOContract } from '../sushi/utils'
import useSushi from './useSushi'

const useTokenLockedWithPID = (account: string, pid: number, token: string) => {
  const [totalLocked, setTotalLocked] = useState(new BigNumber(0))
  const sushi = useSushi()
  let masterChefContract = getLaunchPoolZDContract(sushi)

  if (token == 'TOOLS') {
    masterChefContract = getLaunchPoolTOOLSContract(sushi)
  } else if (token == 'XPO') {
    masterChefContract = getLaunchPoolXPOContract(sushi)
  }

  const fetchTokenLocked = useCallback(async () => {
    const totalLocked = await getTotalUserLocked(masterChefContract, account, pid)
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

export default useTokenLockedWithPID
