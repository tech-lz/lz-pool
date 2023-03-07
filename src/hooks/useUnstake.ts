import { useCallback } from 'react'

import useSushi from './useSushi'
import { VERSIONS } from '../sushi/lib/constants'

import { unstake, getMasterChefContract } from '../sushi/utils'

const useUnstake = (pid: number, version: string, decimals: number, account: string) => {
  const sushi = useSushi()
  const masterChefContract = getMasterChefContract(sushi, version)
  let masterChef = masterChefContract

  const handleUnstake = useCallback(
    async (amount: string) => {
      const txHash = await unstake(masterChef, pid, amount, account, decimals)
      console.log(txHash)
    },
    [account, pid, sushi],
  )

  return { onUnstake: handleUnstake }
}

export default useUnstake
