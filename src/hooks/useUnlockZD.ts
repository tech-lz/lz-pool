import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { unlockZD, getLaunchPoolZDContract, getLaunchPoolTOOLSContract, getLaunchPoolXPOContract } from '../sushi/utils'

const useUnlockZD = (account: string) => {
  const sushi = useSushi()
  let masterChefContract = getLaunchPoolZDContract(sushi)

  const doTx = useCallback(async (pid: number, token: string) => {
    try {
      if (token == 'TOOLS') {
        masterChefContract = getLaunchPoolTOOLSContract(sushi)
      } else if (token == 'XPO') {
        masterChefContract = getLaunchPoolXPOContract(sushi)
      }

      const txHash = await unlockZD(masterChefContract, account, pid)
      return txHash
    }
    catch (ex) {
      return ''
    }
  }, [])

  return { onUnlockZD: doTx }
}

export default useUnlockZD
