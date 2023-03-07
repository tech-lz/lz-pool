import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getCanUnlockBSCX, getLaunchPoolV1Contract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useCanUnlockAmount = (account: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()
  const masterChefContract = getLaunchPoolV1Contract(sushi)

  const fetchBalance = useCallback(async () => {
    const balance = await getCanUnlockBSCX(masterChefContract, account)
    setBalance(balance)
  }, [account, masterChefContract])

  useEffect(() => {
    if (account && masterChefContract) {
      fetchBalance()
      const interval = setInterval(async () => {
        fetchBalance()
      }, 3000)

      return () => clearInterval(interval)
    }
  }, [account, setBalance, masterChefContract])

  return balance
}

export default useCanUnlockAmount
