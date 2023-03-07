import { useCallback, useEffect, useState } from 'react'
import { provider } from 'web3-core'

import BigNumber from 'bignumber.js'
import { useWallet } from 'use-wallet'

import { getCanUnlockToken, getLaunchPoolZDContract, getLaunchPoolTOOLSContract, getLaunchPoolXPOContract } from '../sushi/utils'
import useSushi from './useSushi'
import useBlock from './useBlock'

const useCanUnlockZD = (account: string, pid: number, token: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const sushi = useSushi()
  let masterChefContract = getLaunchPoolZDContract(sushi)

  if (token == 'TOOLS') {
    masterChefContract = getLaunchPoolTOOLSContract(sushi)
  } else if (token == 'XPO') {
    masterChefContract = getLaunchPoolXPOContract(sushi)
  }

  const fetchBalance = useCallback(async () => {
    const balance = await getCanUnlockToken(masterChefContract, account, pid)
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

export default useCanUnlockZD
