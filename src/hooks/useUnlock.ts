import { useCallback } from 'react'

import useSushi from './useSushi'
import { useWallet } from 'use-wallet'

import { unlock, getLaunchPoolV1Contract } from '../sushi/utils'

const useUnlock = (account: string) => {
  const sushi = useSushi()
  const masterChefContract = getLaunchPoolV1Contract(sushi)

  const doTx = useCallback(async () => {
    try {
      const txHash = await unlock(masterChefContract, account)
      return txHash
    }
    catch (ex) {
      return ''
    }
  }, [])

  return { onUnlock: doTx }
}

export default useUnlock
