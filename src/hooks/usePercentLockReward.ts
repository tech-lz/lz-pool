import { useCallback, useEffect, useState } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { Contract } from 'web3-eth-contract'
import { VERSIONS } from '../sushi/lib/constants'

import { getPercentLockReward, getMasterChefContract } from '../sushi/utils'

const usePercentLockReward = (pid: number, version: string) => {
  const [percent, setPercent] = useState(0)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)

  const fetchBalance = useCallback(async () => {
    try {
      let masterChef = masterChefContract

      const percentLockReward = await getPercentLockReward(masterChef, pid)
      setPercent(percentLockReward)
    } catch (e) {
      return false
    }
  }, [account, masterChefContract])

  useEffect(() => {
    if (account && masterChefContract && sushi) {
      fetchBalance()
    }
  }, [account, masterChefContract, sushi])

  return percent
}

export default usePercentLockReward
